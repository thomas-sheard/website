---
date: '2026-07-02'
draft: true
title: "Spotify's album quality URL coding"
---

A while ago, just after swapping to Linux (I was running EndeavourOS + Hyprland at the time) I experimented with a custom media popup for one of my then-unmapped function keys. For those unfamiliar, more barebones or customisable Linux systems do not come with fully mapped keys -- part of your configuration is binding commands or arbitrary code to each 'special' keysym (for example, the 'brightness up' key does not do anything by default). 
Keysyms can be found with tools that show information about the connected human interface devices, HIDs. On Wayland systems, the default tool for this is `wev`.
A typical output for pressing a key while running `wev` looks a bit like this:
```sh
[ 16: wl_keyboard] key: 65; state: 1 (pressed)
           sym: space        (32), utf8: ' '
[ 16: wl_keyboard] key: 65; state: 0 (released)
           sym: space        (32), utf8: ''
```
I've removed some of the redundant information from this output. We can see that the keysym is `space`, which is how we'd refer to it in our system configuration, and there are two distinct events for the key *press* and the key *release*.
The idea for the popup was to have my notification daemon `mako` send a notification (with some ID) showing information from the media player controller tool `playerctl` when the key was pressed, and then dismiss the notification (with that ID) on the key release event. In theory, very sound, very straightforward. 
Unfortunately the function row on ThinkPads only send a signal on the key *down* event; there is no second signal on the release.
This thwarted me fairly quickly, but not before I had a little bit of a play with Spotify's API and got the notification format configured.

To be clear, there are many solutions to this problem. I could've made it a toggle, or use a status file in `/tmp` to track state, or make it timeout, or... etc. But I settled on having `waybar`, my status bar, show any playing media which made the following findings redundant.

The aforementioned `playerctl` tool gives a suite of commands for interacting with media players, consistently (that is, the same commands will work with Spotify, Firefox, and Mixxx -- whichever is active). 
For example, in my laptop's Sway config now, I have this line:
```
bindsym --locked XF86Favorites exec playerctl --player=playerctld play-pause
```
Which binds the `XF86Favorites` key (ThinkPads have strange function rows) to `exec`ute `playerctl --player=playerctld play-pause`, telling the current playing media to toggle its play / pause state.

Another command provided by `playerctl` is

This gives us a link to a 640x640px image of the album art

Funnily enough #00B273 read as a hexadecimal colour is pretty similar to Spotify's green, which is #1ed760.
In RGB space, these are (0, 178, 115) and (30, 215, 96) respectively. 
That's a Euclidean distance of only $41.59$ units!
<!--$\sqrt{30^2 + 37^2 + 19^2} = \sqrt{1730} = 41.59$-->

<!--
The script in its entirety:
#!bin/bash

# currently thinking i load ALL song information, and update art, Oon the song change event, and then load the info on request..? this seems to be what spotify does!!!!!!!!

EXISTS_FILE=/tmp/spotifypopup

if [ -f $EXISTS_FILE ]; then
  rm $EXISTS_FILE
  makoctl dismiss -g
elif [ ! -f $EXISTS_FILE ]; then
  touch $EXISTS_FILE
  URL=`playerctl --player=spotify metadata mpris:artUrl`
  wget -O /tmp/current_album "${URL/0000b273/"00004851"}"
  notify-send -c spotify "`playerctl --player=spotify metadata title`" "`playerctl --player=spotify metadata artist`, `playerctl --player=spotify metadata album`" --icon /tmp/current_album
fi

-->

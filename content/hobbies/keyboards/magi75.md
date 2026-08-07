---
date: '2026-06-30T11:17:40+10:00'
draft: true
title: 'IQUNIX Magi75'
weight: 2
---

While the [Zoom](../zoom65) is a great keyboard that I still get enjoyment out of, it has not been able to facilitate the progression of my computer use. 
The majority of my time on a computer now is spent writing code in some form or another, even if just as an interactive shell.
Now that I have my desktop in Melbourne, upgraded and running Linux, ideally I would be able to use it as my desk workstation instead of moving the Zoom into a drawer to make space for my laptop. My dotfiles also reflect this, with a portable but [machine-diverse Sway configuration](https://github.com/thomas-sheard/dotfiles) that I update and use on both machines. 

The Achilles' heel of the 65% layout for me, now, is the backtick key. Escape is pushed down to be inline with the 
numeric row. 
This means you lose the function row, using Fn + $x$ to access function keys, and lose the secondary behaviour of the function row (eg. media and brightness control).
Most significantly Escape replaces the tilde / backtick (~ / \` ) key that typically sits below it. 
This key is very important for programming and Unix terminal navigation, as ~ represents the home (user) directory and the backtick is often used as a variation of quotations in both Bash and Markdown (among other things). 

<!--
For a tangible example, suppose we have just downloaded many images and they have landed in a `Downloads` folder. 
We'd like to move them to a `project/images` directory.
In a graphical environment, depending how the images are named, you might be able to click and drag to highlight them all (and use shift or control click to include any stragglers), and then have the target location visible (or even open in another instance of your file explorer), which lets you drag and drop them in.
This is intuitive, sure, but slow, and needing multiple instances of one software open to perform one (very simple) action is sort of absurd when you think about it.
In a terminal, we can execute a single command that looks something like this:
```sh
~/Downloads $ mv `ls | grep *.png` ~/first/images
```
`~/Downloads` tells us where we are (the downloads folder), and `$` indicates that the computer is ready to be told what to do. 
The rest is the command.
It logically (in the formal sense) starts with `ls`, the list command, which prints out everything that is in our current directory.
This list is "piped" with `|` to `grep`, a tool that filters the output to only include elements which match its argument, `*.png`. 
The asterisk is a 'wildcard', matching with anything, followed by `.png`.
So `ls | grep *.png` gives us a list of all the PNGs in the current directory.
We use backticks to envelope this list and pass it to the move command `mv`, which then moves them all to `~/project/images`. 

The terminal command sounds much more complicated, and it is -- there is indisputibly a larger requisite amount of knowledge here -- but once you know these rules you can very quickly do things that would get frustrating on a graphical system. 
Images are nested within their own respective directories? A nightmare on a GUI. Just use `find` instead of `ls` on the terminal.
The command line version is slower to learn but quicker to use, and scales to complicated cases much more readily.

This terminal-glazing tangent is only to say: using a Unix system without the backtick key can feel very restrictive because you simply do not have access to some of your most useful and versatile tools.
-->

The most straightforward solution to this was to bind another keychord to the Zoom that allowed me to print these characters (maybe `Fn + t` for tilde and `Fn + b` for backtick would be sensible choices), but I had recently received a academic award and had just set up my desktop with the now four year old Zoom. It was the perfect environment for me to decide to buy another one.

## Options

I knew I wanted 75% (ish) to get the function row and backtick back, and low profile so that the adjustment between laptop (where I do most of my typing) and desktop was less jarring.
When building the Zoom I was vaguely aware of [NuPhy](https://nuphy.com.au/) as a popular brand for low profiles. Their boards are not my style, but this was a starting point. They also seem to have fallen off slightly in favour of [Lofree](https://www.lofree.co/), which are popular (and locally available in Australia which is perhaps an unexpectedly large pro). 
The [Flow](https://www.lofree.co/products/lofree-flow100?variant=45077013823707) and [Flow lite](https://www.lofree.co/products/flow-lite84-mechanical-keyboard?variant=46080169115867) were appealing, but not quite right.
<!--
They also get mixed reviews and I got mildly cheap vibes from the website that were just enough to give me pause. For something like this, I am biased towards spending more for quality.
-->

I knew I was looking for a prebuilt and primarily buying for the chassis, as I struggled to find any chassis kits and wasn't particularly keen on paying triple shipping costs up front again, so this was my focus.
The Flow lite has only pale colourways and the Flow darker colourway is really only dark in the keycaps; the chassis is still an anodised bluish-grey.
I eventually found the [IQUNIX MQ80](https://iqunix.com/products/mq80-aluminum-low-profile-mechanical-keyboard), which was much closer to what I wanted but pretty rugged. It's a nice board, but I didn't want a feature piece.
This led me to their [Magi75](https://iqunix.com/products/iqunix-magi75-96-aluminum-low-profile-mechanical-keyboard) which is, obviously, the board I ultimately chose. 

The Magi series has both 75 and 96 percent lines, each with a regular and Pro version.
I think the Pros are fairly ugly with their large side panel, but the regular lines look great.
They are simple but not without flair. 
There is no loud IQUNIX branding and the dark colourway is the right shade of dark grey for my desk.
I mainly like how the switches are in between sunken and floating key.
This means lighting can diffuse without being fully exposed, and the board is (I think) visually interesting both from across the room and while using it.
It's also *heavy* for a low profile. 
Many low profile boards advertise how light they are for portability, which is not a relevant selling point for me.
The Magi75 as the smallest of the series comes in at 947g, with the other three being over a kilogram in weight.
It's a solid piece of desk equipment, which was perfect.

The chassis was exactly what I was looking for, which was, as mentioned, my priority. 
Besides that, it comes with Kailh Gold Reds, which are a fairly light linear switch. I had wanted to try linears since the Zoom. Tactiles are great, and are the most similar to membrane keyboards. I cannot stand clickies; I've tried them once on my best friend's Drop ALT with Kailh BOX Whites and they are too disturbing for me. 
Linears were sort of alien and hard to imagine without having tried them, so the Gold Reds were a curiosity at worst.
The keycaps are inoffensive. I wouldn't choose them if they didn't come with the board but I like the grey and ochre palette, and low profile caps are a notoriously restricted market because low profile stems vary significantly between switches.

My only real pause with the board were some mixed reviews about IQUNIX's reputation for shipping, with some people allegedly never receiving their order and IQUNIX customer service being unresponsive.
I slept on it for a few days, but ultimately decided that it was likely a case of the worst experiences being the loudest and bit the bullet. 

Initially poor shipping was my experience. I heard nothing from iMile for over a week. As far as I was aware, the board was sitting in a depot in China waiting to be collected. 
I then received a notification at 9pm saying the parcel was out for delivery with a link to a different tracking website, Yuntu Logistics, that showed a comprehensive update to the granularity of when the parcel had been loaded and unloaded from the plane.
If you're in Australia and order from IQUNIX, maybe try pasting your tracking number into [YunTrack](https://www.yuntrack.com/) instead?
The board arrived midday the next day.

## Use and modding

Setup was fairly straightforward 

![Complete board](/images/magi75/full_board.jpg)

![Keycaps removed, prior to mod](/images/magi75/keycaps_removed.jpg)

![sonic with the foams](/images/magi75/foams.jpg)

![Battery ribbon cable connection](/images/magi75/battery_connection.jpg)

![Second cable connection](/images/magi75/second_connection.jpg)

![Inside of board](/images/magi75/board_underside.jpg)

![Foam strips with finger for scale](/images/magi75/foam_scale.jpg)

![Example of foam insertion](/images/magi75/foam_mod_process.jpg)

![Spacebar stabs after foam mod](/images/magi75/foam_mod_example.jpg)

![Replacing keycaps](/images/magi75/rebuilding.jpg)

![All stabs modded](/images/magi75/finished_mods.jpg)

set it up, tried it, really love it
linears are interesting
not sure i like having no initial resistance -> keyboard navigation and gaming means my hands are always on the home row and space bar
i accidentally press things
the pcb is hotswap so i will stick with it and if i don't like them i will probably pick up a set of [low profile kailh browns](https://www.kailh.net/products/kailh-choc-v2-low-profile-switch-set?variant=43775877972210)

i'm also not super keen on the 

this may sound like i am not keen on $\frac{2}{3}$ of the board, but i couldn't find any low profile kits, especially ones that were not group buys (i feel like i have had that experience for the time being). 
I was very much purchasing this for the chassis and the layout, and they are absolutely perfect. i love it

everything else is mutable, and therefore not a problem

space and backspace were very rattly
removing the keycaps made it very obvious that it was just loose clip in stabs
can be removed with a bit of pressure from the back and tweezers to pull in the clip

after returning from the break i took it apart.
the teardown was fairly straightforward
given there are no guides, i documented the process

mod used some leftover very thing foam layer from the zoom
cut into tiny sections, 1x4mm? tops
unclip the stabs, use tweezers to place the foam under the edge, clip them back down
fiddly, but works a treat
did all of them to be safe
also put some lube (krytox 205G0) on the rattly ones
wayyy better now
space is still a bit rattly, i suspect it's the wire
but not enough to detract from typing; before it was very noticeable
backspace completely fixed

great keyboard, would recommend if you're happy to open it up 

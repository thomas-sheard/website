---
date: '2026-07-28T10:21:50+10:00'
draft: false
title: 'Synchronised Notes'
---

Since upgrading my desktop hardware and getting [a new keyboard](/hobbies/keyboards/magi75), I wanted a reliable and seamless way to use both my laptop and desktop for university work.
Generally I prefer sitting at my desk for more dedicated writing, such as assignments, while I use my laptop for notes during lectures and working on assignments more flexibly. My requirements were, in order of importance:

1. Have notes for courses sync automatically between both devices,
2. Have the sync be quick, so that I can change device spontaneously,
3. Automate remote backups using Git to remove push / pull antics and the risk of merge conflicts.

For synchronisation, [Syncthing](https://syncthing.net) is a common solution -- an encrypted peer-to-peer file sync tool. It was pleasantly easy to set up. `localhost` opens and lets you connect (symmetrically) to any other local device also running Syncthing. 
You choose the thing you want to sync (it's aptly named) and then it just sort of... does it. 
It did mean splitting my uni resources into synced (notes and assignments) and desynced (eg. financial admin) directories, but that was a nonissue for me.

I also wanted the synced files backed up on Git.
I use my laptop more frequently, and I will never be at my desktop without my laptop nearby (while the converse is not true). This means my laptop should have the authoritative copy, and be responsible for pushing to remote to avoid merge conflicts.
I wrote a simple Bash script that checks for changes and automatically commits with formatted date and time:
```bash
#!/bin/bash

# get in the right spot
cd ~/Desktop/university/ || exit

# stage
git add -A

# only commit and push if more notes have been added
if ! git diff --cached --quiet; then
  git commit -m "Automatic backup $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
fi
```
The script is then scheduled to run every half hour with a `cron` job:
```sh
# git notesync for uni (half-hourly)
*/30 * * * * /home/thomas/bin/bash/notesync.sh
```
And that's it. If my notes have changed, they get automatically backed up with a timestamp. If there's nothing new, the script exits silently. 

I've been impressed with how snappy Syncthing is, and the Git scheduling is satisfying to have chugging along by itself.
I've also found myself spurred to take higher quality notes because I know they're being tracked (I am my own panopticon). This solution also makes your Git commit history look very impressive after a day of study, though not publicly.

My only gripe is that Syncthing, being P2P, requires both devices online to do any synchronisation. 
This isn't a huge deal because, as mentioned, if I am at my desktop then my laptop is likely nearby, but it's worth mentioning.
I might set up the Raspberry Pi as an always-on middle-man server that they each can talk to, or try to figure out a way to use the remote Git backup as the server without a) having version issues and b) spamming excessive push / pulls. 
Maybe I will revisit this in the future, but for now it is a simple solution that's working well. 

### Addendum, two months later

I've been using this setup long enough for it to show its flaws now.
The main issue is maintaining version history when editing on my desktop.
It's proven to be fairly fragile when I'm careless about it.

Syncthing takes about a minute to kick in, so there's a bit of a wait and I've learned to double check that it's happily connected and syncing the most recent version before making any edits. 
It's perfectly happy to nuke a file in favour of a newer version, and leave a trail of undesirable sync-error files which get pushed to remote.
This sort of goes against my second requirement, but in reality it's not any longer than it takes to open all the files and windows I need to start working anyway.

Additionally, when editing on my desktop I had taken to having a terminal open running a loop that slept for 600 seconds and then ran the notesync script, essentially backing up the desktop files every 10 minutes.
Git gets extremely grumpy if each machine tries to assert different versions, and this solution meant that if my laptop ever tried to run the half-hourly backup while my desktop was also running the loop, things would break fairly spectacularly.
This is exactly what happened in the worst Git conflict I've ever had to resolve, which was an impenetrable (to me) tangle of corrupted histories and detached heads after I took a quick break at 4:30pm. 
I nearly gave up and reinitialised the entire repo, but was (luckily) able to restore the last uncorrupted commit and only lost a couple of hours of commit history, retaining all the tangible work.

The solution to all of this is... to have my laptop open while I work on my desktop. That's it. 
I let Syncthing run in the background and keep the laptop responsible for pushing.
I'll either have it on charge on my bed or just next to me on my desk.
It even turns out that it's handy to have both machines within reach in case I need them for something that's not synced, or just having a bit more compute readily available.
I recently had my laptop running some R scripts while I wrote the corresponding report on the desktop.

This is a nice pragmatic solution that maybe sounds a bit clunky but really isn't in practice, and keeps all the benefits of this fairly lean setup without an overengineered redesign. 

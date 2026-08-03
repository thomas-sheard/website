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

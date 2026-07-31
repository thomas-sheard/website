---
date: '2026-07-28T10:21:50+10:00'
draft: true
title: 'Synchronised Notes'
---

Since upgrading my desktop hardware and getting [a new keyboard](/hobbies/keyboards/magi75), I wanted a reliable and seamless way to use both my laptop and desktop for uni work.
Generally I prefer sitting at my desktop for more dedicated writing, such as assignments,
while my laptop is used for notes during lectures and working on assignments while out.


I'm never at my desktop without my laptop nearby, either, so I haven't needed to worry about what happens if I boot the desktop when my notes have been updated, but the devices aren't able to talk to each other.
This also means the laptop will be responsible for pushing to the remote server, to avoid merge conflicts.

My requirements were, in order of importance:

1. Have notes for courses sync automatically between both devices,
2. Have the sync be *quick*, so that I can change device spontaneously,
3. *Automate* remote backups using Git to remove the need for push / pull antics.

For syncing, [Syncthing]() is a common solution. It is a P2P 

It was pleasantly easy to set up; localhost pops up and lets you connect to any other device also running Syncthing. 
You choose the thing you want to sync (it's aptly named) and then it just sort of... does it. 
It did mean splitting my uni resources into synced (notes) and desynced (eg. financial admin) branches, but that was a nonissue for me.


uni notes separated into synced and desynced
syncthing to share the folder

also have them backed up
simple bash script that checks for changes and commits with date/time
cron hook

```bash
#!/bin/bash

cd ~/Desktop/university/ || exit

git add -A

if ! git diff --cached --quiet; then
  git commit -m "Automatic backup $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
fi
```

This script is then scheduled to run every half hour with a `cron` job:
```sh
# git notesync for uni (half-hourly)
*/30 * * * * /home/thomas/bin/bash/notesync.sh
```
And that's it. If my notes have changed, they get automatically backed up with a timestamp. If there's nothing new, the script exits silently. 
It's a great solution that's working beautifully so far. 
I've been impressed with how snappy Syncthing is, and I've also found myself more spurred to take high quality notes because I know they're being tracked. (It also makes your commit history look very impressive, though not publicly).

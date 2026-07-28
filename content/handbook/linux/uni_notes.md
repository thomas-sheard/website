---
date: '2026-07-28T10:21:50+10:00'
draft: true
title: 'Synced uni notes'
---

use cases (desktop: assignment, laptop: notes)
useful to have them consistent

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

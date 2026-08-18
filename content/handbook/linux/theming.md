---
date: '2026-08-18T17:12:59+10:00'
draft: true
title: 'Centralised Global System Theming'
---


I've been using the same system colours, OneDark, for almost 4 years at this point.
This palette is used for my terminal, text editor, status bar, compositor, and website.
Living in the terminal means I spend almost all of my time looking at these colours. I'm fairly impressed that it took me this long to get sick of them.

I think a significant contributing factor for this is just how baked in it became to my system.
All of my config files, down to my application launcher, used direct hex to set up colours.
This is a product of learning what I like over time and incrementally adding things, tweaking them as required to bring them in line with everything else.

[setting up Typst](/handbook/linux/typst), 

Initially wanting to scrap underlining of titles because they were visually cluttered
arose from lsp tinymist semantic tokens
spent ages recolouring these tokens
swapped to treesitter and saw it was nicer for highlighting but still too much
subseqently realised I wanted a more muted palette that blended in to itself more easily.

Visual clarity is great, but the contrast for a typesetting language was just too much for me.
For LaTeX this contrast works; there is not much of a divide between prose and code. 
Even text emphasis requires an explicit macro, so having these be hot pink is very handy.


clearly want a centralised palette file, so we need, somewhere
```sh
themes/
    |- onedark
    |- nord
    '- everforest
```

- challenge is in making everything that needs the theme understand it
- make generation script that chews up the theme and spits out program-by-program themes right into the conf directory
- these can then be sourced by each one without issues
- read toml as a dictionary
- waybar section as a simple example
- just needs css
- then include it in the directory
- (after ~lots of~ some troubleshooting) it works! awesome
- repeat this process for everything else
    - actually very straightforward once you've figured out how to do it
    - just repeating
- eg sway is the same situation, sway has a specific way of reading input files so we set up the file to make sense to it, include that file, and then read in sway variables
- the hex is the same
- foot needed hex without a hash so needed a little helper function to strip that, but that was the only complication before **nvim**
- this was... very daunting
- foray into typst recolouring meant i was more comfortable with the idea and is probably why i approached this in many ways
- knew it would just be a matter of hooking the palette into various lua modules
- so.. do that. read it into a lua table, set it up,
- nvim looks for colorschemes in a specific location, so put the theme declaration there
- squash errors as they come up until it launches and seems happy
- and then manually churning through each of the TS highlight queries and setting them generically
- sort of task genAI is perfectly suited to this! give it an idiomatic example of what i need and the parameters and tell it to go
- it worked! insofar as it assigned hideous colours, but it *did* assign them
- just a matter of going through and tweaking them
- and then this will be expanded with eg. lualine, typst (ha. full circle), as things crop up that are especially troublesome
- error diagnostics are especially annoying. usual tool is :Inspect, which shows you how the syntax under the cursor is beiuun interpreted
- but error diagnostics do not occur in the text of the buffer so you can't cursor on theme
- squashed a bunch
- sure more will come up, but eventually you run out of things (right?)
- and now the theme is just... applied. across everything
- then realised i could actually put
- this was never really the goal, i just wanted to tweak the colours to be a bit more muted
- but this now means that the entire machine's aesthetic can be totally revamped immediately
- it's literally a theme engine i just wrote a theme engine
- went a bit bonkers collecting them. alot look crap.
- for a bit of fun, i hooked up the website to the engine. 
- it's very likely to stay as nord for a while, or at least only be flagged for theming when i actually change my system theme
- but it's cool
- the architecture does NOT work for light themes, but they look kind of nice on the puter
- it was a good exercise in just attemptin something
- i think it helped that i'd sort of been foraying into it for the past few days but it wasnt as bad as i thought
- and now my puter can look however i want which is lovely
- and if i need to add more programs in the future, it will be as easy as it already was if not easier because now everything use generic idiomatic variables instead of hex
- just means adding a section for it in generate.py 
- super silly but cool project. don't even think i'll use it but it's cool it's there



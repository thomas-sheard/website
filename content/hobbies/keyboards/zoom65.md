---
date: '2026-06-30T11:17:30+10:00'
title: 'Meletrix Zoom65 V1'
weight: 1
---

This is the first keyboard I built.
It was my 18th birthday gift to myself, and I was intent on building the 'entire' thing. That is, source the frame, switches, and keycaps independently as opposed to a prebuilt (where you buy a whole keyboard and a whole keyboard shows up).
This approach is, I think, significantly more fun and rewarding, but as you'd expect requires a corresponding amount of extra research. 

I started with the frame (also called the case, base, or chassis), which I wanted to be clean and compact. Keyboards come in various sizes, represented typically as percentages of a full (100%) keyboard. A full-size board has everything you could expect to find on a keyboard. 
96% boards retain all the keys, but remove separation between key clusters (eg. between the numpad or function row and the main keys).
80% (also called tenkeyless or 'TKL') boards drop the numpad, and 75% is a condensed 80% (ie. the compressed 96% without a numpad). 
75--80% are generally the best 'default' pick; they retain most of the functional keys in a compact footprint, and drop the numpad (which are used dwindlingly, and can be emulated entirely, if less efficiently, by the remainder of the board).
65% drops the function row and some navigation keys, and 60% drops the navigation keys leaving just the main alphanumeric keys and arrows. 
40% boards are the smallest you would ever practically expect to see, and retain only alphabetic keys, space, and basic modifiers like Fn to activate bind layers that can access the physically absent keys.

Within each of these sizes, there are variations for the actual composition of keys within it. Most keyboards in Australia follow the ANSI (American National Standards Institute) layout, whereas the ISO (International Organisation for Standardisation, of Switzerland) layout, commonly used in Europe, has a larger enter key spanning two rows and language-accommodating modifications for symbols and diacritics (like AltGr, which sits to the right of the spacebar and allows access to various international currency symbols). Standardisation as a whole is an [interesting topic](https://www.youtube.com/watch?v=nAsrsMPftOI).
There are also permutations of the arrangement of alphabetic keys, with QWERTY as the default. AZERTY is French, DVORAK is rearranged for English efficiency, etcetera.

When choosing a case for a board, size is most important. Each size generally accommodates many layouts by having intersecting switch contacts, and key positions are generally remappable in software (and by swapping keycaps).
Since I intended to use this board primarily for gaming and light work on my desktop with a fairly small amount desk space, I settled on 65%. Many 65% boards, like the popular [Keychron Q2](https://www.keychron.com/products/keychron-q2-qmk-custom-mechanical-keyboard?ref=yz9s3uMR0PdFNS), offset the arrow cluster, which I find displeasing. This largely dictated my search. I eventually found the [Meletrix Zoom 65](https://zoom65.com) in black, with a black back mirror and anodized rose gold weight and knob. It's a hot swap board, which means switches do not need soldering to the rear connections and can instead click into place. This is great to avoid fiddly soldering, and also for the safety and ease of changing your switches down the line.

Switches are interesting.
Most readily available keyboards nowadays are rubber-dome membrane boards, which have a sheet of rubber sandwiched between the PCB and keycaps.
The rubber has domes under each switch, which provide the switch action by returning to their moulded form after being depressed.
There are little electrical contacts on the upper inside face of the dome which complete the circuit to send the key signal.
These replaced mechanical keyboards as the norm because they are so much cheaper and less fiddly to produce, but they do not feel as nice to type on. This is, I think, a large reason why mechanical keyboards are still around.
If you have a crusty old membrane board somewhere they're quite fun to take apart because they're very simple, hard to break, easy to clean, and easy to see how they work.

The feeling of a membrane board, and therefore the feeling of keyboard most people are used to, is called *tactile* (or 'brown'), where the key slightly resists being pressed until a certain threshold of pressure is applied, at which point the key mechanism buckles and completes the circuit.
If we think about the force required at some key travel distance, a tactile switch has a distinct tactile 'bump' in the plot at this buckling point, seen in the middle plot below.
![Switch force-travel plots](/images/zoom65/force_travel_plots.png)
*Image courtesy of trivia.elpopular.pe, though their site redirects to a different one whose HTTPS cert is invalid so maybe don't pay them a visit.*

Switches are often marketed with this force-distance curve to give a sense of how they feel without using them.
Another popular option is *linear* (red) switches, which appropriately have a linear force-distance graph.
The resistance you feel increases proportionally to travel distance.
The final mainstream kind is *clicky* (blue), which are similar to tactile with a much shorter, sharper tactile bump and a distinctive high-pitched click when the key pressure threshold is overcome. I do not like clicky switches.

The colours associated with each kind come from one of the original producers of mechanical switches, [Cherry](https://www.cherry.de/en-us/company/about-cherry), which had the three kinds distinguished by brown, red, and blue stems respectively and it stuck.
Since the feel of tactiles was fairly familiar, I chose these for my first board. Within each kind there are many different variations on the force-travel curve while maintaining the same shape (such as higher actuation force switches like [these absurd 280g actuation switches](https://shop.tai-hao.com/products/apc-switch-55g65g280g-click), or lower travel distance switches for [low-profile boards](../magi75)).

Historically a popular kind of tactile was the Holy Panda, allegedly made by one guy combining the housing and internals of two previous, unpopular switches in his garage. Due to the poor scaling of this method, they are also very limited. (I imagine this exclusivity plays into the exaggeration of how good they were; it's an unfalsifiable claim).
The spirit of these switches was reproduced as [Glorious Pandas](https://www.gloriousgaming.com/products/panda-mx-switches), which aimed to emulate the Holies. These were what I went with.

Finally, for keycaps, I had seen [osume](https://osume.com)'s website a few times while searching and liked the vibes of their products. It was fairly straightforward to choose their [mochi keycaps](https://osume.com/products/mochi-keycaps) under the rationale that any of their more colourful cap sets are designed to replace parts of the base kit, so changing the look would be easy later on.

## Building

The switches arrived first, then keycaps, then the chassis.
The switches and keycaps were 'normal' insofar as the products actually existed at the time of purchase, so arrived as expected.
The chassis was a group-buy, which I discuss more thoroughly on the [Keyboards](../../keyboards) homepage.
It is a business practice where all orders are taken before production starts to control stock and expenses.
This resulted in a not-uncommon 5 month delay between ordering and receiving, even being late to the party (though delivery to Australia might cancel that out. Unsure).

Regardless everything did eventually arrive and I had a great time putting it all together. I did have the foresight to take photos throughout the process but they are... wonky. Apologies. 

A perhaps surprising amount of the inside of premium keyboards is either foam for acoustics or sheet metal for weight. Several layers of foam in a very specific order that I now cannot remember are clamped in between the switches and a plastic plate, which is in turn fixed in place by the switches clipping into the PCB.

![Half switches connected to PCB](/images/zoom65/half_switch.jpg)
![All switches connected to PCB, unpowered](/images/zoom65/full_switch.jpg)

The wider keys also have stabilisers (termed 'stabs' affectionately), which are the black half-switch looking things on either side of left shift, return, and the spacebar. These, logically, stabilise the wider keys. You can't just have a switch on either side, as this would double the actuation force, so stabilisers are essentially electronic-less and resistance-less slim switch housings connected by a large staple-shaped piece of wire. 
They keep the wide keycaps level, and also keep the force distributed evenly so that pressing on the right side of the spacebar also pulls the left side with it (instead of tilting). 
Many things can be off with stabilisers, like the wire being twisted, friction or poor fit between the wire and stem or stem and housing, sitting unevenly in the case, and the wire rattling. 
These all create scratchy, pingy, or rattling noises that detract (distract?) from the feel and sound of the board and so need tuning. 
This turned out to be one of my favourite parts of the process, as you iteratively diagnose, dismantle, tune, and assemble a sound that you like. It's pretty good.

After fitting everything to the PCB and before fitting the PCB to the case, we do a quick power check:
![All switches connected to PCB, powered (RGB)](/images/zoom65/full_switch_rgb.jpg)
Shiny.
Then the PCB drops into the top chassis housing from behind and is secured by more foam, more metal, a few screws, and then a shiny backplate.
![All switches, PCB in case](/images/zoom65/full_switch_case.jpg)
Finally the rotary knob and all keycaps can be added.
![Completed build](/images/zoom65/complete_rgb.jpg)
Now for connecting the board to a computer and mapping the keys with a program called VIA.
I personally have a strong dislike for VIA primarily because the paradigm of Linux and Vim keymapping is so great that I now struggle to find enjoyment in using anything else, especially graphically, but it's serviceable. 
They are fundamentally different, as the former is mapping keysyms while the latter is using them to execute arbitrary code, but the latter also somewhat makes the former redundant (as long as there *is* some keysym bound).
It also has bizzarely limited support despite being 'the' tool for this, and requires Chromium plus HID permissions which you might have an opinion on, and has never 'just worked' for me, even on Windows.
It's at least nice that it flashes the mappings to the board itself so they persist across power cycles and devices.
![VIA keymapping software](/images/zoom65/via.jpg)
And then the board is done and ready to use.
![Connected to PC](/images/zoom65/full_connected.jpg)
Very good!

I do remember having the same distinct feeling I used to get when (re)installing an operating system on a machine, especially installing Linux for the first time. It can be fairly anticlimactic when you've just poured a nonzero amount of effort into a tool and then realise you don't immediately have a significant use for it.
I have used this board plenty though and still love it. It is now (pretty much exactly three years later) well overdue for a dismantle and deep clean.

I loved building this board.
It was a great learning experience and has given me a fantastic keyboard that I still use regularly on my desktop, primarily for gaming due to the extended key travel depth.

That said, my approach to building a barebones board is not universal; I actually suspect it might be easiest to start with keycaps that you like, as this reduces the 'funnel' of choice by working backwards to a board.
Keycaps fit a profile of switch, so you already reduce the number of decisions you make, and the decisions you do make start aesthetic (and therefore intuitive) before progressing to technical.
Though I can imagine this direction feeling much more arbitrary and restrictive. I'm not sure. Someone please try it and let me know.
I can definitely recommend the experience if it is an option for you.

As a final remark, Meletrix have subsequently released a V2, V2.5, and V3 of the Zoom. While I love mine, I have seen mixed responses to the newer versions so definitely do your due diligence.


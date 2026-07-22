---
title: 'Part 1: Simulating a double pendulum in Rust'
draft: true
weight: 1
date: 2026-07-22
---

Part one
outlines simulation
some body text


I have always thoroughly enjoyed chaotic systems. I will avoid too much online-recipe-esque preamble, but there is something about them that is particularly interesting to me (I'm almost certain Michael Crichton somewhat got me set on them). Of these, a double pendulum is my favourite, and simulating one had been on my project ideas list for genuinely years, but it seemed like quite the undertaking and I never took the first step. 

Until 2swap released <a href="https://youtu.be/dtjb2OhEQcU", target="_blank">a fantastic video</a> on the subject, spurring me to finally pull my thumb out. This project essentially became reproducing their results, but maybe that structured approach is what I needed, and does not diminish this as a worthwhile learning experience (and, as we will see, I found myself down several interesting rabbit holes).

I chose to write this in Rust, as it is performant, fun to write, and will be great practice for when the industry shifts away from C++ (?). I used <a href="https://nannou.cc/", target="_blank"><code>nannou</code></a>, a creative coding crate, for visualisations as

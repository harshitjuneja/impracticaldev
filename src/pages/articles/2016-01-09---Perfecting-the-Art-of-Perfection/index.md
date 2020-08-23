---
title: Stop being scared😵 of Javascirpt Promises!
date: '2020-08-16T23:46:37.121Z'
layout: post
draft: false
path: '/posts/promises-in-async-js/'
category: 'Javascript'
tags:
  - 'Async Programming'
  - 'Javascript Promises'
description: 'A lot of times we loose confidence over patterns/concepts we dont get a chance to use very frequently. Javascript promises is one such concept. For nearly 2 decades the Javascript community was surviving on callbacks to achieve anything async and hence a lot of abstactions in libararies/most code developers write is in one way or the other still exists with patterns of call-me-backs.'
---

A lot of times we loose confidence over patterns/concepts we don't get a chance to use very frequently. Promises in Javascript is one such concept.

For nearly 2 decades, the Javascript community was surviving on callbacks to achieve anything async and hence it's frequent to see a lot of code which still exists with a pattern of call-me-backs and overtime callbacks become the default pattern in which one thinks about async programming.

Encountering promises is a repeated expeience of learning the concept -> not using much -> being scared of the pattern -> repeat and hence it made all sense to document and learn about promises in a way that optimized the mentioned never ending learning loop. Welcome to the promise circus!

Note:
I'm nowhere against not using simply callbacks at all. But if given a choice of implementing an async construct, one should be familiar of what it brings along and what benifits one might have if you use an advanced language construct like Promises over callbacks.

## Callbacks 💩

Without any further questioning take a moment to understand/guess about how you think promiese might work.
![A diagram from Mozilla development network explaining promises](./promises.png)

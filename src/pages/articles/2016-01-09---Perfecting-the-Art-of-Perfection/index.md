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
description: 'A lot of times we loose confidence over patterns/concepts we dont get a chance to use very frequently. Javascript promises is one such concept. For nearly 2 decades the Javascript community was surviving on callbacks to achieve anything async and hence a lot of abstactions in libararies/most code developers write, in one way or the other still exist with patterns of call-me-backs.'
---

A lot of times we loose confidence over patterns/concepts we don't get a chance to use very frequently. Promises in Javascript is one such concept.

For nearly 2 decades, the Javascript community was surviving on callbacks to achieve anything async and hence it's frequent to see a lot of code which still exists with a pattern of call-me-backs and overtime callbacks become the default pattern in which one thinks about async programming.

Encountering promises is a repeated expeience of learning the concept -> not using much -> being scared of the pattern -> repeat and hence it made all sense to document and learn about promises in a way that optimized the mentioned never ending learning loop. Welcome to the promise circus!

Note:
I'm nowhere against not using simply callbacks at all. But if given a choice of implementing an async construct, one should be familiar of what it brings along and what benifits one might have if you use an advanced language construct like Promises over callbacks.

Promises are [supported](https://caniuse.com/#feat=promises) by all major browsers apart from IE 11 as per writing this article on August 2020.

# Callbacks 💩 cannot be trusted 🙅:

On assigning a callback function you have to blindly trust a third party (web-browser, some other utility's code) to call your program code asynchronosly (after some time). This blind trust will be broken when some of your worst fears come true:

- Your callback function doesn't get called back

- It might get called multiple times

- Any errors encountered during processing might get swallowed

A popular use case you must have come across is ring-fencing payments using 3rd party provider integration for card payments processing. Consider handing over trust and assigning a callback function once the payment collection process is complete. All good? Great.

Now imagine what havoc could occur if the card company pushes a buggy update that causes the above 3 points to take place:

- Callback doesn't get called: You cannot show a success/error page and even if the money is deducted your customer is just fixated on your payment screen. Award winning user experience!

- It might get called multiple times: This most probably would mean your customer's card has been charged multiple times. Guess who is not going to be happy?

- Any errors encountered during processing might get swallowed: For every exception that is called in the 3rd party call, we are clueless. We just assume everything went fine and if we have got a call back everything is hunky-dory.

Because of the callback pattern you don't have control over code execution anymore and have to blindly trust the 3rd party to be in good shape all the time. With promises, you can get back this control.

# What in the world are promises⭐?

//A paragraph on async js and inversion

Consider promise objects as placeholders in your code that magically get values after some time. So a promise variable at any point in time can either have a value or not have a value.

3 promise states are possible:

- Pending: initial state
- Resolved: completed successfully
- Rejected: failed because of some error

Promises are based on the revealing constructor pattern. It's very simple.

The promise constructor taken in function argument with two parameters and immedietly after constructing the instance, calls that function to change the state of the newly constructed object.

Look at the following code:

```js
const promiseObj = new Promise(
  // ******Immedietly call the function below after promiseObj is constructed*******
  function(resolve, reject) {
    // Call resolve method if you want to change the state of promiseObj to resolved
    // Call reject method if you want to change the state of promiseObj to rejected
  }
)
```

This pattern is followed so that no external entity can change the promise status apart from the promise constructor itself.

Without any further questioning take a moment to understand/guess about how you think promises might work.
![A diagram from Mozilla development network explaining promises](./promises.png)

# Methods on Promise instance

1. Promise.prototype.then()
2. Promise.prototype.catch()
3. Promise.prototype.finally()

# Promise utilities

1. Promise.all(iterable)
2. Promise.any(iterable)
3. Promise.race(iterable)
4. Promise.allSettled(iterable)

5. Promise.reject(reason)
6. Promise.resolve(value)

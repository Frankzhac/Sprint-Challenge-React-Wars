# Answers

1.  What is React JS and what problems does it try and solve?

React.js is a Javascript library for building user interfaces that takes advantage of its ability to render reusable components (pieces of code that can be put together to form scalable web pages and applications).

React.js strives to solve the challenge of reducing performance load (basically making DOM operations faster for quicker web content). A DOM operation in pure Javascript is actually costly when it comes to performance, and when you interact with a web site that deals with many components (like Facebook, with its various posts, photos, comments and other media), these repeated updates will become noticeable because the performance impact will stack up with such high numbers of objects to load up.

The so-called "virtual DOM" in React.js addresses this issue by comparing itself with new DOM updates and then changing only the parts of the UI that are actually affected by the DOM updates (this reduces DOM operations and page reloading/refreshing).

Comparing pure Javascript versus React.js in terms of dealing with the DOM using a car repair analogy:

Pure Javascript: Your tire is broken. Get a new car.

React.js: Your tire is broken. Virtual DOM tracks this change in your car's state "checks your car" and updates your tire "repairs your tire or gets you a new one".


1.  What does it mean to _think_ in react?

To think in React is to firstly think about what you want to make for a web page/app.

Once you have your app/page pictured out, break that concept into components or 'parts' that you can assemble in order to make this page/app (this is tied very closely to the idea of "divide and conquer").

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits.

1.  Describe state.

A state is a Javascript object that is used to keep track of various states of existence (like attributes) for an application or component.

1.  Describe props.

Props (shorthand for "properties") are the individual 'values' of a state, which are passed down to components that will make use of the state.

/*

title
body
author
views
comments
    (author, body)
isLive

*/

// Object Literal syntax
let blogpost = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(blogpost);

/*

{
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [ { author: 'a', body: 'b' }, { author: 'c', body: 'd' } ],
  isLive: true
}

*/

// Using constructor function

function Post(title, body, author) {
  // Pascal Notation (Post)

  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post("a", "b", "c");

console.log(post);

/*

Post {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 0,
  comments: [],
  isLive: false
}

*/

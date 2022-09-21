# Secure coding demo
This project is intended for demo and code-long in the Secure Coding course.
It aims to demonstrate the practical parts of SQL injection, XSS as well as how to guard against these types of vectors.

Use this snippet in the comment form to demonstrate XSS:
```html
Hi! I love this post!<img src=\"http://placeimg.com/640/480/nature\" onload=\"console.log('I can execute some malicous stuff right here! :)');\"/>
```

Use this snippet in the comment form to demonstrate SQL injection:
```html
http://localhost:3000/api/posts/20" or ""="'
```
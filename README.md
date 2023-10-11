# Hyper Island - 2pac Website for school project

Result project for six weeks of (Foundemental of HTML & CSS) I am thrilled to share that I have successfully completed a six-week course on the fundamentals of HTML and CSS, and I can't wait to show you the final project - my very own 2Pac website!

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Screenshot 2023-10-11 at 23 35 16](/assets/img/Screenshot.png)

### Links

- Solution URL: https://github.com/hassanidris/2pac-website
- Live Site URL: https://2pac-website.netlify.app/

## My process

### Built with

- SASS / CSS Variables
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- JQuery

### What I learned

To see how you can add code snippets, see below:

- CSS Variables

```scss
/*  Colors  */
--clr-black: hsl(0, 0%, 7%);
--clr-black-alpha: hsla(0, 0%, 0%, 0.9);
--clr-white: hsl(0, 0%, 100%);
--clr-white-alpha: hsla(0, 0%, 100%, 0.617);
--clr-grey: hsl(0, 0%, 64.71%);

/*  font-size  */
--fs-700: 2.25rem;
--fs-600: 1.5rem;
--fs-500: 1.375rem;
--fs-400: 1.25rem;
--fs-300: 1rem;
--fs-200: 0.875rem;
--fs-100: 0.7rem;
--fs-50: 0.5rem;
```

- Using VW unit with fontsize

```vw unit with fontsize
h1 {
    font-size: 5vw;
    font-weight: 400;
    line-height: 5vw;
}
h2 {
    font-weight: 400;
    line-height: 4vw;
}
h3 {
    font-size: 3vw;
    font-weight: 400;
    line-height: 3vw;
}
```

- Using auto-fit GridLayout

```scss
.playlist {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
```

## Author

- Github - [hassanidris](https://github.com/hassanidris)

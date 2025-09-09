// selecting elements by tag  ***
//  const nav = document.querySelector('nav')
//  nav.addEventListener('mouseenter', () => {

//  setTimeout(() => {
//      const h1 = document.querySelector('h1')
//      h1.textContent = 'Hi there'
//      // Javascript is camocase
//      h1.style.textDecoration = 'underline'
//      h1.style.fontWeight = 'bold'

//  }, 3000);

// // Exercise 1 ***
//  const h2 = document.querySelector('h2')
//  h2.style.color = '#FF0000'

// // select elements by id and class ***
// //  const aboutA = document.querySelector('#about')
// //  aboutA.style.color = 'orange'

//  const activeA = document.querySelector('.active')
//  activeA.style.color = 'blue'

// // combining selectors ***
//  const aboutA = document.querySelector('#about')
//  aboutA.style.color = 'orange'

// // if want to just select within an element can select the dom query element instead without having to search entire page
//  const section = document.querySelector('section')

//  // inside of section is when space (ex: section .active) and if section > .active is directly inside of)
//  const active = section.querySelector('section .active')
//  active.style.color = 'blue'

//  const p = section.querySelector('section > p')

//  const span = section.querySelector('section > span')

// // selecting multiple elements ***
// const activeElements = document.querySelectorAll('.active')

// // add border 
//  activeElements.forEach(el => el.style.border = '1px solid red')

// // more work but does same thing *
//  for (let i = 0; i < activeElements.length; i++)
//  {
//      activeElements[i].style.border = '1px solid red'
//  }

// Exercise 2 ***
// underline link "fork this project in github"
// 2 ways: site.js only and change it in index to ID or class and access via ID or class.
// const link = document.querySelector('footer a')
// const link = document.querySelector('.footer')
// link.style.textDecoration = 'underline'


 // Selecting body / title elements
 // selecting body
// document.body.style.backgroundColor('orange');
// document.title = "Tyler's Website"

 // Select parent and ancestor elements
// const contact = document.querySelector('#contact')

 contact.addEventListener('mouseover', () => {
    // contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue';
 });


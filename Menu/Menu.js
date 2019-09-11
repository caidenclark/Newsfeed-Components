/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function MenuComponent(items){
  menu = document.createElement('div');
  

let ul = document.createElement('ul');
let students = document.createElement('li');
let faculty = document.createElement('li');
let whatsnew = document.createElement('li');
let techtrends = document.createElement('li');
let music = document.createElement('li');
let logout = document.createElement('li');

logout.textContent = menuItems[5];
students.textContent = menuItems[0];
faculty.textContent = menuItems[1];
whatsnew.textContent = menuItems[2];
techtrends.textContent = menuItems[3];
music.textContent = menuItems[4];

menu.classList.add("menu");

ul.appendChild(students);
ul.appendChild(faculty);
ul.appendChild(whatsnew);
ul.appendChild(techtrends);
ul.appendChild(music);
ul.appendChild(logout);
menu.appendChild(ul);

return menu; 

};

let newMenuComponent = MenuComponent(menuItems);

let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', event => {
   newMenuComponent.classList.toggle('menu--open');
});

let headerDiv = document.querySelector(".header");
headerDiv.prepend(newMenuComponent);

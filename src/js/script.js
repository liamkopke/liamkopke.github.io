'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const categorySelect = document.querySelector("[data-category-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
var selectedYear = "all";
var selectedCategory = "all";

categorySelect.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectedCategory = selectedValue;
    selectValue.innerText = this.innerText;
    elementToggleFunc(categorySelect);
    filterFunc();

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function () {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedCategory === "all" && selectedYear === "all") {
      filterItems[i].classList.add("active");
    }
    else if (selectedCategory === "all") {
      if (filterItems[i].dataset.category.includes(selectedYear)) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
    else if (selectedYear === "all") {
      if (filterItems[i].dataset.category.includes(selectedCategory)) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
    else if (filterItems[i].dataset.category.includes(selectedCategory) && filterItems[i].dataset.category.includes(selectedYear)) {
      filterItems[i].classList.add("active");
    }
    else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectedCategory = selectedValue;
    selectValue.innerText = this.innerText;
    filterFunc();

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// custom select variables
const selectYearItems = document.querySelectorAll("[data-select-year-item]");
const filterYearBtn = document.querySelectorAll("[data-filter-year-btn]");
const selectYearValue = document.querySelector("[data-select-year-value]");

// add event in all select items
for (let i = 0; i < selectYearItems.length; i++) {
  selectYearItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectedYear = selectedValue;
    elementToggleFunc(yearSelect);
    filterFunc();

  });
}

// add event in all filter button items for large screen
let lastClickedYearBtn = filterYearBtn[0];

for (let i = 0; i < filterYearBtn.length; i++) {

  filterYearBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectedYear = selectedValue
    filterFunc();

    lastClickedYearBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedYearBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// On see more button click, make p with class timeline-text-short within the same li be hidden and p with class timeline-text-expanded within the same li be visible and vise versa
// Get all the buttons on the page
const buttons = document.querySelectorAll('.timeline-item-seemore');

// Loop through each button
buttons.forEach(button => {
  // Add a click event listener to the button
  button.addEventListener('click', () => {
    // Get the parent li element of the clicked button
    const li = button.closest('.timeline-item');

    // Get the two p elements within the li element
    const paragraphs = li.querySelectorAll('p');

    // Toggle the visibility of the paragraphs
    paragraphs.forEach(p => {
      p.classList.toggle('hidden');
    });

    button.innerText = button.innerText === 'See More...' ? 'See Less...' : 'See More...';
  });
});

// get all .has-scrollbar elements
const lists = document.querySelectorAll('.scroll-list');

// Start the animation for each list
lists.forEach(list => {
  // duplicate divs
  const div = list.querySelector('div');
  list.appendChild(div.cloneNode(true));

  // Get width of the list item
  const duration = div.querySelectorAll('span').length * 1.5;
  list.style.animation = `marquee ${duration}s linear infinite`;
  console.log(duration)
});

try{
emailjs.init('pB1-6hnSAgx0BhbJ9')
}catch(error){alert(error)}

try{
const btn = document.getElementById('buttontxt');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'liamkopke';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = 'Send Message';
      alert('Sent!');
    }, (err) => {
      btn.innerHTML = 'Send Message';
      alert(JSON.stringify(err));
    });
});
}catch(error){alert(error)}
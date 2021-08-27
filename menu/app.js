const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Perfect, just perfect. Doc, look, all we need is a little plutonium. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Watch this. Not me, the car, the car. My calculations are correct, 
    when this baby hits eighty-eight miles per hour, your gonna see some serious ***.  `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Okay, real mature guys. Okay, Biff, will you pick up my books? Stop it.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Uh, I think so. What did you sleep in your clothes again last night. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Hello. My god, they found me. I don't know how but they found me. Run for it, Marty. 
    My god, they found me. I don't know how but they found me. Run for it, Marty. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Uh, look me up when you get there. You broke it. Wow, look at him go.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `He's a peeping tom. Dad. Look at the time, you've got less than 4 minutes, please hurry. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Look, you gotta listen to me. But I can't go to the dance, I'll miss my favorite television program, Science Fiction Theater.  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `I'm sure that in 1985, plutonium is available at every corner drug store, but in 1955, it's a little hard to come by.
     Marty, I'm sorry, but I'm afraid you're stuck here.`,
  },
  {
    id: 10,
    title: "beef steak",
    category: "dinner",
    price: 37.99,
    img: "./images/item-10.jpeg",
    desc: `Why do you keep following me around? Marty, don't go this way. Strickland's looking for you. If you're caught it'll be four tardies in a row.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const btn_container_div = document.querySelector('.btn-container');


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>`;
  })
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}


function filterEvent(filter_btns) {
  filter_btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    })
  })
}

function displayButtons() {
  //display when load page
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']);

  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>
          ${category}
        </button>`;
  }).join('');
  btn_container_div.innerHTML = categoryBtns;
  const filter_btns = btn_container_div.querySelectorAll('.filter-btn');

  //when user click buttons
  filterEvent(filter_btns);
}


//load item
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayButtons();
})





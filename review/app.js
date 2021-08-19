// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },

];
const img_div = document.getElementById('person-img');
const author_h4 = document.getElementById('author');
const job_p = document.getElementById('job');
const info_p = document.getElementById('info');
const next_btn = document.querySelector('.next-btn');
const prev_btn = document.querySelector('.prev-btn');
const surprise_btn = document.querySelector('.random-btn')

let index = 1;

function welcome() {
  let review = reviews[0];
  author_h4.textContent = review.name;
  job_p.textContent = review.job;
  img_div.setAttribute('src', `${review.img}`);
  info_p.textContent = review.text;
}
function next() {
  index++;
  if (index > reviews.length - 1) index = 0;
  let review = reviews[index];
  author_h4.textContent = review.name;
  job_p.textContent = review.job;
  img_div.setAttribute('src', `${review.img}`);
  info_p.textContent = review.text;
}

function prev() {
  index--;
  if (index < 0) index = reviews.length - 1;
  let review = reviews[index];
  author_h4.textContent = review.name;
  job_p.textContent = review.job;
  img_div.setAttribute('src', `${review.img}`);
  info_p.textContent = review.text;
}
function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
function random() {
  let review = reviews[getRandomNumber()];
  author_h4.textContent = review.name;
  job_p.textContent = review.job;
  img_div.setAttribute('src', `${review.img}`);
  info_p.textContent = review.text;
}

next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);
surprise_btn.addEventListener('click', random);
welcome();



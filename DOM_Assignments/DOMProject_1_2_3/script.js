// Task1

const ul=document.querySelector('header>nav>ul');
console.log(ul);
// ul.removeChild(ul.lastElementChild);
// const icons = document.querySelector('footer>ul');
// icons.remove();
let projects = document.createElement('li');
let hire = document.createElement('li');

projects.innerHTML =`<a href ="#">Projects</a>`;
ul.appendChild(projects);
hire.innerHTML =`<a href ="#">Hire Me</a>`;
ul.appendChild(hire);

//Task2
ul.removeChild(ul.lastElementChild);
const search = document.querySelector('header>nav>div>input');
console.log(search);
search.placeholder ="Search My Projects";

//Task3
const para = document.querySelector('.hero-left-section>p');
const role =  document.querySelector('span:nth-child(3)');
role.innerText = "An Employee";
para.lastElementChild.innerText="Ineuron Intelligence Pvt Ltd";

//Task4 
const image = document.querySelector('.hero-right-section>img');
console.log(image);
// image.src ='./avatar2.jpg';
image.setAttribute('src','./batman.jpeg');

//Task5

const buttons = document.querySelector('.hero-right-section-btns');
const rightbtn = document.createElement('button');
rightbtn.innerText = 'Support Me';
buttons.appendChild(rightbtn);


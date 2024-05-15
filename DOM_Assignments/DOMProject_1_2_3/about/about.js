
//Assignment2
//Task1
// let  div3 =  document.querySelector('.accordian:nth-child(3)>p');
// console.log(div3);
// div3.style.display='block';

// let  div4 =  document.querySelector('.accordian:nth-child(4)>p');
// div4.style.display='block';


//Task2

let div5 = document.createElement('div');
console.log(div5);
div5.classList.add('accordian');
let h3 = document.createElement('h3');
h3.innerText = 'Skills';
let p = document.createElement('p');
p.innerText = 'I posses very good command over the Full Stack Development technologies like MERN which can be  seen in my work over the Github.';
// p.style.display='block';
div5.appendChild(h3);
div5.appendChild(p);

document.querySelector('.accordian-wrapper').appendChild(div5);

//main
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
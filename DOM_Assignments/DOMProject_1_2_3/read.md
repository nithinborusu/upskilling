# First Assignment

## Task1
```js
const ul=document.querySelector('header>nav>ul');
console.log(ul);
ul.removeChild(ul.lastElementChild);
const icons = document.querySelector('footer>ul');
icons.remove();
let projects = document.createElement('li');
let hire = document.createElement('li');
projects.innerHTML =`<a href ="#">Projects</a>`;
ul.appendChild(projects);
hire.innerHTML =`<a href ="#">Hire Me</a>`;
ul.appendChild(hire);
 ```

## Task2

```js
ul.removeChild(ul.lastElementChild);
const search = document.querySelector('header>nav>div>input');
console.log(search);
search.placeholder ="Search My Projects";
```

## Task3
```js
const para = document.querySelector('.hero-left-section>p');
const role =  document.querySelector('span:nth-child(3)');
role.innerText = "An Employee";
para.lastElementChild.innerText="Ineuron Intelligence Pvt Ltd";
```

## Task4
```js
const image = document.querySelector('.hero-right-section>img');
console.log(image);
image.setAttribute('src','./batman.jpeg');
```

## Task5

```js
const buttons = document.querySelector('.hero-right-section-btns');
const rightbtn = document.createElement('button');
rightbtn.innerText = 'Support Me';
buttons.appendChild(rightbtn);
```

# Second Assignment

## Task1
```js
const thirdDiv=document.querySelector('.accordian:nth-child(3)>p');
console.log(thirdDiv);
thirdDiv.style.display='block';

const fourthDiv=document.querySelector('.accordian:nth-child(4)>p');
console.log(fourthDiv);
fourthDiv.style.display='block';
```
## Task2
```js
const fifthDiv=document.createElement('div');
fifthDiv.className='accordian'
const h3=document.createElement('h3');
h3.textContent='Skills';

const para=document.createElement('p');
para.innerText='I posses very good command over the Full Stack Development technologies like MERN which can be  seen in my work over the Github.'
para.style.display='block';

fifthDiv.appendChild(h3);
fifthDiv.appendChild(para);

document.querySelector('.accordian-wrapper').appendChild(fifthDiv);
```
# Third Assignment

# Task1
```js

      //Submit Form
      const userName=document.querySelector('.userName');
      const userEmail=document.querySelector('.userEmail');
        const userMessage=document.querySelector('.userMessage');
      //Reset Form
      const enterName=document.querySelector('.enterName');
        const enterMail=document.querySelector('.enterMail');
        const enterMessage=document.querySelector('.enterMessage');

        const reset=document.querySelector('.mainLeftDetails>button')
        const submit=document.querySelector('.mainRight>form>button');
        // Submit Form Logic
        const submitForm=(event) =>{
        //event.preventDefault();
        const name=userName.value;
        const email=userEmail.value;
        const message=userMessage.value;
        console.log(userEmail,userName,userMessage);
        console.log(name+" "+email+" "+message+"vamsi");
        enterName.value=name;
        enterMail.value=email;
        enterMessage.value=message;
      };
        // Reset Form Logic
        const resetForm=(event) => {
        //event.preventDefault();
        userName.value='';
        userEmail.value = '';
        userMessage.value = '';

      };
    submit.addEventListener('click',submitForm);
    reset.addEventListener('click',resetForm);
```

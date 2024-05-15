
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
        event.preventDefault();
        const name=userName.value;
        const email=userEmail.value;
        const message=userMessage.value;
        enterName.value=name;
        enterMail.value=email;
        enterMessage.value=message;
      };


      //Reset Form Logic
      const resetForm=(event) => {
        event.preventDefault();
        userName.value='';
        userEmail.value = '';
        userMessage.value = '';

      };


      submit.addEventListener('click',submitForm);

      reset.addEventListener('click',resetForm);

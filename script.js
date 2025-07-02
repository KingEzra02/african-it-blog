/*
document.addEventListener('DOMContentLoaded', function(){
 
    const form = document.getElementById("myForm");

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value;

        console.log('Form submitted!');
        console.log('Name:', nameValue);
    })
})

*/
function myFunction() {
    document.getElementById("myForm").submit();
  }
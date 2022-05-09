
console.log('hello');

const refs = {
    form: document.querySelector('#search-form'),
}

console.log(refs.form);

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt){
    evt.preventDefault();
   
    const formElements = evt.currentTarget.elements;

    console.log(formElements);
}

console.log('hello');

const refs = {
    form: document.querySelector('#search-form'),
}

console.log(refs.form);

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt){
    evt.prevetDefault();
   
    const formElements = evt.currentTarget.elements;

    console.log(formElements);
}
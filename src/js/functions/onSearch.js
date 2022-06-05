import getRefs from './getRefs';
const refs = getRefs();
//імпортувати notiflix, filmApiService (за аналогією onHomePageLoad)


export default function onSearch(){
    console.log('HEllo frrm onSearch');
}

//Функція onSearch - приймає event,
// перевіряє чи є вміст(повідомлення як ні Notifix) <
//передає запит інпута в API
//скидає вміст з карочками
//скидає облік сторінок
//запускає рендер (імпортувати відповідну функцію)
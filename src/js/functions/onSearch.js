console.log('onSearch');
import getRefs from './getRefs';
const refs = getRefs();


//Функція onSearch - приймає event,
// перевіряє чи є вміст(повідомлення як ні Notifix) <
//передає запит інпута в API
//скидає вміст з карочками
//скидає облік сторінок
//запускає fetchCards
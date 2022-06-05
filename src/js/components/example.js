//Пишіть свій код всередині функції, вона підключена в загальний код
//Якщо потрібно взяти якусь змінну з оточення передайте її

//якщо потрібно всередині виконати іншу функцію - імпортуйте її (уважно перевіряйте шлях до неї)
import getRefs from '../functions/getRefs';
const refs = getRefs();


export default function example(car) {
    console.log('HEllo frrm example');
    console.log("car", car);
    console.log(refs);
}
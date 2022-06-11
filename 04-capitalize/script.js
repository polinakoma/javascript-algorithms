/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const strArr = str.split(' ');
    for(let i = 0; i < strArr.length; i += 1) {
        strArr[i] = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1);
        console.log(strArr[i])
    }
    return strArr.join(' ');
}  


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
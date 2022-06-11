/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    if(n < 2) {
        return 0;
    }
    let a = 0;
    let b = 1;
   // let c = a + b;

    for( let i = 3; i <= n; i += 1) {
       const i = a + b;
       a = b;
       b = i; 
    }
    return b;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(0));

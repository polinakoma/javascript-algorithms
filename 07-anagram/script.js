/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {

    if(str1.toLowerCase() === str2.toLowerCase()) {
        return false;
    } else {
        const word1 = str1.toLowerCase().split('').sort().join('');
        const word2 = str2.toLowerCase().split('').sort().join('');
        return  word1 === word2;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
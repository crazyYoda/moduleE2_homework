// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать
// его и вывести в консоль каждый элемент массива.

let rand_array = [1, 'data', 4.5];
console.log(rand_array.length);
console.log(rand_array.map(function (item, index, array) {
    return item
}))
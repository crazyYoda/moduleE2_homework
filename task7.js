// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let arr  = [3, 1, 0, 2, 14, 7, 3, 'str']

let zero_count = 0
let even_number = 0
let odd_number = 0
let others = 0


arr.forEach(function(item, index, array) {

    if(item !== 0){
        let result = item % 2
        switch (result) {
            case 0:
                even_number += 1;
                break;
            case 1:
                odd_number += 1;
                break;
            default:
                others += 1;
                break;
        }
    } else {
        zero_count += 1
    }
});



console.log(`Чётных чисел - ${even_number }; Нечётных - ${odd_number}; Нулей - ${zero_count}; Прочих значений - ${others}`)
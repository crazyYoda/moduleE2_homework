let X = 15

result = typeof(X)

switch(result){
    case 'number':
        console.log('X — число');
        break;
    case 'string':
        console.log('X — строка');
        break;
    case 'boolean':
        console.log('X — логический тип');
        break;
    default:
        console.log('Тип Х не определён');
}
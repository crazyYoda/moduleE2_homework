let rest = prompt('enter the value')

rest ++
rest -= 1

if((typeof(rest) == "number") && (!Number.isNaN(rest))){
    if(rest % 2 === 0){
        console.log('Even number')
    } else {
        console.log('Not even number')
    }
} else {
    console.log('Oops, You are mistaken')
}

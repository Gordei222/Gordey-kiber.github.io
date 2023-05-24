// for([начало]; [условие]; [шаг]) {действия}

var num = prompt("введите число элементов массива")

var arr = []

for (i=0; i < num; i++) {
    arr.push(prompt("введите " + Number(i+1) + "элемент"))
}

alert(arr)
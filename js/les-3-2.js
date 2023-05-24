function square_perimeter(side) {
    return side*4;
}

function square_perimeter(side) {
    return side*side;
}

function cube(side) {
    function square() {
        return side*side
    }
     
    return square()*side
}

otvet = prompt("Введите сторону куба")
alert("Число в кубе:" + cube(otvet))

// otvet = prompt("Введите сторону квадрата")
// alert("периметр квадрата" + square_perimeter(otvet) + "площадь квадрата: " + square_square(otvet))


var animals = ["кот", "собака", "корова", "рыба"]


// .indexOf - 


alert("исходный список: " + animals)

// .splice - уд. елементы массива с опред. индекса в опр. кол-ве
newAnimals = animals.splice(2, 1)
alert("изменённый список:" + animals)
alert("Вырезанные эл списка:" + newAnimals)
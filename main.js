// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект:
// newObj = {
// 	x: 20,
// 	y: 20,
// 	z: 30,
// 	k: 23,
// 	p: 13
// }


let obj = {
	x: 10, 
	y: 20,
	inner: 
		{ x: 20, 
		z: 30 },
	foo2: 
		{ k: 23,
		  p: 13 } 
		}


function convert (obj) {
	newObj = {
			x: 20,
			y: 20,
			z: 30,
			k: 23,
			p: 13
		}
		return newObj
}


console.log('convert(obj): ', convert(obj));
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
let newObject=convert(obj);


function convert(obj){
	if(typeof obj!=='object'||Array.isArray(obj)) return 'Только объекты';

	let newObject={};
	returnNewObj(newObject,obj)
	return newObject
}

function returnNewObj(newObject,obj){
	for(let el in obj){
		if(typeof obj[el]==='object'){
			returnNewObj(newObject,obj[el])
		}else{
			newObject[el]=obj[el]
		}
	}
}
console.log('newObject', newObject);
// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, который состоит из свойств обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }


let obj={x: 10,y: 20 };
let obj1= {z: 30};

let obj3 ={x: 10};
let obj4={x: 20,y: 30}

function assignObjects(obj1, obj2){
	return Object.assign(obj1,obj2)
 	 
}

console.log('newObject(obj,obj2): ', assignObjects(obj3,obj4));
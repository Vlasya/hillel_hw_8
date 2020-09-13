// Адаптировать функцию assignObjects() - из 2го задания - под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);


let obj={x: 10,y: 20 };
let obj1= {z: 30};

let obj3 ={x: 10};
let obj4={x: 20,y: 30}

function assignObjects(...obj){
	let assignObjects=Object.assign(...obj)
	return assignObjects
}
console.log('newObject(obj,obj2): ', assignObjects(obj3,obj4,obj1));



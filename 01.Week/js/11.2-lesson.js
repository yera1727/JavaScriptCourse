let id = Symbol("id of user");

let user = {
	name: "Вася",
	[id]: 123 // просто "id: 123" не сработает
};
console.log(user[id]);

// var v1 = "123";
// var v2 = true;
// var v3 = 10;
// var v4 = Symbol("foo");

// var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// // Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// // Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
// console.log(obj); // { "0": "1", "1": "2", "2": "3" }
// console.log(obj["0"]);
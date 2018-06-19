//1.Создайте функцию конструктор для компьютеров(Computer) 
/*Св-ва созданных экз. объектов - icon(картинка комп), type(laptop, PC...), model(e4650...), 
price(5000),quantity(3...),isAvailable(true/false),check(function)
*/
//метод  check проверяет значение quantity и если оно 0 - то isAvailable - false;
//Создаём используя эту функцию 3 экз объекта Computer

function Computer (icon, type, model, price, quantity){
	this.icon = icon;
	this.type = type;
	this.model = model;
	this.price = price;
	this.quantity = quantity;
	this.isAvailable = this.isAvailable;
	this.check = function(){
		if(this.quantity == 0){
			this.isAvailable = false;
		}else{
			this.isAvailable = true;
		}
		return this.isAvailable;
	};
}
var Computer1 = new Computer('<img src="img/comp.jpg" alt="123" width="100px" height="80px"/>', 'PC', 'qee2we', '120', 1);
var Computer2 = new Computer('<img src="img/comp.jpg" alt="123" width="100px" height="80px"/>', 'PC', 'qee2we', '120', 0);
var Computer3 = new Computer('<img src="img/comp.jpg" alt="123" width="100px" height="80px"/>', 'PC', 'qee2we', '120', 1);
//2.создаём функцию(отдельно от конструктора конечно) register(экз.объекта как параметр), 
//которая новый екземпляр объекта будет записывать в массив Goods 
/*
на выходе - Goods = [
					{icon: '', type: '', model: '', price: 12312, quantity: 3, isAvailable: true, check: function(){}},
					{icon: '', type: '', model: '', price: 4312, quantity: 0, isAvailable: false, check: function(){}},
					]*/
var Goods =[];
function register(arr){
	Goods.push(arr);
}
register(Computer1);
register(Computer2);
register(Computer3);


//3. Создаём функцию chekAvailability, которая проходится по Goods и вызывает check на каждом check
// вызываем ее перед запуском render
function chekAvailability() {
	Goods.forEach(function(item, i, arr) {
			if(i >= 0) {
				for(var keyObj in item) {
					if (keyObj == 'check') {
						item.check();
					}
				}
			}
	})
}
chekAvailability();
console.log(Computer1);
console.log(Computer2);
console.log(Computer3);
/*4.Создаём функцию render для вывода в док массива goods - вывод происходив в таблицу(шапка таблицы - имена свойств)
в ячейках только значения свойств, метод не выводим, 
свойство isAvailable - выводим зеленым "В наличии" если isAvailable - true
					   выводим зеленым "Нет в наличии" если isAvailable - false*/ 
var ABC = Object.keys(Computer1);
console.log(ABC);
document.write('<table align="center" width="600px" height="100px" border="1" cellspacing="0"><tbody><tr>');
for(i = 0; i < ABC.lenght; i++){

}
// document.write('<table align="center" width="600px" height="100px" border="1" cellspacing="0"><tbody><tr>'  + '<td>' + ABC +'</td>');
function render (Comp){
	document.write('<table align="center" width="600px" height="100px" border="1" cellspacing="0"><tbody><tr>');
			for(var key in Comp){
				if(key == 'check'){
					continue;
				}else if(key == 'icon'){

					document.write('<td width="100px">' + Comp[key] + '</td>');
				}else{
					document.write('<td width="100px">' + Comp[key] + '</td>');
				}
			}


	document.write('</tr></tbody></table>');
}

render(Computer1);
render(Computer2);
render(Computer3);








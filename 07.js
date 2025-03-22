
/*Брой пилешки менюта – цяло число в интервала [0 … 99]

· Брой менюта с риба – цяло число в интервала [0 … 99]

· Брой вегетариански менюта – цяло число в интервала [0 … 99]*/



function delivery (input) {

let chickenMenu=Number(input[0]);

let fishMenu=Number(input[1]);

let veganMenu=Number(input[2]);

let totalMenu= chickenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15;

let totalDesert= totalMenu * 0.20 ;
let total =totalMenu + totalDesert +2.50;
console.log(total.toFixed(2));
}

delivery(["2","4","3"]);
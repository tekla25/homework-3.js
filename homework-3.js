//1.შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
//2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;



function nummer(...numbers) {
    let n=0;
    for (let i of numbers){
        if (i>0)
        n+=i;

    }
    return n;
    
}




let result=  nummer(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
console.log(result);




//2.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
//10, 50, 6, 7, 8, 11, 6, 3, 9


function fasung(...numbers) {
    let n=0;

    for(let i of numbers){
        n+=i;

    }

    return n; 
}

let result= fasung(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result);



//3. let user = {
//firstname: 'giorgi',
// lastname: 'saakadze',
//age: 32,
// isloggedin: true
//}
	
//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის //გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
      
  

function objName(obj) {
    if(obj.isloggedin){

        return obj.firstname + " " +  obj.lastname;
    }
    
        return false;
    
}
let resultFunktion = objName(user);
console.log(resultFunktion);


//4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


function max(numbers) {
    let n=0;
    for(let i of numbers){
        if(i>n){

            n=i;
        }
    }
    return n;
}
console.log(max([7,35,25,70,69]));



//5.მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
//გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;


let array = [1,2,4,10,34,5,7,87]

for(let i of array){
    if(i>0 && i<10){
        console.log(i);
    }
}

// 6.მოცემულია მასივი
//Let numbers =[1,2,3,4,5,6,7,8,9,10]
//ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი


let numbers =[1,2,3,4,5,6,7,8,9,10]


for(let i of numbers){

    if(i == 5){
        console.log(i);
        break;
    }
    
}
"use strict";
// Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ loop` ըստ հերթականության  ստեղծում եք FOR-ով և WHILE-ով 
//.. 1..
let thisYear = 2022;
for(i = 10; i < 15; i++){
    console.log(`Եթե ես ${i} տարեկան եմ, ապա ծնվել եմ ${thisYear - i} թվականին`); 
     for(j = 1; j <= 12; j++){
        console.log(`Եթե հիմա ${j} - րդ ամիսն է, ապա ես ${i} տարեկան ${j} ամսական եմ`);
     }
}
// կամ 
const myAge = 33;
for( i = 1; i < 5; i++){
    console.log(`${myAge}  + ${i}`);
    for( j = 1; j < 12; j++){
        console.log(` ${j} - րդ ամիս`);
    }
    
}
//․․. 2 -րդը for - ով ...
for(i = 5; i >= 0; i-- ){
    console.log(i);
    for(j = 5; j< 10 ; j++){
        console.log(`${i} + ${j}`);
        for( m = 3; m <= 7; m++){
            console.log(m);
        }
    }
}

// ... 2-րդը while - ով ․․․
let num = 5;
let b = 12;
let c = 9;
while(num<=10){
    console.log(num);
    num++;
    while(b < 15){
        console.log(b + num)
        b++;
    }
    while( c >= 5){
        console.log(c + b + num);
        c--;
    }
}

//...3..
const price = 10000;
for( i = 12; i < 15; i++){
    console.log(`Այսօր վաճառվել է ${i} զույգ կոշիկ։`);
    for( j = 1; j < 2; j++){
        console.log(`Մեր եկամուտը կազմում է ${i} * ${price} դրամ։`);
    } 
     for(k = 1; k <= 5; k++){
        console.log(`Յուրաքանչյուր վաճառված հաջորդ զույգ կոշիկից աշխատողը ստանում է ${k}% բոնուս։`);
     }
     for( m = 10; m > 5; m--){
        console.log(`Յուրաքանչյուր ${m} զույգ կոշիկի համար մենք պետք է վճարենք ${m}% հարկ։`);
     }
}

//ստեղծում եք function, որի մեջ switch-ով պետք ա ստեղծեք կալկուլյատոր + - / * % ի համար 
function myCalc(a, b, c){
    switch(c){
        case "+": console.log(a + b); break;
        case "-": console.log(a - b); break;
        case "/": console.log(a / b); break;
        case "*": console.log(a * b); break;
        case "%": console.log(a % b); break;
        
        default:console.log("no"); break;
    }
}
 myCalc(99, 105, "+");
 myCalc(350, 200, "-");
 myCalc(1500, 500, "/");
 myCalc(200, 36, "*");
 myCalc(800, 57, "%");

 //տոնածառը ստանում եք 2 ցիկլով 
const star = "*";
const place = " ";
console.log(`${place}${place}${place}${place}${place}${place}${place}${star}${star}`);
console.log(`${place}${place}${place}${place}${place}${place}${star}${star}${star}${star}`);
console.log(`${place}${place}${place}${place}${star}${star}${star}${star}${star}${star}${star}${star}`);
console.log(`${place}${place}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}`);
console.log(`${place}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}${star}`);










 


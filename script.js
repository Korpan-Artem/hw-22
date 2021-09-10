// "use strict";

// function playGame () {
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             let randNumber = Math.round(Math.random() * 6);
//             if (randNumber >= 1 && randNumber <=5){
//                 console.log('Start the game..');
//                 resolve(randNumber);
//             }else if (randNumber === 6) {
//                 console.log(`Error.. ${randNumber}`);
//                 reject(randNumber);
//             }
//         },2000)
//     })
// }

// playGame()
//     .then((value) => {
//         if (value === 1){
//             console.log('Stay Here');
//         }else if(value >= 2) {
//             console.log(`Go ${value} steps`);
//         }
//     })
//     .catch(() => {
//         console.log('Exit');
//     });


// class ProductError extends Error {
//     constructor(message) {
//       super(message); // (1)
//       this.name = "Product Error"; // (2)
//     }
//   }

// function goToShop() {
//     let arrayProduct = ['apple','milk','tomato','potato','orange','bread'];
//     return new Promise ((resolve,reject)=>{
//         let newArrayProduct = arrayProduct.slice(Math.round(Math.random()*4));
//         if (newArrayProduct.length >= 4) {
//             makeDinner().then((value) => {
//                 console.log(value);
//             });
//             resolve(newArrayProduct);
//         }else if(newArrayProduct.length < 4){
//             reject(new ProductError('Too low product..'));
//         }
//     })
// }

// function makeDinner() {
//     return new Promise ((resolve,reject)=>{
//         setTimeout (() => {
//             resolve('Bon Appetit');
//         },3000)
//     })
// }

// goToShop()
//     .then((value)=>{
//         console.log(`Купленые товары: ${value}`);
//     })
//     .catch((value) =>{
//         console.log(value);
//     });






    
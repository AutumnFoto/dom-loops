"use strict";


// x = 16;
// console.log(x)
// gives back x is not defined

// const ageCheck = (age) => {
//     if (age < 21) {
//         console.log("no drinks for you!")
//     } else {
//         console.log("PARTYYY")
//     }
// }

// ageCheck(21)
// -------------------------------------
// const lengthOutput= (strang) => {
//     return strang.length
// }
// console.log(lengthOutput([1,2,3,4,5,6,7]))

// const quoteFinder =(testString) => {
//     return "winter is coming".indexOf(testString)
// }
// console.log(quoteFinder('is'))

// ----------------------------------------
// OBJECTS
// have to have key and value
// const employee = { 

//     firstName: 'Autumn',
//     lastName: 'Fotopoulos',
//     role: 'student',
//     accountNumber : '1-8735960',
//     isManager : false,
//     titles: ['mom', 'badass'],
//     accolade: {
//         title: 'student of the year',
//         dateEarned: '1/20/2020',
//         expires: '12/21/2020',
//         isCool : true
//     }

// }

// // console.log(employee.firstName)
// // const keyToCheck= 'accolade';

// // console.log(employee[keyToCheck])
// // console.log(employee.accolade.isCool)
// // console.log(employee[keyToCheck].isCool)


// // make function that says if employee name starts with A

// // 

const colors = ['red', 'orange','blue','yellow','green']

const colorLoop =() =>{
    let domString = '';
    for (let i=0; i< colors.length; i++) {
        domString += '<h1> ${colors[i]}</h1>'
    }
    console.log(domString)
}
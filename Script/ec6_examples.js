


/*import { getFullName, settings } from "./utilities";
import Math from "./math";

Math.sum(2,3);*/


const getFullName = (firstName ="Alexander",lastName ="Petrov") => {
   return '${firstName} ${lastName}';
   /*firstName + " " + lastName;*/
}
const fullName = getFullName("Alexander", "Petrov");
console.log("Full name: ",fullName);


const getName = (name) =>'Your name is: ${name}';
console.log(getName("Peter"));

//Spread Operator for Objects
const firstName = "Peter";

const personalData = {
    firstName,
    lastName: 'Petrov',

}
const addressData = {
    city: "Plovdiv",
    country: "Bulgaria"
}

//const allData = Object.assign({},personalData, addressData);

const allData = {...personalData,...addressData};

// Spread Operator for Arrays
const testData = [1,2,3,10,20,30,40];
const anotherTestData = [4,5,6];

console.log([...testData, ...anotherTestData]);

//Array map,filter,reduce

const objectValues = testData.map(element => element +7);
const users = [
    {
        firstName: "Peter",
        city: "Plovdiv",

    },
    {
        firstName: "Ivan",
        city: "Sofia",

    },
    {
        firstName: "Dragan",
        city: "Plovdiv",

    },
    {
        firstName: "Ivan",
        city: "Pleven",

    },
    {
        firstName: "Peter",
        city: "Plovdiv",

    },
]

const usersFromPlovdiv = users.filter(element => element.city === "Plovdiv");

const PlovdivNames =usersFromPlovdiv.map(user => user.firstName);

const 

//['Peter','Dragan']
//const testData = [1,2,3,10,20,30,40];
const sum = testData.reduce((acc,curr)=> {
    return acc + curr;
}, 0);


const objectWithReduce = testData.reduce((acc,curr)=> {
    return {...acc,...{[curr]: 'test'}};
}, {});
/*
const uniqeCities = [];
users.forEach(user =>{
    if(!uniqeCities.includes(user.city)){
        uniqeCities.push(user.city);
    }
})*/

const uniqeCities = users.reduce((acc,curr)=> {
    return !acc.includes(curr.city) ? [...acc,curr.city] : acc;
    /*if(!acc.includes(curr.city)){
        acc.push(curr.city);
    }
    return acc;*/
},[]);






/*const usersNotFromPlovdiv = users.filter(element => element !== "Plovdiv");

const bigNumbers = testData.filter(element => element >12);*/





//Object.keys, values,entries

const dataObject = {
    name: 'Peter',
    city: 'Plovdiv',
    contact:{
        phone: '123123123',
        email: "Peter@abv.bg",
    }
}

async function getData(){
   //Do a request
   //wait for response
   return 'response';
}

async function getAnotherData(){
    //Do a request
    //wait for response
    return 'another_response';
}
const data = await getData();
const data2 = await getAnotherData();


//...
//....

//Callback

function doSomething(callback) {
    //wait for something async
    console.log('loading something');
    //then do something else
  
    if(callback){
        callback();
    }
}

function afterSomethingIsLoaded(){
    console.log('Loaded and do something');
}
doSomething(afterSomethingIsLoaded);
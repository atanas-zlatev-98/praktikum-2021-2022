var arrayExample=['Alex','Ivan','Andrey'];

//Loop throught the elements of an Array
arrayExample.forEach(function(element){
    console.log(element)
})

var jsonExample={
    name: "Alex",
    city: "Plovdiv",
    country: "Bulgaria",
    getName: function(){
        console.log(jsonExample.name);
    },
    interests: ['Sport','Books','Cooking'],
    information:{
        status: "Married",
        wife:"Yoana",
        kid:{
            fname:"Alex",
            lname: "Petrov",
        }
    }
}
//Loop through keys in Object
for(key in jsonExample){
    console.log(key, jsonExample[key]);
}

function myFunction(firstName,lastName){
  
    var fullName = firstName +" "+ lastName;
    return fullName;

}



var getFullNameInterval = setInterval(function(){
    var fullName = myFunction('Alexander','Petrov');
    console.log('Full Name: ',fullName);

},4000);
//clearTimeout(getFullNameTimeout);


var hasName = true;
    hasName = false;
    
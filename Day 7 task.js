//1.Solving problems using array functions on rest countries data.
//a.Get all the countries from the Asia continent /region using the Filter function

//Step 1: Create a XHR objects
var request = new XMLHttpRequest();
//Step 2: Specify the API
request.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
request.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//----------------------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function

//Step 1: Create a XHR objects
var request1 = new XMLHttpRequest();
//Step 2: Specify the API
request1.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
request1.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request1.onload=function()
{
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);
}

//-----------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function

//Step 1: Create a XHR objects
var requestt = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
requestt.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
requestt.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}

//---------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function

//Step 1: Create a XHR objects
var reques = new XMLHttpRequest();
//Step 2: Specify the API
reques.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
reques.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}

//-----------------------------------------------------------------------------------------------

//e.Print the country which uses US Dollars as currency

//Step 1: Create a XHR objects
var req = new XMLHttpRequest();
//Step 2: Specify the API
req.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
req.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }
/*Intermediate Algorithm Scripting: Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
Passed
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].Passed*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for (let i = 0; i < arr.length; i++) {
    //caculation of r
    let r = arr[i].avgAlt + earthRadius;
    //Equation for orbital period
    let T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM));
    console.log(T);
    //deleting altitude proper
    delete arr[i].avgAlt;
    //adding orbital period property and value
    arr[i].orbitalPeriod = T;
  }
  return arr;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



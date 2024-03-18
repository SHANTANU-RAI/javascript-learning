const accId = 1443;
let accEmail = "abc@mail";
var accpass = "abc123";
accCity = "jaipur";
let accState; // when not initialised , by default value is undefined

// accId = 342 // not allowed as declared const

accEmail = "ghhjn@mail";
accpass = "jnjo";
accCity = "lko";

console.log(accId);

/*
Prefer not to use var
because of issue in block scope and functional scope
var has global scope while let has block scope
*/

console.table([accId, accEmail, accpass, accCity, accState]);

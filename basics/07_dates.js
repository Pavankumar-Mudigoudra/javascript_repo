// Date start from January 1, 1970

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // date
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

let myCreatedDate = new Date(2024,1,24); // months start from (0 - January)
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("13-12-2000") // mm-dd-yyyy
// console.log(myCreatedDate1.toLocaleDateString());

let myCreatedDate2 = Date.now()
// console.log(myCreatedDate2); // value in mili seconds

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // +1 bcz month start with 0 
// console.log(newDate.getDay() ); //  0 for sunday

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))














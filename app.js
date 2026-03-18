// const express = require("express");
// const app = express();

// app.get('/' , (req , res)=>{
//    res.send("Salom sizning birinchi Websitingiz yurib turibdi backend")
// })

// app.get('/about' , (req , res)=>{
//    res.send("Salom bu About pages")
// })


// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//    console.log(`Server http://localhost:${port} da ishga tushdi 🚀`);
// });




const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send({massage : "Hello world"});
});


app.listen(3000);
console.log(`Sining wensiteingiz  3000 port ochmoqda ....`)












"use strict"; // use strict - oddiyroq qilib aytganda xatoliklarda qochish xisoblanadi

// let massage;
// massage = "Salom Muhammad Umar"
// console.log(massage)


// let error;
// error = "Siz hozir hato qilyapsiz"
// alert(error)



// let user = age = 17 , name = "Muhammad umar" , firstName = "Turgunov";
// console.log(user , name)



// let user = "Muhammad Umar";
// let age = 17;
// let massage = "helllo world";
// console.log(user , age , massage)



// let $ = "Salom Muhammad Umar "
// let _ = "men ishlayapman"
// console.log($ , _)



// const myBirthday = "1.12.2008"
// console.log(myBirthday)



// const Cars_Green = "#0f0";
// const Cars_White = "#ffff";
// const Cars_Yellow = "#0f00";
// const Cars_Blue = "#00f";

// let color =  Cars_Green ;
// color = "salom"
// console.log(color)



// let admin = "admin@gmail.com";
// let password = 12345678;
// let names = "Muhammad Umar";
// alert(admin)

// console.log("Sizning loginingiz :" , admin , "Sizning ismingiz :", names , "Sizning passwordingiz :"  ,password)


// let name;
// name = "John"
// confirm(name)


// var myName = "Muhammad Umar"
// var myName = "Muhammad Bobur"
// console.log(myName) 






// var x = 20;
// var y = 2;
// var jami = x + y
// var over = jami * y
// var dr = y ** 2
// console.log("Darjaga ko'tarish" , dr)

// console.log(x)
// console.log(y)
// console.log(jami)
// console.log("Jami hisob" , over)




// var texts = "The character is called an apostrophe."
// console.log(texts)



// var x = 30,
//     y = 20,
//     z = 10;
// console.log(y)




// var x = 20
// console.log(typeof x !== "undefined");
// console.log(typeof y !== "undefined"); // shunki buday ozgaruvchi qiymat berilmagan 




// var top = "Salom mening ismim Muhammad Umar";
// console.log(top)
// var top = "yoq seni isming"
// console.log(top)



// function Get_Name(name , familya){
//     return(
//         console.log("Sizning isningiz : " , name , "Sizning famiyaniz :" , familya)
//     )
// }


// module.exports.endPoind = Get_Name;




// function Get_Fullinfo(name , familya , age , interesting , hobbiy){
//     return (
//          console.log("Sizning isningiz : " , name ,
//           "Sizning faminlaningiz :" , familya , `Sizning yoshingiz : ${age}` , `Sizning qiziqishingiz ${interesting}`,
//           `Sizning hobbiyingiz : ${hobbiy}`
//          )
//     )
// }

// module.exports = Get_Fullinfo;





// const os = require("os")

// const FreeMem = os.freemem()
// const UseInfo = os.userInfo()
// console.log(`Bo'sh xotira miqdori ${FreeMem}`)
// console.log(`Foydalanuvchi haqida malumot ${UseInfo.username}`)



const fs = require("fs")

// const files = fs.readdirSync("./");
// console.log(files)


// fs.readdir('./' , function(err , files){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }
// })


// const Evets = require("events");
// const emitter = new Evets()

// emitter.on("Loging" , (arg)=>{
//     console.log(arg)
// })

// emitter.emit("Loging" , {id : 1 , password : 200202 , email : "admin@gmail.com" , name : "Muhammad Umar" , img : "https://photo.uz/" , url : "https:shahk-dev.netlify.app "})


// const Logger = require("./Info");
// const logger = new Logger();

// logger.on("login" , (arg)=>{
//     console.log("Men ishlashni boshladim" , arg)
// })

// logger.log("Hello world")




// const https = require("http");
// const server = https.createServer();

// server.on("connection" , (socket)=>{
//     console.log("Yangi bog'lanish bor ...");
// })

// server.listen(8000);
// console.log(`${server.address().port} Port ishlash boshladi `)





// Bizning birinchi serverimiz

const http = require("http");

const server = http.createServer((req, res) => {
    
     const users = [
        {
            id : 1,
            age : 18 ,
            name : "Muhammad Umar",
            login : "codebyumar@gmail.com",
            password : 12345678,
            Job : "Programmer"
        },
        {
            id : 2,
            age : 18 ,
            name : "Muhammad Umar",
            login : "codebyumar@gmail.com",
            password : 12345678,
            Job : "Programmer"
        },
        {
            id : 3,
            age : 18 ,
            name : "Muhammad Umar",
            login : "codebyumar@gmail.com",
            password : 12345678,
            Job : "Programmer"
        },
        {
            id : 4,
            age : 18 ,
            name : "Muhammad Umar",
            login : "codebyumar@gmail.com",
            password : 12345678,
            Job : "Programmer"
        },
     ]
     

    if (req.url === "/") {
        res.write("Bizning home pagesimiz tayyor ...")
        res.end()
    }
    if (req.url == "/api") {
        res.write(JSON.stringify({
            "id": 1,
            "name": "Muhammad umar",
            "Familya": "Turgunboyov",
            "age": 17
        }))
        res.end()
    }

    if(req.url === "/login"){
        res.write(JSON.stringify(users));
        res.end()
    }else{
        console.log("xatolik bu pages bor..")
    }

});

server.listen(8000);
console.log(`Sizni portingiz ${server.address().port} ishlashni boshladim ...`);















// const https = require("http");

// const server = https.createServer((req , res)=>{

//      const users = [
//         {
//              id : 1,
//              age : 17,
//              name : "Muhamad Umar",
//              login : "admin@gmail.com",
//              password : 1232343,
//              phone_Number : 937981208
//         },
//         {
//              id : 2,
//              age : 17,
//              name : "Muhamad Yusuf",
//              login : "yusuf@gmail.com",
//              password : 1232343,
//              phone_Number : 937981208
//         },
//         {
//              id : 3,
//              age : 17,
//              name : "Siddiq",
//              login : "siddiq@gmail.com",
//              password : 1232343,
//              phone_Number : 937981208
//         },
//         {
//              id : 4,
//              age : 17,
//              name : "Shukurullo",
//              login : "shukurullo@gmail.com",
//              password : 1232343,
//              phone_Number : 937981208
//         },
//      ]

//      if(req.url === "/"){
//         res.write("Assalomu Allaykum bizni birinchi web serverimiz ishga tushdi ..");
//         res.end();
//      }
//      if(req.url == "/login"){
//         res.write(JSON.stringify(users));
//         res.end();
//      }
// })

// server.listen(8000);
// console.log(`Bizni website porti : ${server.address().port} shu portda ishlayapti....`)





const https = require("http")
// const server = https.createServer((req , res)=>{

//     // const users = [
//     //     {
        
//     //     }
//     // ]

//      if(req.url === "/"){
//         res.write("Bizning birinchi serverimiz ishga tushdi ...")
//      }
//      res.end()
// });

// server.listen(8000);
// console.log(`Sizning serveringiz ${server.address().port} ishlayapti ...`)



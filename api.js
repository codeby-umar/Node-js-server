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
const express = require("express");
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
   res.send("Salom bizning birinchi dasrturimisz ishga tushdi ?")
});


const book = [
   {
      'id': 1,
      'year': 2025,
      'mouth': 14 ,
      'name': 'Aleksandr Dyuma: Graf Monte-Kristo (Asaxiy Books)',
      'decription': 'Aleksandr Dyumaning eng mashhur asari - "Graf Monte-Kristo" sizni sabr, xiyonat, sadoqat, qasos va umid bilan to‘la hayajonli sarguzashtga chorlaydi. Endi siz bu betakror asarni ikki jildlik mukammal to‘plamda o‘qishingiz mumkin!',
      'status': 5,
      'narx': 1390000,
      'img': 'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/8fbdbf5573b18fae93736180f8d0197a20250515095349395937K48xzKshB.jpg.webp'
   },
   {
      'id': 2,
      'year': 2026,
      'mouth': 15 ,
      'name': '"Asaxiy Books yil bestsellerlari 2025" to‘plami - uygacha',
      'decription': 'Aleksandr Dyumaning eng mashhur asari - "Graf Monte-Kristo" sizni sabr, xiyonat, sadoqat, qasos va umid bilan to‘la hayajonli sarguzashtga chorlaydi. Endi siz bu betakror asarni ikki jildlik mukammal to‘plamda o‘qishingiz mumkin!',
      'status': 3,
      'narx': 1390000,
      'img': 'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/8fbdbf5573b18fae93736180f8d0197a20250515095349395937K48xzKshB.jpg.webp'
   },
   {
      'id': 3,
      'year': 2027,
      'mouth': 16 ,
      'name': 'Kel Nyuport: Diqqat: Chalg‘ituvchi dunyoda',
      'decription': 'Aleksandr Dyumaning eng mashhur asari - "Graf Monte-Kristo" sizni sabr, xiyonat, sadoqat, qasos va umid bilan to‘la hayajonli sarguzashtga chorlaydi. Endi siz bu betakror asarni ikki jildlik mukammal to‘plamda o‘qishingiz mumkin!',
      'status': 7,
      'narx': 1390000,
      'img': 'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/8fbdbf5573b18fae93736180f8d0197a20250515095349395937K48xzKshB.jpg.webp'
   },
   {
      'id': 4,
      'year': 2028,
      'mouth': 18 ,
      'name': 'Malkolm Gladuell: Zukkolar va landavurlar',
      'decription': 'Aleksandr Dyumaning eng mashhur asari - "Graf Monte-Kristo" sizni sabr, xiyonat, sadoqat, qasos va umid bilan to‘la hayajonli sarguzashtga chorlaydi. Endi siz bu betakror asarni ikki jildlik mukammal to‘plamda o‘qishingiz mumkin!',
      'status': 1,
      'narx': 1390000,
      'img': 'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/8fbdbf5573b18fae93736180f8d0197a20250515095349395937K48xzKshB.jpg.webp'
   }
]

app.get('/book', (req, res) => {
   res.json(book);
});

app.get('/book/status/:status', (req, res) => {
   const status = parseInt(req.params.status);

   const result = book.filter(b => b.status === status);

   if (result.length === 0) {
      return res.status(404).json({ message: 'Bunday status topilmadi' });
   }

   res.json(result);
});


app.get('/book/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const get_BookId = book.find(b => b.id == id)
   if (!get_BookId) {
      return res.status(404).json({ massage: 'Sizning yozga id maxshulotingiz topilmadi ??' })
   }
   res.json(get_BookId)
});

app.get('/login', (req, res) => {
   const auth = [
      {
         'login': 'admin@hmail.com',
         'password': 1232324,
      },
      {
         'login': 'mansur@hmail.com',
         'password': 1232324,
      },
      {
         'login': 'tesha@hmail.com',
         'password': 1232324,
      },
      {
         'login': 'bolta@hmail.com',
         'password': 1232324,
      },
      {
         'login': 'qasob@hmail.com',
         'password': 1232324,
      }
   ]
   res.write(JSON.stringify(auth));
   res.end();
});


// app.post('book/' , (req , res)=>{
//       const get_Books = {
//           id : book.length + 1,
//           name : book.body.name,
//           year : book.body.year,
//           mouth : book.body.mouth,
//           description : book.body.decription,
//           status : book.body.status,
//           narx : book.body.narx,
//           img : book.body.img
//       }

//        book.push(get_Books);
//        res.status(201).send('Xatolik mavjud ...')
// });


const port = app.listen(8000);
console.log(`Bizning ${port.address().port} portda ochib bermoqda ......`)
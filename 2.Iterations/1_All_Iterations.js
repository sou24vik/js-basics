// ......... Iterations .........


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
   if (index == 5) {
       console.log(`Detected 5`);
       continue
   }
  console.log(`Value of i is ${index}`);
   
}


// for of

// ["", "", ""]
// [{}, {}, {}]

const myarr = [1,2,3,4,5]

for (const nums of myarr) {
   console.log(nums);
}

const greeting = "All the Best"

for (const greet of greeting) {
   console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
   console.log(key, ":-", value);
}

// const myObj = {
//    name : "Shreya",
//    age : "23"
// }

// for (const [key, value] of myObj) {
//   // console.log(key, ":-", value);     // not iterable
// }



// for in

const myObj = {
   Name : "Shreya",
   Age : "22",
   Roll : 5,
   Blood_Group : 'O+'
}

for (const key in myObj) {
   console.log(key, ":-", `${myObj[key]}`);
   
   }

   // Map is not iterable in "for in" loop


   // for each

   const arr = ["Atanu", "Sudip", "Alo", "Manas", "Suvodip"]

  const value = arr.forEach((fr) => {
      console.log(fr);
      
   })


   // function print(items){
   //    console.log(items);
   // }

   // arr.forEach(print)

   const details = [
      {
         Name : "Atanu",
         Since : 2013

      },
      {
         Name : "Sudip",
         Since : 2012
      },
      {
         Name : "Alo",
         Since : 2013
      },
      {
         Name : "Manas",
         Since : 2014
      },
      {
         Name : "Suvodip",
         Since : 2006
      }
   ]

   details.forEach( (fr) => {
      console.log(fr);
   })

//    const arr2 = ["Atanu", "Sudip", "Alo", "Manas", "Suvodip"]

//   const value2 = arr.forEach((fr) => {
//       //console.log(fr);
//       return fr
//    })                                   // for each does not return any values. it gives undefined

//    console.log(value2);


   const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   const newNums = myNums.filter( (nums) => {
      return nums <= 5                // filter can return values.

   })

   console.log(newNums);

   const newNums2 = []

   myNums.forEach( (items) => {
      if(items > 5) {
         newNums2.push(items)
      }
   })
   console.log(newNums2);


   const books = [
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
      { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
      { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
      { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
      { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
      { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
      { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
      { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];
    
    let userBooks = (books.filter( (bk) => (bk.genre === "History")));

    userBooks = (books.filter( (bk) => {
   return bk.publish >= 1995 && bk.genre === "History"
   }));

   console.log(userBooks);


   const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   // const newNums3 = myNums2.map( (num)=> {return num +10})

   // console.log(newNums3);

   const newNums3 = myNums2
                    .map((num) => num*10 )
                    .map((num) => num +1 )
                    .filter( (num) => num >= 40)

console.log(newNums3);

const myNums3 = [1,2,3]

let initialValue = 0;

 const myTotal = myNums3.reduce( function(accumulator, currentValue) {
   console.log(`${accumulator}, ${currentValue}`);
   return accumulator + currentValue
 }, initialValue)

 console.log(myTotal);


 const shoppingCart = [
   {
       itemName: "js course",
       price: 2999
   },
   {
       itemName: "py course",
       price: 999
   },
   {
       itemName: "mobile dev course",
       price: 5999
   },
   {
       itemName: "data science course",
       price: 12999
   },
]

const totalPrice = shoppingCart.reduce( (acc, cur) => acc + cur.price, 0)

console.log(totalPrice);

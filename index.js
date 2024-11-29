var book = {
    "title":"vamphire dairies",
    "author":"l.J.smith",
    "yearpublished": 1991,
}
console.log(book.author);//reading author property from book
book.yearpublished=2022;//updating yearpublished to 2022
console.log(book.yearpublished);//reading yearpublished after modifying
book[`genre`]="fiction";//creating property genre in book
console.log(book);//reading propeties of book after upadating genre
delete book.title;//deleting title from book
console.log(book);//reading properties from book after deleting
console.log("----------------------------------")

//task-2
var emp = {
    "name":"Gouthami",
    "age":23,
    "position": "devloper",
    "salary":40000
}
console.log(emp);
console.log(emp[`position`])//reading position property from emp
book.salary=50000;//updating salary to 50000
console.log(book.salary);//reading salary after modifying
emp.department="HR";//creating department property with value HR to emp
console.log(emp);
delete emp.age;//deleting age property from emp
console.log(emp);//reading properties from emp after deleting age
console.log("-------------------------------------");
// task-3
var product = {
    "id":2807,
    "name":"t-shirt",
    "price":500,
    "category":"causal"
}
console.log(product);
console.log(product.price);//reading price property from product
product[`category`]="electronics";//updating category to electronics
console.log(product);
product[`instock`]=true;//craeting property instoctk with value true
console.log(product);
delete product.id;//deleting id proprety from profuct
console.log(product)
console.log("------------------------------");
// task-4
var car ={
    "make":"honda",
    "model":"venue",
    "year":2002,
    "color":"blue"
}
console.log(car);
console.log(car.make)//accessing make property
car[`color`]="black";//updating car color to black
console.log(car.color);//printing/reading color of car
car[`enginetype`]="V6";//creating new property enginetype=V6
console.log(car);
delete car.year;//deleting year property from car(object)
console.log(car)//printing car(objrct) properties
console.log("-----------------------------------------");

//task-5
var student = {
    "name":"Gouthami",
    "age":"16",
    "grade":9.2,
    "school":"sri chandra techno school"
}
console.log(student);
console.log(student.school)//accessing school property and printing it
student[`grade`]=9.5;//updating grade to 9.5
console.log(student.grade);//reading grading after modifying
student.hobbies=['reading','sports']//creating hobbies property to student with values reading,sports
console.log(student);
delete student.age;//deleting age property fron student
console.log(student);
console.log("-----------------------------------")

//task-6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user);
  console.log(user.profile.address[`city`]);//accessing city property from adress from profile from user.
  user.preferences.theme="light";//updating theme in preference to light
  console.log(user.preferences.theme);//reading modifies theme.
  user.profile.phone="555-9876";//creating phone property to profile object.
  console.log(user.profile);
  delete user.profile.address.zip;//deleting zip property from adress
  console.log(user.profile.address);//reading address property.
  console.table(user);//reading user object
  console.log("------------------------------------------");
  
//task-7
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
  console.log(company);
  console.log(company.employees[1].contact.email)//reading email of the second employee(bob)
  company.employees[0].contact[`phone`]='555-1111'//updating phone of alice to '555-1111'
  console.log(company.employees[0].contact.phone)//reading phone of alice after modification.
  company.employees[0][`department`]="engineering";//creating department property with value enginnering to the first employee(Alice)
  console.log(company.employees[0]);//reading first employee(alice) properties.
  delete company.location;//deleting loction property from company
  console.log(company)//reading company properties 
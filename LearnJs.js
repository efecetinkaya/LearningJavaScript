/*
function Selamla() {
    let isim = document.getElementById("input").value;
    let yazdir = document.getElementById("label");
    yazdir.innerText = "Hoşgeldin " + isim;
    document.getElementById("label2").style.visibility = "visible";
    document.getElementById("input2").style.visibility = "visible";
    document.getElementById("button2").style.visibility = "visible";
}
function Giris() {
    let şifrekontrol = document.getElementById("input2").value;
    if (şifrekontrol == "111") {
        let dogru = document.getElementById("label3");
        dogru.innerText = "Şifre Doğru, Giriş Başarılı"
    } else {
        let yanlis = document.getElementById("label3");
        yanlis.innerText = "Şifre Yanlış, Giriş Başarısız"
    }
} */
/*
(function () {
    var text;
    var input = prompt("Yaşınızı Giriniz");
    if (input < 18) {
        text = "Siz çocuksunuz"
    } else if (input >= 18 && input <= 65) {
        text = "Siz yetişkinsiniz"
    } else if (input > 65) {
        text = "Siz Yaşlısınız"
    }
    let yazdir = document.getElementById("label");
    yazdir.innerText = text
}()) */
/*
let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    return 2021 - this.yearOfBirth
}


let efe = new Person("efe", 2003, "student");
console.log(efe)
console.log(efe.calculateAge())


let Worker = function (name, yearOfBirth, job, salary) {
    Person.call(this, name, yearOfBirth, job);
    this.salary = salary
};

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;
 
let ahmet = new Worker("ahmet",1976,"engineer",3000);
console.log(ahmet);
console.log(ahmet.calculateAge()) */
/*
let list = {
    category: "phones",
    names:["apple","samsung","huawei"],
    çağır : function(){
        var self = this;
        this.names.map(function(name){
            console.log(`${self.category} ${name}` )
        })
    }
}
list.çağır() */
/*
function Topla(a, b, c) {
  return a + b + c;
}
let numbers = [10, 20, 40];
//console.log(Topla.apply(null,numbers));
console.log(Topla(...numbers));

let dizi1 = [1, 2, 3];
let dizi2 = [4, 5, 6];

dizi1.push(...dizi2);
console.log(dizi1); */
/*
let val;
const names = new Map();
names.set(1,"efe");
names.set(2,"onur");
names.set(3,"çetinkaya")
 val= names.get(1);
 console.log(names) */
/*
class Person {
  constructor(name,job,yearOfBirth){
      this.name = name;
      this.job = job;
      this.yearOfBirth = yearOfBirth;
  }

  calculateAge(){
      return 2021 - this.yearOfBirth
  }
}

let Efe = new Person("efe","student",2003)

console.log(Efe.job);
console.log(Efe.calculateAge()) */
/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
  }else if(xhr.status === 404){
      console.log("000")
  }
};

xhr.open("GET","test.txt",true);
xhr.send() */
/*
document.querySelector("#btn").addEventListener("click",loadEmployee);

function loadEmployee(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","employees.json",true)

    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(this.responseText)
            console.log(JSON.parse(this.responseText))
        }
    }
    xhr.send()
} */
/*
var p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then(function (data) {
  console.log(data);
});

p.catch(function(err){
    console.log(err)
})


new Promise(function(resolve,reject){

    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number)
    return number*number
}).then(function (number) {
    console.log(number)
})
*/

const imh = true;

const wgnp = new Promise((resolve, reject) => {
  if (imh) {
    const phone = {
      name: "Iphone 12",
      price: 12000,
      color: "silver",
    };
    resolve(phone);
  } else {
    const error = new Error("Failed");
    reject(error);
  }
});

const sf = function(phone){
const message ="I've got a new" + phone.name;
return Promise.resolve(message);
 }



const askM = function () {
  wgnp
  .then(sf)
  .then(message => console.log(message))
  .catch(error => {
      console.log(error)
  })
};

askM();

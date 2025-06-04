var a="kalyani"
console.log(a.length)
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())
var b="     pavan    "
console.log(b,b.length)
b=b.trim()
console.log(b,b.length)
console.log(a.charAt(2))
console.log(a.charCodeAt(2))
console.log(a.at(2))

var c="kalyani"
console.log(c.padStart(10,"*"))

// length of array--->length

var a=["kalyani","pavan","siddu"]
console.log(a.length)
var b=[1,2,3,4,5]
console.log(b.length)
var c=[true,1,"kalyani",null,undefined]
console.log(c.length)


// indexing in array
var a=["kalyani","pavan","siddu",[],null,undefined]
console.log(a[0])
console.log(a[a.length-1])
console.log(a[3])

// array to string

var a=[1,2,3,4,5,6]
console.log(a.length)
console.log(a.toString(),a.toString().length)
var b=["kalyani is a girl"]
console.log(b,b.length)
console.log(b.toString(),b.toString().length)
var b=["kalyani",null,undefined,[],1,2]
console.log(b,b.length)
console.log(b.toString(),b.toString().length)

// join method in array

var a=[1,2,3,4,5,6]
console.log(a.join("-"))
var b=["kalyani",null,undefined,[],1,2]
console.log(b.join("-"))
var c=["kalyani","pavan","siddu"]
console.log(c.join("*"))


// pop method in js

var a=[1,2,3,4,5,6]
a.pop()
console.log(a.pop())
console.log(a)

var a=["kalyani",null,undefined]
console.log(a.pop())
console.log(a)

// push method 

var a=[1,2,3,4,5,6]
a.push("kalyani","pavan","",[])
console.log(a)

var b=["kalyani",null]
b.push(undefined,[])
console.log(b)

b.push([1,2,3,4])
console.log(b)

// shift method

var a=["hi","1",null,{}]
a.shift()
console.log(a)

a=[null,undefined,"kalyani",2]
console.log(a.shift())
console.log(a)

// unshift method

var a=["hi","friends","",[],{}]
console.log(a)
a.unshift("Pavan")
console.log(a)
a.unshift("siddu")
console.log(a)


// delete method

let arr=[1,2,3,4,5,6]
console.log(arr.length)
delete arr[1]
console.log(arr)
console.log(arr.length)
delete arr[4]
console.log(arr)
console.log(arr.length)


// concat method

arr1=[1,2,3]
arr2=[4,5,6]
console.log(arr1.concat(arr2))
arr1=arr1.concat(arr2)
console.log(arr1)
console.log(arr2)

arr3=[null,[],{},undefined]
arr4=arr2.concat(arr1,arr3)
console.log(arr4)


// flat method

var arr1=["kalyani","siddu",["pavan",2,3,["name1",["name2"]]]]
arr1=arr1.flat(Infinity)
console.log(arr1)

var arr2=["kalyani","siddu",["pavan",2,3,["name1",["name2"]]]]
arr2=arr2.flat(2)
console.log(arr2)

var arr3=["kalyani","siddu",["pavan",2,3,["name1",["name2"]]]]
arr3=arr3.flat(1)
console.log(arr3)


// splice methods

var arr2=[null,undefined,"Kalyani",8.,9]
arr2.splice(0,1)
console.log(arr2)
arr2.splice(1,1,"Pavan","Siddu")
console.log(arr2)
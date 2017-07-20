
//undefined null 区别
let [a,d="技术胖" ]= ['jspang',null]
console.log(a);
console.log(d);

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let {foo,bar} = {foo:"jspang",bar:"zhangxr"}
console.log(foo + bar)
//解构之前就定义了变量 需要在结构语句外加圆括号
let foo2;
({foo2} = {foo2:"jsPang"});

//字符串解构
//小技巧 单引号字符串要比双引号字符串编译要快

//对象扩展运算符
function jspang(...arg){
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
  console.log(arg[3]);
  console.log("arg.length=" + arg.length)
}
jspang(1,2,3);

let arr1 = ["www","jspang","com"];
// let arr2 = arr1; //此处赋值的是引用 因此修改arr1也能修改arr2
let arr2 = [...arr1]; //此处赋值的是arr1的值 而不是引用
console.log(arr2);
arr2.push("zhangxr");
console.log(arr2);
console.log(arr1);

//rest （...） 运算符

function zhangxr(first,...arg){
  //可以使用for of 运算代替传统的for循环
  //console.log(arg.length)
  // for(let i=0;i<arg.length;i++){
  //   console.log(arr[i]);
  // }

  for(let val of arg){
    console.log(val);
  }
}
zhangxr(0,1,2,3,4,5,6,7,8)

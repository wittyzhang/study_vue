//二进制声明 Binary
let binary = 0B010101;
console.log(binary);
//八进制声明 Octal
let octal = 0o666;
console.log(octal);

let a = 11/4;
console.log(Number.isFinite(a)) //true
console.log(Number.isFinite('jspang')) //false
console.log(Number.isFinite(NaN)) //false
console.log(Number.isFinite(undefined)) //false
//判断NaN
console.log(Number.isNaN(NaN)) //true
//判断整数
console.log(Number.isInteger(918.2)) //false
console.log(Number.isInteger(918)) //true
//判断浮点型
console.log(!Number.isInteger(972.5)) //true
//转换类型
console.log(Number.parseFloat(972.5));
console.log(Number.parseInt(972.5));
//最大安全整数
let jspang = Math.pow(2,53)-1;
console.log(jspang);
console.log(Number.MAX_SAFE_INTEGER); //es6新增
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER); //es6新增
//判断是否是安全整数
console.log(Number.isSafeInteger(jspang +1));

//json 数组格式
let json = {
  "0": 'jspang',
  "1": '技术胖',
  "2": '大胖逼逼叨',
  length:3
}
//json数组 =》 数组
let arr = Array.from(json);
console.log(arr);
//将文本转为数组
let arr2 = Array.of(3,4,5,6);
console.log(arr2);
console.log(Array.of('[3,4,5,6]'));
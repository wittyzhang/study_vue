"use strict";

//undefined null 区别
var a = 'jspang',
    _ref = null,
    d = _ref === undefined ? "技术胖" : _ref;

console.log(a);
console.log(d);

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
var _foo$bar = { foo: "jspang", bar: "zhangxr" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo + bar);
//解构之前就定义了变量 需要在结构语句外加圆括号
var foo2 = void 0;


//字符串解构
//小技巧 单引号字符串要比双引号字符串编译要快

//对象扩展运算符
var _foo = { foo2: "jsPang" };
foo2 = _foo.foo2;
function jspang() {
  console.log(arguments.length <= 0 ? undefined : arguments[0]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
  console.log(arguments.length <= 2 ? undefined : arguments[2]);
  console.log(arguments.length <= 3 ? undefined : arguments[3]);
  console.log("arg.length=" + arguments.length);
}
jspang(1, 2, 3);

var arr1 = ["www", "jspang", "com"];
// let arr2 = arr1; //此处赋值的是引用 因此修改arr1也能修改arr2
var arr2 = [].concat(arr1); //此处赋值的是arr1的值 而不是引用
console.log(arr2);
arr2.push("zhangxr");
console.log(arr2);
console.log(arr1);

//rest （...） 运算符

function zhangxr(first) {
  for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  //console.log(arg.length)
  // for(let i=0;i<arg.length;i++){
  //   console.log(arr[i]);
  // }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      console.log(val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
zhangxr(0, 1, 2, 3, 4, 5, 6, 7, 8);

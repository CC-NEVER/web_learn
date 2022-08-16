//使用common.js模块化
const{add,mul} =require("./mathUtils.js")

console.log(add(20,30));
console.log(mul(20,30));

import {name,age,height} from "./info";
//使用ES6规范
console.log(name);
console.log(age);
console.log(height);
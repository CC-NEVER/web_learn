//使用common.js模块化
const{add,mul} =require("./js/mathUtils")

console.log(add(20,30));
console.log(mul(20,30));

import {name,age,height} from "./js/info";
//使用ES6规范
console.log(name);
console.log(age);
console.log(height);

//依赖css
require("./normal.css")
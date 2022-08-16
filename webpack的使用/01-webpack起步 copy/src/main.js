//commonjs的模块化规范
const { add,mul} =require('./JS/math')

console.log(add(20,30));
console.log(mul(20,30));
//es6的模块化规范
import{ name ,age, height} from './JS/info'
 console.log(name);
 console.log(age);
 console.log(height);

 //依赖css文件
 require('./css文件/nomal.css')
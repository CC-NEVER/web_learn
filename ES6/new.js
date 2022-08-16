/* 作为一个函数调用
    函数作为方法调用
    使用构造函数调用函数
    作为函数方法调用函数（call、apply）*/

    // 1、作为一个函数调用 
    var name = "windowsName";
    function a() {
        var name = "Cherry";

        console.log(this.name);          // windowsName

        console.log("inner:" + this);    // inner: Window
    }
    a();
    console.log("outer:" + this)         // outer: Window


    // 2、函数作为方法调用
    var name = "windowsName";
    var a = {
        name: "Cherry",
        fn : function () {
            console.log(this.name);      // Cherry
        }
    }
    a.fn();


    // 3、使用构造函数调用函数
    // 构造函数:
    function myFunction(arg1, arg2) {
        this.firstName = arg1;
        this.lastName  = arg2;
    }

    // This    creates a new object
    var a = new myFunction("Li","Cherry");
    a.lastName;    
    //new的过程 
    var a = new myFunction("Li","Cherry"); 
    // new myFunction{
    //     var obj = {};
    //     obj.__proto__ = myFunction.prototype;
    //     var result = myFunction.call(obj,"Li","Cherry");
    //     return typeof result === 'obj'? result : obj;
    // }
// 创建一个空对象 obj;
// 将新创建的空对象的隐式原型指向其构造函数的显示原型。
// 使用 call 改变 this 的指向
// 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。


// 4、作为函数方法调用函数
    var name = "windowsName";

    function fn() {
        var name = 'Cherry';
        innerFunction();
        function innerFunction() {
            console.log(this.name);      // windowsName
        }
    } 

    fn()
    // 这里的 innerFunction() 的调用是不是属于第一种调用方式：作为一个函数调用（它就是作为一个函数调用的，
    // 没有挂载在任何对象上，所以对于没有挂载在任何对象上的函数，在非严格模式下 this 就是指向 window 的）

    var name = "windowsName";

    var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            },100 );
        }

    };

    a.func2()     // this.func1 is not a function
    // 所以说 匿名函数的 this 永远指向 window。



    // 手写instanceof
    // instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置
    //  变量R的原型 存在于 变量L的原型链上
    function instance_of(L,R){
        // 验证如果为基本数据类型，就直接返回 false
        const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
        if(baseType.includes(typeof(L))) { return false }
        let RP = R.prototype;  // 取 R 的显示原型
        L = L.__proto__; // 取 L 的隐式原型
        while (true) {
            if (L === null) { // 找到最顶层
            return false;
            }
            if (L === RP) { // 严格相等
            return true;
            }
            L = L.__proto__;  // 没找到继续向上一层原型链查找
        }
}

// 隐式原型与显示原型
    /*
    1.每个函数都有一个prototype,即显示原型（属性）—是在定义函数的时候自动添加的，默认值是一个空的Object对象。
    2.每个实例对象都有一个__proto__,可称为隐式原型（属性）—是在创建函数对象时自动添加的，默认值为构造函数的prototype属性值。
    3.对象的隐式原型的值为其对应构造函数的显式原型的值
    */
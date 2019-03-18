class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.style.cssText = ` 
        width: ${this.width}px ;
        height: ${this.height}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        text-align: ${this.textAlign};
        `;
        document.body.appendChild(div);

    }
}

let box1 = new Options(100, 100, 'red', '14px', 'center'),
    box2 = new Options(200, 200, 'blue', '14px', 'center'),
    box3 = new Options(300, 300, 'green', '14px', 'center');
// alert(box1.createDiv());


box1.createDiv();
box2.createDiv();
box3.createDiv();

































// let name = "Ivan",
//     age = 30,
//     mail = " examp@le.ru ";

// document.write(` Пользователю  ${name}  ${age}  лет. Его почтовый адрес:  ${mail}`);

// function makeArray() {
//     var items = [];

//     for (let i = 0; i < 10; i++) {
//         let item = function () {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// };

// let arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();


// let fun = () => {
//     console.log(this);
// }

// // fun();

// let obj = {
//     number: 5,
//     sayNumber: function () {
//         let say = () => {
//             console.log(this);
//         };
//         say();
//     }
// }

// obj.sayNumber();

// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });


// function calcOrDouble(number, basis = 2) {
// //     // basis = basis || 2;
// //     console.log(number * basis);
// // }
// // calcOrDouble(3, 5);
// // calcOrDouble(6);


// // class Rectangle {
// //     constructor(height, width = 20) {
// //         this.height = height;
// //         this.width = width;
// //     }
// //     calcArea() {
// //         return this.height * this.width;
// //     }
// // }

// // const square = new Rectangle(10);

// // console.log(square.calcArea());

// // let video = ['youtube', 'vimeo', 'rutube'],
// //     blogs = ['worldpress', 'livejournal', 'blogger'],
// //     internet = [...video, ...blogs, 'vk', 'facebook'];
// // console.log(internet);

// // function log(a, b, c) {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// //     console.log(a + b + c);
// // }

// // let numbers = [2, 5, 7];

// // log(...numbers);


// // let name = 'kirill';

// // console.log(` Ваше имя ${name}  `);


// // let show = () => {
// //     console.log(name);
// // }

// // show();

// class Person {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     show(a, b) {
//         return this.a - this.b;
//     }

// }

// let kirill = new Person(10, 5);

// console.log(kirill.show());
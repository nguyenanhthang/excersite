// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => name,age,email
const user1 = {
    name: 'Nguyễn Tiến Đạt',
    age: 35,
    email: 'support@amela.vn',
    isStatus: true,
};

function getKey(n) {
    for (let i in n) {
        console.log(i);
    }
}
getKey(user1);
// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@amela.vn'
const user2 = {
    name: 'Nguyễn Tiến Đạt',
    age: 25,
    email: 'support@amela.vn',
    isStatus: false,
};

function getValue(n) {
    for (let i in n) {
        console.log(n[i]);
    }
}
getValue(user2);
// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false
const user3 = {
    name: 'nguyen van nam',
    age: 45,
    email: 'support@amela.vn',
    isStatus: true,
};

function checkKey(key, value) {
    return key.hasOwnProperty(value);
}
console.log(checkKey(user3, "name"));

// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => getLengthObject(user) => 3
const user4 = {
    name: 'Nguyễn tien nam',
    age: 15,
    email: 'support@amela.vn',
    isStatus: false,
};

function checkLength(n) {
    return Object.keys(n).length;
}
console.log(checkLength(user4));

// Bài 5. Cho mảng các user
// mỗi user có cấu trúc như sau
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true
const arr = [user1, user2, user3, user4];

function getUserStatus(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i].age > 25 && n[i].isStatus == true) {
            console.log(`name: ${n[i].name} age: ${n[i].age} isStatus: ${n[i].isStatus}`);
        }
    }
}
getUserStatus(arr);

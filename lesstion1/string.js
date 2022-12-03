//string
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ: checkStringExist("i love you", "you") => true
function checkString(input,check){
    return input.includes(check)
}
console.log(checkString("Amela A Beta", "Beta"))

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'
//cach 1
function shortenString(input) {
    return input.slice(0,8)+'...'
}
console.log(shortenString('Xin chào các ban'))
//cach 2
function shortenString2(input) {
    let result = ''
    for(let i =0 ; i<=8;i++){
        result+=input[i]
    }
    return `${result.trim()}...`
}
console.log(shortenString2('Xin chào các ban'))

// Bài 3. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

//cach 1
function copString(s) {
    return s.repeat(10)
}
console.log(copString('a'))

// cach 2
function copString2(s) {
    let result ="";
    for(let i=0;i<10;i++){
        result+=s
    }
    return result
}
console.log(copString2('a'))

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function syntaxString(s) {
    var result = '';
    for(let i = 0; i < 10; i++){
        result += `${s}`
    }
    return result.slice(0,-1);
}
console.log(syntaxString('a'))

// Bài 5. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
function countString(input,n){
    var countResult = '';
    for(let i=0 ; i < n ;i++){
        countResult += `${input}-`
    }
    return countResult.slice(0,countResult.length-1);
}
console.log(countString('a',6))

// Bài 6. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'
function reverseString(input) {
    return input.split('').reverse().join('');
}
console.log(reverseString('hello'));
// Bài 7. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.
function isPalindrome(str){
    str = str.toLowerCase()
    str = str.replace(/\s/g, '');
    return str===str.split('').reverse().join('')
}
console.log(isPalindrome('Race car'));
console.log(isPalindrome('hello world'));
// Bài 8: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?
function CheckString(string) {
    return string === string.toUpperCase();
}
console.log(CheckString("AA"))
function capitalizeString(input){ 
    let toLower = input.toLowerCase().split(' ')
    console.log(toLower);
    let sort = toLower.map((n,index)=>{
    if(index==4){
        console.log(index);
        return n.toUpperCase()
    }
    return n.replace(n.charAt(0),n.charAt(0).toUpperCase())
    }
    )
    return sort.join(' ')
}
console.log(capitalizeString('chAo MunG dEn voi aMela'))
// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1
// function minArr(n) {
//     let min = n[0]
//     for(let i = 0; i < n.length; i++) {
//         if(n[i] < min){
//             min = n[i];
//         }
//     }
//     return min;
// }
const minNum = (arr) => {
        let min = arr[0];
        arr.forEach((e) => {
            if (e < min) {
                min = e;
            }
        });
        return min;
};
console.log(minNum([9, 10, 2, 3, 8]));

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3
function max2Numbers(k) {
    k.sort((a, b) => a - b);
    return k[k.length - 2];
}
console.log(max2Numbers([2, 1, 3, 4,4,3,3]));

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function sortStudents(n) {
    return n.sort().reverse();
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function divide(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(divide(100));

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số,
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function array(n) {
    return n.map((x) => x % 2);
}
console.log(array([1, 2, 3, 4, 5, 8]));

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].
let convertString = (n) => {
    let maxvalue = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i].length >= maxvalue) {
            maxvalue = n[i].length;
        }
    }
    let k = n.filter((e) => {
        return e.length === maxvalue;
    });
    return k;
};
console.log(convertString(['aba', 'aa', 'ad', 'c', 'vcd']));

// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9
function random(n) {
    let random = Math.floor(Math.random() * n.length);
    return n[random];
}
console.log(random([3, 7, 9, 11, 8]));

// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function randomNumber(n) {
    return n.sort(() => Math.random() - 0.5);
}
console.log(randomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(randomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(v1, v2) {
    return v1.filter((n) => v2.includes(n));
}
console.log(similarity([1, 2, 3], [1, 2, 4]));

// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(v1, v2) {
    let checkV1 = v1.filter((n) => !v2.includes(n));
    let checkV2 = v2.filter((n) => !v1.includes(n));
    let connect = checkV1.concat(checkV2);
    return connect;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 11: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]
function sub_String(str) {
    let array1 = [];
    let array2 = [];
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        let str2 = '';
        str1+=str[i]
        array1.push(str1)
        for (let j = i+1; j < str.length; j++) {
            str2+=str[j]
            array2.push(str2)
        }
    }
    return[...array1,...array2]
}
console.log(sub_String('dog'));
// Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không
function arange(n) {
    let isDescArray = n.every(function (item, index, arr) {
        if (index == 0) {
            return true;
        } 
        return item > arr[index - 1];
    });
    return isDescArray;
}
console.log(arange([1, 2, 3]));

// Bài 13: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function arange1(n) {
    let isDescArray = n.every(function (item, index, arr) {
        if (item % 2 !== 0) {
            if (index == 0) {
                return true;
            }
            return item < arr[index - 1];
        }
    });
    return isDescArray;
}
console.log(arange1([7, 5, 3, 1]));
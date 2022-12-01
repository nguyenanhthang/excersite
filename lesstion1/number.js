//number
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function globularVolume(r) {
    return (4 * 3.14 * Math.pow(r, 3)) / 3;
}
console.log(globularVolume(1));

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function number(n, o) {
    var sum = 0;
    for (let i = n + 1; i < o; i++) {
        sum += i;
    }
    return sum;
}
console.log(number(3, 8));

// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function soNguyenTo(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(soNguyenTo(40));

// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.
function soNguyenTo1(n) {
    var sum = 0;
    for (let i = 2; i <= n; i++) {
        var result = true;
        if (i == 2) {
            result = true;
        } else if (i % 2 == 0) {
            result = false;
        } else if (i < 2) {
            result = false;
        } else {
            for (let j = 3; j < i; j += 2) {
                if (i % j == 0) {
                    result = false;
                    break;
                }
            }
        }
        if (result == true) {
            sum += i;
        }
    }
    return sum;
}
console.log(soNguyenTo1(13));

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function divisor(n) {
    var s = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            s += i;
        }
    }
    return s;
}
console.log(divisor(10));

// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao
//cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.

function arrange1(arr) {
    for(let i = 1; i<arr.length;i++){
        arr[i]=parseInt(arr[i],10)
        let current = arr[i]
        let j = i-1;
        while(j>=0&& arr[j]>current){
            arr[j+1]= arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr.join(' ')
}
console.log(arrange1(['1', '0', '2', '9', '8', '7', '86', '5', '4', '3', '2', '1']));

// // --------------------------------- //
// // -------- Bài tập Date ----------- //
// // --------------------------------- //

// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020
function getCurrentDate(n: string) {
    let date = new Date()
    return date.getDay() + n + date.getMonth() + n + date.getFullYear()
}
console.log(getCurrentDate("/"));
// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

console.log(getDaysInMonth(2021, 2));

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
function dateWeekend(date: string) {
    return ([0, 6].indexOf(new Date(date).getDay()) != -1)
}
console.log(dateWeekend('December 18, 2022'));
// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
function sumOfHours(time) {
    let minutes = Math.floor(time / 3)
    let hours = Math.floor(minutes / 60);
    return `${hours}:${minutes}`
}
console.log(sumOfHours(5000));
// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))
function calculate_age(birthday: any) {
    let current = new Date().getFullYear()
    birthday = new Date(birthday).getFullYear()
    return current - birthday
}
console.log(calculate_age(new Date(2001, 4, 12)));
// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);
const endOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

console.log(endOfMonth(2022, 12));
// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch
function countDownNew(tet) {
    let now = new Date().getTime()
    let timeRest = tet - now;
    let day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    return day + ' DAY ';
}
console.log(countDownNew(new Date("january 1,2023").getTime()));
// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''
// Bài 11. Viết hàm reset data. Input là object. Output là object sau khi được reset 

// const a = 0o10;
// console.log(a);

// const arr = [1, 2, 3];
// console.log(Math.max(1,2,3))

// Date 

// const dateObjectName = new Date([parameters]);
// const today = new Date();
// const Xmas95 = new Date('2002-12-28')
// console.log(Xmas95);

// const myBirth = new Date(2002, 11, 28);
// console.log(myBirth.getTime())

// const today = new Date();
// const endYear = new Date(1955, 11, 31, 23, 59, 59, 999)
// console.log(endYear)

// endYear.setFullYear(today.getFullYear());

// const msPerDay = 1000 * 60 * 60 * 24;
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;

// daysLeft = Math.round(daysLeft);


// const ipoDate = new Date();
// ipoDate.setTime(Date.parse('Aug 9, 1955'))
// console.log(ipoDate)

function JSClock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = String(hour % 12);
    if (temp === "0") {
        temp = "12";
    }
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? " P.M" : " A.M";
    return temp
}

console.log(JSClock())

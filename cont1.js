var tK = [["Đào Bảo Khuê", "31/12/2003","Nữ", 
            "Quảng Nam", "K21/14 Ông Ích Khiên", "21115053120121",
             "khuexinhgai@gmail.com", "0973251773", "8452973251773",
            "Đang đi học"],
            ["Trương Thanh Thảo", "19/06/2003","Nữ",
            "Thuề Thiên Huế", "181/Thanh Sơn", "21115053120141",
             "thao27062003@gmail.com", "0986773528", "935986773528",
            "Đang đi học"]]
const quayVe = document.querySelector(".quayVe");
const text = document.querySelectorAll(".thg1");

document.querySelector(".reset").addEventListener('click', function () {
    localStorage.removeItem('stt');
    window.open("index.html", "_self")
})

document.querySelector(".thongbao").addEventListener('click', function () {
    window.open("index3.html", "_self");
})

var x = Number(localStorage.getItem('stt'));

for (i = 0 ; i < 10 ; i++)
{
    text[i].innerHTML =text[i].innerHTML + " " +  tK[x][i];
    // console.log(text[i].innerHTML +  tK[x][i]);
}

const tenUse = document.querySelector(".ten")
tenUse.innerHTML = tK[x][0];
function quayve() {
    window.open("index.html", "_self");    
}

document.querySelector(".tkb").addEventListener('click', function () {
    window.open('index2.html', "_self");  
})

quayVe.addEventListener('click', quayve);

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
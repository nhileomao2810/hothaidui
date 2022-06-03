document.querySelector(".quayVe").addEventListener('click', function () {
    window.open("index.html", "_self");
    console.log(123);
})

const loggin = document.querySelector(".loggin");

var x = localStorage.getItem('stt');

var tK = [["2803", "matkhau", "Đào Bảo Khuê"],
          ["2904", "taikhoan", "Trương Thanh Thảo"]];


if (x != null)
{
    loggin.innerHTML = "<i class=\"fa-solid fa-circle-user\"></i>" + " " + tK[x][2];
    loggin.addEventListener('click', function () {
        window.open("index1.html", "_self") 
    })
}

loggin.addEventListener('click', function () {
    if (x == null)
    {
        alert("Bạn Phải Quay Về Trang Chủ Để Đăng Nhập");
        // window.open("index.html", "_self")
    }
}) 

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}


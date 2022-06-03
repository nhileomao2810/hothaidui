const loggin = document.querySelector(".loggin")
const lammo = document.querySelector(".lammo");
const logIn = document.querySelector(".the_Login")
const out = document.querySelector(".X")
const log = document.querySelector(".Load")
const sai_taik = document.querySelector(".sai_tk")
const nameText = document.querySelector(".nameText")
var tK = [["2803", "matkhau", "Đào Bảo Khuê"],
          ["2904", "taikhoan", "Trương Thanh Thảo"]];
var dangnhap = false;

var arrArt = ["tintucchay.png", "anhchay.png", "imgchay.png"];
var  k = 1;
const listanh = document.getElementsByClassName('ttchay');

duyetArt = function () {
    listanh[0].attributes[1].nodeValue = arrArt[k];
    k++;
    if (k == arrArt.length)
        k = 0;
}
setInterval(duyetArt, 2000);

function doOn()
{
    if (dangnhap == false)
    {
        logIn.classList.add("bat");
        lammo.classList.add("bat");
    }
    else
    {
        window.open("index1.html", "_self")
    }
}

function doOff() {
    logIn.classList.remove("bat");
    lammo.classList.remove("bat");
}

function doLog()
{
    var loadTk = document.querySelector("#tenTk").value;
    var loadMk = document.querySelector("#maMk").value;
    for (i = 0; i < 2; i++)
        if (loadTk == tK[i][0])
            if (loadMk == tK[i][1])
            {
                doOff();
                dangnhap = true;
                console.log("da dang nhap");
                loggin.innerHTML = "<i class=\"fa-solid fa-circle-user iconlg\"></i>" + tK[i][2];
                localStorage.setItem("stt", i);
                break;
            }
    sai_taik.classList.add("bat");
}

var x = localStorage.getItem('stt');
if (x != null)
{
    x = Number(x);
    dangnhap = true;
    console.log("da dang nhap lai");
    loggin.innerHTML = "<i class=\"fa-solid fa-circle-user iconlg\"></i>" + tK[x][2];
}

document.querySelector(".tkb").addEventListener('click', function () {
    if (dangnhap)
        window.open('index2.html', "_self");  
    else
    {
        doOn();
    }  
})

document.querySelector(".thongbao").addEventListener('click', function () {
    window.open("index3.html", "_self");
})

loggin.addEventListener('click', doOn);

out.addEventListener('click', doOff);

if (dangnhap == false)
{
    log.addEventListener('click', doLog);
}


const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);
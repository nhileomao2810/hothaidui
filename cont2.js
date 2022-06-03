document.querySelector('.quayve').addEventListener('click', function () {
    window.open('index.html', '_self');
}) 
tbk = []

var x = localStorage.getItem('stt');

tbk[0] = [["221VKT02", "Vẽ Kỹ Thuật","2","3","4","Lê Thị Thùy Linh","C102","07/02/2022"],
        ["221THML09","Triết học Mác-Lênin","2","8","10","Trịnh Sơn Hoan","A214","07/02/2022"],
        ["221CSDL02","Cơ sở dữ liệu I","3","3","4","Hoàng Thị Mỹ Lệ","A218","07/02/2022"],
        ["221MMT03","Mạng máy tính","3","7","8","Nguyễn Văn Phát","A301","07/02/2022"],
        ["221TCSDLI04","TH Cơ sở dữ liệu I","3","9","10","Nguyễn Thị Thùy Trang","PMT","14/02/2022"],
        ["221CTMT02","Cấu trúc máy tính","4","1","2","Lê Vũ","A302","07/02/2022"],
        ["221TTKW04","TH Thiết kế Web","4","7","8","Nguyễn Tấn Thuận","PMT","14/02/2022"],
        ["221GDTC228","Giáo dục thể chết II","5","1","4","Nguyễn Hữu Lực","ONLINE","07/02/2022"],
        ["221KNLVN15","Kỹ năng làm việc nhóm","5","7","8","Trần Thị Lợi","A101","07/02/2022"],
        ["221TKW03","Thiết kế Web","6","1","2","Trần Bửu Dung","A218","07/02/2022"],
        ["221PLDC06","Pháp luật đại cương","6","1","2","Lê Đình Quang Phúc","A305","07/02/2022"],
        ["221TMMT03","TH Mạng máy tính","6","9","10","Nguyễn Hữu Phát","PMT","14/02/2022"]];

tbk[1] = [["221VKT02", "Vẽ Kỹ Thuật","2","3","4","Lê Thị Thùy Linh","C102","07/02/2022"],
        ["221THML09","Triết học Mác-Lênin","2","8","10","Trịnh Sơn Hoan","A214","07/02/2022"],
        ["221CSDL02","Cơ sở dữ liệu I","3","3","4","Hoàng Thị Mỹ Lệ","A218","07/02/2022"],
        ["221MMT03","Mạng máy tính","3","7","8","Nguyễn Văn Phát","A301","07/02/2022"],
        ["221TCSDLI04","TH Cơ sở dữ liệu I","3","9","10","Nguyễn Thị Thùy Trang","PMT","14/02/2022"],
        ["221CTMT02","Cấu trúc máy tính","4","1","2","Lê Vũ","A302","07/02/2022"],
        ["221TTKW04","TH Thiết kế Web","4","7","8","Nguyễn Tấn Thuận","PMT","14/02/2022"],
        ["221GDTC228","Giáo dục thể chết II","5","1","4","Nguyễn Hữu Lực","ONLINE","07/02/2022"],
        ["221VKT02", "Vẽ Kỹ Thuật","5","3","4","Lê Thị Thùy Linh","C102","07/02/2022"],
        ["221TKW03","Thiết kế Web","6","1","2","Trần Bửu Dung","A218","07/02/2022"],
        ["221PLDC06","Pháp luật đại cương","6","1","2","Lê Đình Quang Phúc","A305","07/02/2022"],
        ["221TMMT03","TH Mạng máy tính","6","9","10","Nguyễn Hữu Phát","PMT","14/02/2022"]];





var tK = [["Đào Bảo Khuê","21115053120121","21T1","Nữ"],
        ["Trương Thanh Thảo", "21115053120141","21T1", "Nữ"]];
        
const tenUse = document.querySelector(".ten")
tenUse.innerHTML = tK[x][0];

document.querySelector(".thongbao").addEventListener('click', function () {
    window.open("index3.html", "_self");
})

const info = document.querySelectorAll('.textIf');

for (i=0; i< 3 ; i++)
    info[i].innerHTML = info[i].innerHTML + tK[x][i+1];

const table = document.querySelectorAll(".dien");
k = 0;
for (i = 0; i < 12 ;i++)
{
    for (t = 0 ; t < 8 ; t++)
    {
        table[k].innerHTML = tbk[x][i][t];
        k++;
    }
}

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
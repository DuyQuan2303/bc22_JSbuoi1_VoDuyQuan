// Bai 1: Tinh luong nhan vien
// Bước 1: tạo biến luongMotNgay, soNgayLam, tongTien
// Bước 2 : Gán giá trị cho luongMotNgay, soNgayLam, tongTien
// Bước 3: Tính tongTien = luongMotNgay * soNgayLam
// Bước 4: Xuất ra kết quả 
document.getElementById("btnTinh").onclick = function(){
    var soNgayLam = document.getElementById("txtSoNgay").value ;
    var luongMotNgay = 100;
    var tongTien = soNgayLam * luongMotNgay;
    var thongbaosotien = "Số tiền bạn được nhận là : " + tongTien + " cho " + soNgayLam + " ngày đã làm";
    document.getElementById("footerTienLuong").innerHTML = thongbaosotien;
    document.getElementById("footerTienLuong").classList = "showInfo";
}
    

// Bài tập 2 
// Bước 1: tạo ra 5 biến số cần nhập, giá trị trung bình
// Bước 2: gán giá trị cho 5 biến số cần nhập
// Bước 3: Tính giá trị trung bình = tổng 5 số đã nhập chia cho 5
// Bước 4: xuất ra kết quả 
document.getElementById("btnTinhTB").onclick = function(){
    var sothunhat = document.getElementById("txtSoThuNhat").value *1 ;
    var sothuhai = document.getElementById("txtSoThuHai").value* 1;
    var sothuba = document.getElementById("txtSoThuBa").value* 1;
    var sothutu = document.getElementById("txtSoThuTu").value*1;
    var sothunam = document.getElementById("txtSoThuNam").value*1;
    var giatritrungbinh = ((sothunhat + sothuhai + sothuba + sothutu + sothunam))/5;
    var ketqua = "Kết quả là : " + giatritrungbinh;
    document.getElementById("footerGiaTriTrungBinh").innerHTML = ketqua;
    document.getElementById("footerGiaTriTrungBinh").classList = "showInfo";
}

// Bài tập 3
// Bước 1: tạo ra các biến sotienUSD, tygia, sotienVND;
// Bước 2: gán giá trị cho các biến trên;
// Bước 3: Tính sotienVND = sotienUSD * tygia;
// Bước 4: xuất ra kết quả; 

document.getElementById("btnTinhVND").onclick = function(){
    var sotienUSD = document.getElementById("txtSoTienUSD").value ;
    var tygia = 23500;
    var sotienVND = sotienUSD * tygia;
    var thongbaosotien = "Số tiền bạn được nhận là : " + sotienVND + " VND";
    document.getElementById("footerTienQuyDoi").innerHTML = thongbaosotien;
    document.getElementById("footerTienQuyDoi").classList = "showInfo";
}

// Bài tập 4 
// Bước 1: tạo ra các biến canhthunhat, canhthuhai, chuvi, dientich
// Bước 2: gán giá trị cho các biến đã tạo
// Bước 3: tính chu vi và diện tích bằng công thức
// Bước 4: xuất ra kết quả
document.getElementById("btnTinhHCN").onclick = function(){
    var canhthunhat = document.getElementById("txtCanhThuNhat").value*1;
    var canhthuhai = document.getElementById("txtCanhThuHai").value*1;
    var chuvi = (canhthunhat + canhthuhai)*2;
    var dientich = canhthunhat * canhthuhai;
    var ketqua = "Chu vi là :" + chuvi + "<br/> Diện tích là :" + dientich;

    document.getElementById("footerHinhCN").innerHTML = ketqua;
    document.getElementById("footerHinhCN").classList = "showInfo";
}

// Bài tập 5
// Bước 1: Tạo ra các biến socantinh, sohangdonvi, sohangchuc, tonghaikyso, ket qua
// Bước 2: gán giá trị cho các biến vừa tạo
// Bước 3: Tính số hàng đơn vị và hàng chục
// Bước 4: Tính tổng của số hàng đơn vị và hàng chục
// Bước 5: Xuất ra kết quả
document.getElementById("btnTinhKySo").onclick = function(){
    var socantinh = document.getElementById("txtSoCanTinh").value;
    var sohangdonvi =  (socantinh)%10;
    var sohangchuc = socantinh/10;
    var tonghaikyso = Math.floor(sohangchuc + sohangdonvi);
    var ketqua = "Tổng 2 ký số là: " + tonghaikyso;

    document.getElementById("footerKySo").innerHTML = ketqua;
    document.getElementById("footerKySo").classList = "showInfo";
}


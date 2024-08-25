var DSNV = []
var dataJSON = localStorage.getItem('DSNV_JSON')
if (dataJSON !== null) {
    // kiểm tra dữ liệu lấy lên có phải array trước khi render
    var dataArr = JSON.parse(dataJSON)
    DSNV = dataArr.map(function (item) {
        var nv = new NhanVien(item.taiKhoan, item.ten, item.email, item.mk, item.ngayLam, item.luongCoban, item.chucVu, item.gioLam)
        return nv
    })
    render(DSNV) 
}

function themNV() {
    var nv = layThongTinTuForm()
    var isValid = ((kiemTraRong(nv.taiKhoan, "tbTKNV") && kiemTraSo(nv.taiKhoan, "tbTKNV") && !isValueInLocalStorage(nv.taiKhoan))
        & (kiemTraRong(nv.ten, "tbTen") && kiemTraChu(nv.ten, "tbTen"))
        & (kiemTraRong(nv.email, "tbEmail") && kiemTraEmail(nv.email, "tbEmail"))
        & (kiemTraRong(nv.mk, "tbMatKhau") && kiemTraMK(nv.mk, "tbMatKhau"))
        & (kiemTraRong(nv.ngayLam, "tbNgay") && kiemTraNgay(nv.ngayLam, "tbNgay"))
        & (kiemTraRong(nv.luongCoban, "tbLuongCB") && kiemTraLuong(nv.luongCoban, "tbLuongCB"))
        & (kiemTraRong(nv.chucVu, "tbChucVu") && kiemTraChucVu(nv.chucVu, "tbChucVu"))
        & (kiemTraRong(nv.gioLam, "tbGiolam") && kiemTraGioLam(nv.gioLam, "tbGiolam")))

    if (isValid) {
        DSNV.push(nv)
        var dataJSON = JSON.stringify(DSNV)
        localStorage.setItem('DSNV_JSON', dataJSON)
        render(DSNV)
    }
}

function xoaNV(id) {
    var index = DSNV.findIndex(function (item) {
        return item.taiKhoan == id
    })
    DSNV.splice(index, 1)
    var dataJSON = JSON.stringify(DSNV)
    localStorage.setItem('DSNV_JSON', dataJSON)
    render(DSNV)
}

function suaNV(id) {
    var index = DSNV.findIndex(function (item) {
        return item.taiKhoan == id
    })
    var nv = DSNV[index]
    hienThiThongTin(nv)
    document.getElementById('tknv').disabled = true
}

function update() {
    var nv = layThongTinTuForm()
    var index = DSNV.findIndex(function (item) {
        return item.taiKhoan == nv.taiKhoan
    })
    DSNV[index] = nv
    var isValid = (kiemTraRong(nv.taiKhoan, "tbTKNV") && kiemTraSo(nv.taiKhoan, "tbTKNV"))
        & (kiemTraRong(nv.ten, "tbTen") && kiemTraChu(nv.ten, "tbTen"))
        & (kiemTraRong(nv.email, "tbEmail") && kiemTraEmail(nv.email, "tbEmail"))
        & (kiemTraRong(nv.mk, "tbMatKhau") && kiemTraMK(nv.mk, "tbMatKhau"))
        & (kiemTraRong(nv.ngayLam, "tbNgay") && kiemTraNgay(nv.ngayLam, "tbNgay"))
        & (kiemTraRong(nv.luongCoban, "tbLuongCB") && kiemTraLuong(nv.luongCoban, "tbLuongCB"))
        & (kiemTraRong(nv.chucVu, "tbChucVu") && kiemTraChucVu(nv.chucVu, "tbChucVu"))
        & (kiemTraRong(nv.gioLam, "tbGiolam") && kiemTraGioLam(nv.gioLam, "tbGiolam"))
    if (isValid) {
        var dataJSON = JSON.stringify(DSNV)
        localStorage.setItem('DSNV_JSON', dataJSON)
        render(DSNV)
    }
}

document.getElementById('btnThem').onclick = function () {
    document.getElementById("tknv").disabled = false;
    document.getElementById("tknv").value = ""
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("datepicker").value = ""
    document.getElementById("luongCB").value = ""
    document.getElementById("chucvu").value = "Chọn chức vụ"
    document.getElementById("gioLam").value = ""
}

document.getElementById('btnTimNV').onclick = function () {
    var loaiNhanVien = document.getElementById('searchName').value
    var newDSNV = []
    for (var i = 0; i < DSNV.length; i++) {
        if (DSNV[i].xepLoaiNhanVien() === loaiNhanVien) {
            newDSNV.push(DSNV[i])
        }
    }
    render(newDSNV)
}

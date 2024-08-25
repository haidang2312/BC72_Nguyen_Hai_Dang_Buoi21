function layThongTinTuForm() {
    var taiKhoan = document.getElementById('tknv').value
    var ten = document.getElementById('name').value
    var email = document.getElementById('email').value
    var mk = document.getElementById('password').value
    var ngayLam = document.getElementById('datepicker').value
    var luongCoban = document.getElementById('luongCB').value * 1
    var chucVu = document.getElementById('chucvu').value
    var gioLam = document.getElementById('gioLam').value * 1
    var nv = new NhanVien(taiKhoan, ten, email, mk, ngayLam, luongCoban, chucVu, gioLam)
    return nv;
}

function render(dsnv) {
    var contentHTML = ''
    for (var i = 0; i < dsnv.length; i++) {
        var nv = dsnv[i]
        var trString = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.ten}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tinhTongLuong()}</td>
                <td>${nv.xepLoaiNhanVien()}</td>
                <td>
                    <button class="btn btn-primary" onclick = "xoaNV('${nv.taiKhoan}')">Xoá</button>
                    <button class="btn btn-danger mt-1" data-toggle="modal" data-target="#myModal" onclick = "suaNV('${nv.taiKhoan}')">Sửa</button>
                </td>
            </tr>
        `
        contentHTML += trString
    }
    document.getElementById('tableDanhSach').innerHTML = contentHTML
}
function hienThiThongTin(data) {
    document.getElementById('tknv').value = data.taiKhoan
    document.getElementById('name').value = data.ten
    document.getElementById('email').value = data.email
    document.getElementById('password').value = data.mk
    document.getElementById('datepicker').value = data.ngayLam
    document.getElementById('luongCB').value = data.luongCoban
    document.getElementById('chucvu').value = data.chucVu
    document.getElementById('gioLam').value = data.gioLam
}
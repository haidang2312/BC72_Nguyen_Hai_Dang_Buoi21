function NhanVien(_taiKhoan, _ten, _email, _mk, _ngayLam, _luongCoban, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.ten = _ten;
    this.email = _email;
    this.mk = _mk;
    this.ngayLam = _ngayLam;
    this.luongCoban = _luongCoban;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tinhTongLuong = function() {
        var chucVuNhanVien = this.chucVu
        switch (chucVuNhanVien) {
            case "Sếp": 
                return (this.luongCoban * 3).toLocaleString()
                break;
            case "Trưởng phòng":
                return (this.luongCoban * 2).toLocaleString()
                break;
            default:
                return (this.luongCoban).toLocaleString()
                break;
        }
    }
    this.xepLoaiNhanVien = function() {
        if (this.gioLam >= 192) {
            return "Xuất sắc"
        } else if (this.gioLam >= 176) {
            return "Giỏi"
        } else if (this.gioLam >= 160) {
            return "Khá"
        } else return "Trung bình"
    }
}



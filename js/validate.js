function kiemTraRong(value, idErr) {
    if (value.length === 0 || value === 0) {
        document.getElementById(idErr).innerHTML = "Không được để trống"
        return false
    } else {
        document.getElementById(idErr).innerHTML = ""
        return true
    }
}

function kiemTraSo(value, idErr) {
    const regex = /^\d{4,6}$/
    var isNumber = regex.test(value)
    if (isNumber) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Chỉ được nhập 4-6 số"
        return false
    }
}

function kiemTraChu(value, idErr) {
    const regex = /^[A-Za-z\s]+$/
    var isAlphabetic = regex.test(value)
    if (isAlphabetic) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Chỉ được nhập chữ"
        return false
    }
}
function kiemTraEmail(value, idErr) {
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isEmail = regexEmail.test(value)
    if (isEmail) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Nhập sai định dạng email"
        return false
    }
}
function kiemTraNgay(value, idErr) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)\d{2})$/
    var isDay = regex.test(value)
    if (isDay) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Nhập sai định dạng"
        return false
    }
}
function kiemTraLuong(value, idErr) {
    const regex = /^(1[0-9]{6}|20[0-9]{5}|1[1-9][0-9]{6}|[2-9][0-9]{6})$/
    var isCheckLuong = regex.test(value)
    if (isCheckLuong) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Nhập không hợp lệ"
        return false
    }
}
function kiemTraChucVu(value, idErr) {
    const regex = /^(Sếp|Trưởng phòng|Nhân viên)$/
    var isValidRole = regex.test(value)
    if (isValidRole) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Chọn không hợp lệ"
        return false
    }
}
function kiemTraGioLam(value, idErr) {
    const regex = /^(80|[8-9][0-9]|1[0-9][0-9]|200)$/
    var isCheckGioLam = regex.test(value)
    if (isCheckGioLam) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Nhập không hợp lệ"
        return false
    }
}

function kiemTraMK(value, idErr) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,10}$/
    var isValidMK = regex.test(value)
    if (isValidMK) {
        document.getElementById(idErr).innerHTML = ""
        return true
    } else {
        document.getElementById(idErr).innerHTML = "Mật khẩu không hợp lệ"
        return false
    }
}

// hàm kiểm tra sự tồn tại của tài khoản trong local storage

function isValueInLocalStorage(value) {
    var storedData = JSON.parse(localStorage.getItem('DSNV_JSON'))
    for (var i = 0; i < storedData.length; i++) {
        if (value === storedData[i].taiKhoan) {
            document.getElementById('tbTKNV').innerHTML = "Tài khoản đã tồn tại"
            return true
        }
    }   
    document.getElementById('tbTKNV').innerHTML = ""
    return false
}


function tinhthue(){
    let x = document.getElementById("tienluong").value;
    let y = tienthue(x);
    let tiensauthue= x - y;
    const message1 = `Xin chào\nTiền thuế bạn nộp vào ngân sách giúp xây dựng Đất nước giàu mạnh. \nĐừng trốn thuế. \nTiền thuế TNCN bạn phải nộp vào ngân sách nhà nước là: `;
    const message2 = `\nSố tiền bạn có sau khi trừ thuế là: `
    let message = message1 + y + message2 + tiensauthue;         
    alert(message)
    // document.getElementById("tienthuephainop").innerHTML = y;
}
function tienthue(luong) {
    const bac_luong_luy_tien = 5000000;
    const bac_thue_ly_tien = 0.05;

    let bac_luong = (luong / bac_luong_luy_tien);
    let tien_thue_phai_nop=0;
    
    if (bac_luong >= 8.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 7); 
    } else if (bac_luong >= 7.2 && bac_luong < 8.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 6);  
    } else if (bac_luong >= 6.2 && bac_luong < 7.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 5);  
    } else if (bac_luong >= 5.2 && bac_luong < 6.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 4);  
    } else if (bac_luong >= 4.2 && bac_luong < 5.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 3);  
    } else if (bac_luong >= 3.2 && bac_luong < 4.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 2);  
    } else if (bac_luong > 2.2 && bac_luong < 3.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 1);  
    } else if (bac_luong <=2.2) {
        tien_thue_phai_nop = luong * (bac_thue_ly_tien * 0); 
    }
    return tien_thue_phai_nop;
}
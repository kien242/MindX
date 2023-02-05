function kiemtranhapngu(){
    let name = document.getElementById("username").value;
    console.log(name);
    let tuoi = document.getElementById("age").value;
    console.log(tuoi);

    const message3 = `Chúc mừng `;
    const message4 = `Xin lỗi, bạn chưa đủ tuổi để nhập ngũ`;
    const message5 = `Xin lỗi, bạn đã quá tuổi để được gọi nhập ngũ`
    const message6 = ` bạn sắp được gọi khám tuyển NVQS, hãy rèn luyện sức khỏe để có thể đứng trong hàng ngũ QĐND Việt Nam, góp phần bảo về Tổ Quốc.`
    if(document.getElementById("male").checked && tuoi >=18 && tuoi <=27){
        console.log(`Hãy rèn luyện sức khỏe, bạn có thể đứng trong hàng ngũ QĐND Việt Nam`)
        alert(message3 + name + message6)
    } else if (document.getElementById("female").checked){
        console.log(`Bạn là nữ`)
        alert(`Bạn là nữ, sẽ không có lệnh gọi khám tuyển, tuy nhiên bạn vẫn có thể tham gia và Quân đội bằng cách viết đơn xin khám tuyển nghĩa vụ quân sự tự nguyện`)
    } else if(document.getElementById("male").checked && tuoi <18){
        console.log(`Bạn chưa đủ tuổi để được gọi khám tuyển NVQS`)
    } else if(document.getElementById("male").checked && tuoi > 27){
        console.log(`Bạn đã quá tuổi để được gọi khám tuyển NVQS`)
    }

}
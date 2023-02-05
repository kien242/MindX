let chi_so_cu=1000;
let chi_so_moi= 1340 ;
let tieuthu = chi_so_moi - chi_so_cu; // 340
let so_tien_phai_tra=0;

if( tieuthu ===0 ){
    console.log(Nhà này ko phát  sinh điện, chắc là nhà hoang)
} else if ( tieuthu <=50){
    so_tien_phai_tra=tieuthu*1243;
    console.log(`Nhà này dùng ít, số điện tiêu thụ là ${tieuthu} và phải trả ${so_tien_phai_tra}`)
} else if ( tieuthu <=100){
    so_tien_phai_tra=50*1243 + (tieuthu-50)*1304;
    console.log(`Nhà này dùng ít, số điện tiêu thụ là ${tieuthu} và phải trả ${so_tien_phai_tra}`)
}else if ( tieuthu <=150){
    so_tien_phai_tra=50*1243 + 50*1304 + (tieuthu-100)*1644;
    console.log(`Nhà này dùng ít, số điện tiêu thụ là ${tieuthu} và phải trả ${so_tien_phai_tra}`)
}else if ( tieuthu <=200){  
    so_tien_phai_tra=50*1243 + 50*1304 + 50*1644+ (tieuthu-150)*1644;
    console.log(`Nhà này dùng ít, số điện tiêu thụ là ${tieuthu} và phải trả ${so_tien_phai_tra}`)
}else if ( tieuthu >200){
    so_tien_phai_tra=50*1243 + 50*1304 + 50*1644 + 50*1644 + (tieuthu-200)*2297;
    console.log(`Nhà này dùng ít, số điện tiêu thụ là ${tieuthu} và phải trả ${so_tien_phai_tra}`)
}


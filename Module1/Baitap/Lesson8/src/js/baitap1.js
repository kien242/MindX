function kiemtranguyento() {
    let n = document.getElementById("songuyento").value;
    let lasonguyento = `${n} là số nguyên tố`;
    let khonglasonguyento = `${n} không là số nguyên tố`
    if (n <= 0) {
        window.alert(`${n} không phải số tự nhiên`)
    } else if (n ===1 || n ===2 || n===3 ||n===5 || n===7) {
        window.alert(lasonguyento)
    } else if (n > 3 ) {
        if ( n % 2 === 0 ) {
            window.alert(khonglasonguyento);
        } else if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
            window.alert(khonglasonguyento);
        } else {
            window.alert(lasonguyento)
        }
    }
}
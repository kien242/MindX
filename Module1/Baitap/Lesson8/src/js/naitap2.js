function tongcacuocnguyenduong(){
    let sum = 0;
    let n_bt2 = document.getElementById("tongcacuoc").value;
    for ( let i =1; i <= Math.sqrt(n_bt2); i++){
        if (n_bt2 % i ===0){
            sum= sum+i + n_bt2/i;
            console.log(sum)
        }
    }
    window.alert(`Tổng các cước nguyên dương của ${n_bt2} là ${sum}`)
}
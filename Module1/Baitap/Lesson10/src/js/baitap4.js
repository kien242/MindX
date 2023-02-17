function myFunction(){
    x=document.getElementById("billTotal").value;
    console.log(x);
    tip=document.getElementById("tipMoney").value;
    console.log(tip)
    songuoi=document.getElementById("soNguoi").value;
    console.log(songuoi)
    let tientratungnguoi=0;
    tientratungnguoi=(x+tip)/songuoi;
    console.log(tientratungnguoi)
    document.getElementById("tientratungnguoi").innerHTML= tientratungnguoi;
}
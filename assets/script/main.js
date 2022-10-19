function generaBiglietto(){
    let UserKm= document.getElementById('InputUserKm').value;
    let UserAge= document.getElementById('InputUserAge').value;
    document.getElementById('info').innerHTML = `info : ${UserKm + UserAge}`
}
 
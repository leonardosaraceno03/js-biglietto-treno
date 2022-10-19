function generaBiglietto(){
    
    let UserKm= document.getElementById('InputUserKm').value;
    let UserAge= document.getElementById('InputUserAge').value;
    
    if(UserAge < 18){
        let Price= ((UserKm * 0.21)*0.8).toFixed(2);
        document.getElementById('info').innerHTML = `il prezzo dato che sei minorenne corrisponde a: ${Price} € `
    }
    else if(UserAge > 65){
        let Price=((UserKm * 0.21) *0.6).toFixed(2);
        document.getElementById('info').innerHTML = `il prezzo dato che sei vecchio corrisponde a: ${Price} `
    }
    else{
        let Price= (UserKm * 0.21).toFixed(2);
        document.getElementById('info').innerHTML = `non ti meriti nessuno sconto, paga : ${Price} `
    }
}

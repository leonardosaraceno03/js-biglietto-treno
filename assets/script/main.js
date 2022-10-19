function generaBiglietto(){
    console.log('ciao')
    let UserKm= document.getElementById('InputUserKm').value;
    let UserAge= document.getElementById('InputUserAge').value;
    
    if(UserAge < 18){
        document.getElementById('info').innerHTML = `sei bimbo: `
    }
    else if(UserAge > 65){
        document.getElementById('info').innerHTML = `sei vecchio: `
    }
    else{
        document.getElementById('info').innerHTML = `sei normale: `
    }
}

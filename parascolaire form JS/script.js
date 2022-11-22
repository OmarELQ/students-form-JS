function redirect() {
    location.replace('./confirmation.html');
   };

function redirectback() {
    location.replace('./index.html');
   };


function NomCheck(){
    const x = document.getElementById("Nom").value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("NomOutput").innerHTML = "*Votre nom ne peut contenir que des lettres";
        document.getElementById("Nom" ).style.border = "1px solid red";
    }
    else if(x.length < 30){
        document.getElementById("Nom").style.border = "1px solid green";
        document.getElementById("NomOutput").innerHTML = "";
    } else {
        document.getElementById("NomOutput").innerHTML = "*Votre ne doit pas dépasser 30 caractères ";
        document.getElementById("Nom").style.border = "1px solid red";
    }

}

function PrenomCheck(){
    const x = document.getElementById("Prenom").value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("PrenomOutput").innerHTML = "*Votre prénom ne peut contenir que des lettres";
        document.getElementById("Prenom").style.border = "1px solid red";
    }
    else if(x.length < 30){
        document.getElementById("Prenom").style.border = "1px solid green";
        document.getElementById("PrenomOutput").innerHTML = "";
    } else {
        document.getElementById("PrenomOutput").innerHTML = "*Votre prénom ne doit pas dépasser 30 caractères";
        document.getElementById("Prenom").style.border = "1px solid red";
    }
}

function emailCheck(){
    const x = document.getElementById("Email").value;
    if(x == Prenom.value+"."+Nom.value+"@ofppt.ma"){
        
        document.getElementById("Email").style.border = "1px solid green";
        document.getElementById("emailOutput").innerHTML = "";
    } else {
        document.getElementById("emailOutput").innerHTML = "* L'email doit être sous ce format (prénom.nom@ofppt.ma)";
        document.getElementById("Email").style.border = "1px solid red";
    }
}
function telephoneCheck(){
    const x = document.getElementById("telephone").value;
    let y = new RegExp('[0-9]','g');
    if(y.test(x) == true && x.length == 10 && x[0] == 0 && ( x[1] == 5 || x[1] == 6 || x[1] == 7)){
        
        document.getElementById("telephone").style.border = "1px solid green";
        document.getElementById("telephoneOutput").innerHTML = "";
    } else {
        document.getElementById("telephoneOutput").innerHTML = "*Merci de renseigner un numéro valide";
        document.getElementById("telephone").style.border = "1px solid red";
    }
}


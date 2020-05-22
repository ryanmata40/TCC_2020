/*Observações:

-Após o cpf ser preenchido, caso o mesmo não seja válido, a caixa de texto ficará vermelha. O mesmo ocorre com o número de celular
-O cep, após ser preenchido preencherá automaticamente outras inputbox com os ids: rua, bairro, cidade e uf
-Não encontrei uma forma de detectar o número da residência
-Os dados são coletados dos ids: number, cpf e cep;

*/

function numbervalidate(){
    var number = document.getElementById("number").value.replace(/[^\d]+/g,'');

    if(isNaN(number)) {
        document.getElementById("number").setCustomValidity("Invalid");
        return false;
    }

    if(number.substring(0, 1) == 0) {
        number = number.replace(0, "");
    }

    alert(number);
    if(number.length != 11 || number.substring(2,3) != 9) {
        document.getElementById("number").setCustomValidity("Invalid");
        return false;
    }

}

function cpfvalidate(){
    var strCPF = document.getElementById("cpf").value.replace(/[^\d]+/g,'');
    var add;
    var rest;
    add = 0;

    if (strCPF == "00000000000"){
        document.getElementById("cpf").setCustomValidity("Invalid");
        return false;
    }

    for (i=1; i<=9; i++){
        add = add + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    } 

    rest = (add * 10) % 11;
   
    if ((rest == 10) || (rest == 11)){
        rest = 0;
    }

    if (rest != parseInt(strCPF.substring(9, 10))){
        document.getElementById("cpf").setCustomValidity("Invalid");
        return false;
    }
   
    add = 0;

    for (i = 1; i <= 10; i++){
        add = add + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }

    rest = (add * 10) % 11;
   
    if ((rest == 10) || (rest == 11)){
        rest = 0;
    }

    if (rest != parseInt(strCPF.substring(10, 11))){
        document.getElementById("cpf").setCustomValidity("Invalid");
        return false;
    }

    document.getElementById("cpf").setCustomValidity("");
    return true;
}


function cepvalidate(){
    var cep = document.getElementById("cep").value.replace(/[^\d]+/g,'');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=my_callback';

            document.body.appendChild(script);

        } 
        else {
            document.getElementById("cep").setCustomValidity("Invalid");
        }
    } 
    else {
        document.getElementById("cep").setCustomValidity("Invalid");
    }
}

function my_callback(content) {
    if (!("erro" in content)) {
        document.getElementById('rua').value=(content.logradouro);
        document.getElementById('bairro').value=(content.bairro);
        document.getElementById('cidade').value=(content.localidade);
        document.getElementById('uf').value=(content.uf);
    }
    else {
        alert("CEP não encontrado.");
    }
};
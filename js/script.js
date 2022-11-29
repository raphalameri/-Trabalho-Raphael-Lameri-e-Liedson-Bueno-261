
    function inicio(){
        window.location.href="./inicio.html";
    }

    function testar() {

        /*Campo obrigatório*/
        var name = document.getElementById("name").value;
        if (name == "") {

            document.getElementById('nameError').innerHTML = "<br> Esse campo é obrigatório </br> ";
            document.getElementsByClassName('underline')[0].style.backgroundColor = "red";
        }
        else {
            document.getElementById('nameError').innerHTML = "";
            document.getElementsByClassName('underline')[0].style.backgroundColor = "green";
        }



        var login = document.getElementById("login").value;
        if (login == "") {
            document.getElementById('loginError').innerHTML = "<br> Esse campo é obrigatório </br> ";
            document.getElementsByClassName('underline')[1].style.backgroundColor = "red";
        }
        else {
            document.getElementById('loginError').innerHTML = "";
            document.getElementsByClassName('underline')[1].style.backgroundColor = "green";
        }




        var email = document.getElementById("email").value;
        if (email == "") {
            document.getElementById('emailError').innerHTML = "<br> Esse campo é obrigatório </br> ";
            document.getElementsByClassName('underline')[2].style.backgroundColor = "red";
        }
        else {
            document.getElementById('emailError').innerHTML = "";
            document.getElementsByClassName('underline')[2].style.backgroundColor = "green";
        }



        var senha = document.getElementById("password").value;
        var senhaconfirm = document.getElementById("passworddd").value;
        if (senha == "") {
            document.getElementById('senhaError').innerHTML = "<br> Esse campo é obrigatório </br> ";
            document.getElementsByClassName('underline')[3].style.backgroundColor = "red";
        }
        else {
            document.getElementById('senhaError').innerHTML = "";
            document.getElementsByClassName('underline')[3].style.backgroundColor = "green";
        }
        if (senhaconfirm == "") {
            document.getElementById('senhaError').innerHTML = "<br> Esse campo é obrigatório </br> ";
            document.getElementsByClassName('underline')[4].style.backgroundColor = "red"
        }
        else {
            document.getElementById('senhaError').innerHTML = "";
            document.getElementsByClassName('underline')[4].style.backgroundColor = "green";
        }

        /*Numero letras*/
        if (name.length < 10) {
            document.getElementById('nameError').innerHTML = "O nome precisa de mais de 10 letras";
            document.getElementById('name').style.borderColor = "red";
        }


        if (login.length > 10) {
            document.getElementById('loginError').innerHTML = "O login precisa de menos de 10 letras";

        }
        else {
            document.getElementById('name').style.borderColor = "green"
        }

        /*senhas iguais*/
        if (senha != senhaconfirm) {
            document.getElementById('senhaError').innerHTML = "<br>Senhas diferentes</br>";
            document.getElementsByClassName('underline')[4].style.backgroundColor = "red";
        
        }
        else {
            document.getElementById('senhaError').innerHTML = "";
            document.getElementsByClassName('underline')[4].style.backgroundColor = "green";
        }
        

        /*@*/
        if (
            (email.value("@") == 1) &&
            (email.search(" ") == -1) &&
            (email.search(".") == 1)) {

            document.getElementById('email').style.borderColor = "green";
        }
        else {
            document.getElementById('emailError').innerHTML = "E-mail inválido";
            document.getElementById('email').style.borderColor = "red";
        }
    


    function adcionar(){
        const conteudo= document.getElementById('input').value;
        const novah3= document.createElement('h3');
        novah3.innerHTML= conteudo;
        const novobotao= document.createElement('button');
        novobotao.innerHTML= "Ouvi/Gostei";
        const novobotaoo= document.createElement('button');
        novobotaoo.innerHTML= "Não ouvi/Não gostei";
       
        
        novobotao.addEventListener('click', function(){
            novah3.innerHTML=conteudo+" &#9989";    
        
        })

        novobotaoo.addEventListener('click', function(){
            novah3.innerHTML=conteudo+"&#10060";    
        
        })
        
        document.body.appendChild(novah3);
        document.body.appendChild(novobotao);
        document.body.appendChild(novobotaoo);
        document.body.value="";
        
        
        /*window.alert(conteudo);*/
        
        }        
    }

function logar(){
    const login= document.getElementById('login').value;
    const senha= document.getElementById('senha').value;

    if(login== 'admin' && senha=='admin'){
        alert('sucesso');
        location.href= 'home.html';
    }else{
        alert('usuário ou senha incorretos')
    }

}
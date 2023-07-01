const login ={login:'admin',senha:123};

let i = 0;
do{

    if (login.login == 'admin' && login.senha == 123) {
        console.log('Bem vindo ao sistema!')
        i=1;
    } else {
        console.log('Login ou senha incorretos!')
        i=5;//Sem um método de redigitar login e senha não posso usar o zero -> loop infinito.
    };

    
}while(i<1);
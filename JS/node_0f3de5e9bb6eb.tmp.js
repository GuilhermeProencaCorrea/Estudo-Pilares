const login ={login:'admin',senha:1235};
let i = 0;
do{

    if (login.login == 'admin' && login.senha == 123) {
        console.log('Bem vindo ao sistema!')
        i=1;
    } else {
        console.log('Login ou senha incorretos!')
        i=0;
    };

    
}while(i<1);
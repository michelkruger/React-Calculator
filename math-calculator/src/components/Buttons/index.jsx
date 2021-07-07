import './index.css';

export const Button = ({children, name, className, valueScreen, setValueScreen,...props}) => {

    function handleName({target}) {

        // Permite passar apenas o sinal negativo como operador inicial
        if(valueScreen === "0" & target.name === "-")
            setValueScreen(target.name);

        // verificação para não ser possivel iniciar com um sinal
        if(valueScreen === "0" & isNaN(target.name) === true)
            return false;

        // Caso já tenha um operador, ele o substitui pelo selecinado.
        if(isNaN(valueScreen) === true & isNaN(target.name) === true)
            setValueScreen( valueScreen.replace(/.$/, target.name));

        // Não permite dois sinais em sequência
        if(isNaN(valueScreen.substr(-1)) === true & isNaN(target.name) === true)
            return false;

        //Não permite concatenar com zero na primeira posição ou erro.
        if(valueScreen === "0" || valueScreen === "error") {
            setValueScreen(target.name);
        } else {
            setValueScreen(valueScreen.concat(target.name));
        }
    }

    return (
        <button onClick={handleName} name={name} className={`button ${className}`} {...props}>
            {children}
        </button>
    )
}

export const ClearButton = ({children, name, className, setValueScreen,...props}) => {

    //Limpa a Tela
    function clearScreen() {
        setValueScreen("0");
    }
    
    return (
        <button onClick={clearScreen} name={name} className={`button ${className}`} {...props}>
            {children}
        </button>
    )
}

export const BackSpace = ({children, name, className, valueScreen, setValueScreen,...props}) => {

    function backSpace() {
        // Não permite apagar caracter se tiver apenas o zero inicial
        if(valueScreen === "0" & valueScreen.length === 1)
            return false 

        //Caso for erro ou somente um caracter e for chamada a função de apagar colocar zero no lugar.
        if(valueScreen.length === 1 || valueScreen === "error"){
            setValueScreen("0")
            return false
        }

        //Apaga o ultimo caracter.
        setValueScreen(valueScreen.slice (0, -1));
    }
    
    return (
        <button onClick={backSpace} name={name} className={`button backSpace ${className}`} {...props}>
            {children}
        </button>
    )
}

export const Calculator = ({children, name, className, valueScreen, setValueScreen,...props}) => {

    
    function calculation() {
        try { // caso seja um sucesso, o metodo eval realiza o calculo matemático.
            setValueScreen(eval(valueScreen).toString());
        }
        catch(error){ // caso de erro, é enviada uma notificação ao usuário
            setValueScreen("error")
            console.log(error)
        }
    }

    return (
        <button onClick={calculation} name={name} className={`button equal ${className}`} {...props}>
            {children}
        </button>
    )
}


function mandarTela(value){
    const tela = document.getElementById('tela');
    tela.value += value;
}

function limparTela(){
    document.getElementById('tela').value = '';
}

function calcular(){
    const tela = document.getElementById('tela');
    const expressao = tela.value;

    try{
        let resultado = parseExp(expressao);
        tela.value = resultado;
    }catch(e){
        tela.value = 'Erro';
    }
}

function parseExp(expressao){
    
    let tokens = expressao.split(/([+\-*/])/).filter(Boolean); 

    let resultadoTemp = [];

    let current = parseFloat(tokens.shift());
    
    while (tokens.length > 0)
    {
        let op = tokens.shift();
        let next = parseFloat(tokens.shift());

        if(op === '*'){current *= next}

        else if(op === '/'){current /= next}

        else{
            resultadoTemp.push(current);
            resultadoTemp.push(op);
            current = next;
        }
    }

    resultadoTemp.push(current);
    console.log('Resultado temporário:', resultadoTemp);

    let resultado = resultadoTemp[0];
    for(let i = 1; i < resultadoTemp.length; i += 2){
        let op = resultadoTemp[i];
        let num = resultadoTemp[i+1];

        console.log('Operador e número na adição/subtração:', op, num);

        if(op === '+'){
            resultado += num;
        }
        else if(op === '-'){
            resultado -= num;
        }
       
    }
    console.log('Resultado:',resultado);
    return resultado;

      
}
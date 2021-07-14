function dividir(numeroA,numeroB) {
    const resultado = numeroA / numeroB;
    if(numeroA == 0 && numeroB == 0){
        return "no se puede dividir por cero"

    }else{
        return resultado;

    }
    
}

module.exports = dividir;
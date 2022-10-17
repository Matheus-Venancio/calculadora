function calcular(tipo, valor){
    if(tipo ==='acao'){

      if(valor === 'c'){
        //limpar o visor
        document.getElementById('resultado').value = ''
      }

      //Calculando
      if(valor === '+' || valor ==='-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }

      //imprimindo resultado
      if(valor === '='){
       var valor_campo = eval(document.getElementById('resultado').value)
       
       document.getElementById('resultado').value = valor_campo
      }

    }else{
      if(tipo === 'valor'){
        //colocando valor no visor

        document.getElementById('resultado').value += valor
      }
    }
  }
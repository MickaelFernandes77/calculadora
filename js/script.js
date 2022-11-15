function calcular(tipo, valor) {
        // separação por ação, aqui é onde ocorre o tratamento para as operações clicadas
        if (tipo === 'acao') {
            //if encadeado
            if (valor === 'c') {
                //limpar o visor
                // se o valor for igual a c(clear) o input de resultado recebe um valor vazio.
                document.getElementById('resultado').value = ''
            }

            // se o valor for igual a uma dessas operações matemáticas, acrescenta o operador no input
            if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
                document.getElementById('resultado').value += valor;
            }

            if (valor === '=') {
                // a função eval pega a string e a converte para uma operação JS. No caso a operação que veio passada por uma string será convertida para uma operação javascript matemática.
                var valor_campo = eval(document.getElementById('resultado').value);
                // Após o tratamento da string o input passa a ter o valor da var valor_campo, que possui o resultado da operação matemática. 
                document.getElementById('resultado').value = valor_campo;
                }
            }
            // separação por valor, aqui é onde ocorre o tratamento para os números clicados
            else if (tipo === 'valor') {
                // se o tipo do botão clicado for igual a valor(numero), ele envia o resultado para o input, que é chamado pelo id e faz a concatenação para ter o resultado final.
                document.getElementById('resultado').value += valor;
            }
        }

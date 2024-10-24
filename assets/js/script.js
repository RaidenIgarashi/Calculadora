

function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        inicia(){

            this.clique_botoes()
        },
        clique_botoes(){
            document.addEventListener('click', e => {
                const el = e.target
                
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.btnClear()
                }

                if(el.classList.contains("btn-erase")){
                    this.btnDel()
                }

                if(el.classList.contains('btn-eq')){
                    this.btnEq()
                }

            })
        },
        btnParaDisplay(value){
            this.display.value +=value
        },
        btnClear(){
            this.display.value = ''
        },
        btnDel(){
            this.display.value = this.display.value.slice(0, -1)
        },

        btnEq(){
            let conta = this.display.value 

            try{
                conta = eval(conta)
                if (!conta){
                    alert('Conta invalida')
                    return
                }
                this.display.value = conta
            } catch(e){
                alert('Conta invalida')
                return
            }
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()

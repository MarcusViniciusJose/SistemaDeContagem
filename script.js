function contar(){
    let inicio = document.getElementById("ini")
    let final = document.getElementById("fim")
    let passo = document.getElementById("pass")
    let res = document.getElementById("res")

    if(inicio.value.length == 0 || inicio.value.length == 0 || inicio.value.length == 0 ){
        window.alert("[ERROR] Faltam dados seu animal de teta")
    }else{
        res.innerHTML = "contando.."
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert("IMPOSSIVEL FAZER NÉ ANIMAL")
            p=1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} `
            }

        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
    
    
}
function verificarCadastrar() {

    let res = document.getElementById('resp')
    let nom = document.getElementById('nome')
    let cpf =document.getElementById('cpf')
    let nac =document.getElementById('nascimento')
    let hor =document.getElementById('hora')
    let ent =document.getElementById('entrada')

    let nome = nom.value.trim(); // Retira o espaço em branco
    let insNom = nome.length > 0 

    let inCpf = cpf.value.replace(/[.,-\s]/g, '') // retira a pontuação que tiver
    let insCpf = inCpf.length === 11

    let nascimento = nac.value.replace(/[.,-\s]/g, '')
    let insNac = nascimento.length === 8 

    let hora = hor.value.replace(/[.,;:\s-]/g, '') // adicionei : ; na pontuação a ser retirada.
    let insHor = hora.length === 4

    let entrada = ent.value.replace(/[.,-\s]/g, '')
    let insEnt = entrada.length === 8 


    if (insNom && insCpf && insCpf && insNac && insHor && insEnt) { // verifica se todos são true
        res.innerHTML = '<h3>Cadastro Realizado.✔️</h3>'
        nom.value = '' 
        cpf.value = ''
        nac.value = ''
        hor.value = ''
        ent.value = '' //deixa os campos de preenchimento vazio a pós o cadastro realizado.
    } else {
        res.innerHTML = '<h3>[Erro] - Verifique os dados preenchidos.❌</h3>'
    }
}
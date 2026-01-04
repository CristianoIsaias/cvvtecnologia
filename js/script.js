const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const assunto = document.querySelector('#assunto')
const formulario = document.querySelector('#formulario')    

// Efeito de escrita de máquina de escrever no primeiro anúncio do site.
const anuncio1 = document.getElementById('anuncio1').textContent;
let i=0;
let texto = "";
// Primeiro anuncio do site
function mostrarAnuncio(){
        if(i < anuncio1.length){
            texto += anuncio1.charAt(i);
            document.getElementById('anuncio1').textContent = texto;    
            i++;

            setTimeout(mostrarAnuncio, 100);}

}
mostrarAnuncio();

// Validando o formulário
formulario.addEventListener('submit', (e) => {
    if(!nome.value || !email.value || !telefone.value || !assunto.value){

nome.addEventListener('input', () => {
    nome.value = nome.value.replace(/[^a-zA-Z\s]/g, '')
})
email.addEventListener('input', () => {
    email.value = email.value.replace(/[^a-zA-Z0-9@._-]/g, '')
})

telefone.addEventListener('input', () => {
    telefone.value = telefone.value.replace(/[^0-9]/g, '')
}) 

assunto.addEventListener('input', () => {
    assunto.value = assunto.value.replace(/[^a-zA-Z0-9\s.,!?]/g, '')
})

    }else{
        alert('Formulário enviado com sucesso!')
    }
    
    alert('Por favor preencha todos campos do Formulário!')

    e.preventDefault()
    formulario.reset()
})  

// Efeito para carrossel de scroll
const myObserver = new IntersectionObserver((entries)=>{
   entries.forEach( (entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    }else{
        entry.target.classList.remove('show')
    }
   })
})

const efeito = document.querySelectorAll('.hidden')

efeito.forEach((element) => myObserver.observe(element))
    
//   Efeito do botão enviar no formulário
function btnColor(){
    const btn = document.querySelector('#btn-enviar')
    btn.style.backgroundColor =  '#0177FB' 
}

function btnColorOut(){
    const btn = document.querySelector('#btn-enviar')
    btn.style.backgroundColor = '#265180'
}
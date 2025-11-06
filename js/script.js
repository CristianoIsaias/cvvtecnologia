

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
    


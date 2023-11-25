const menu = document.querySelector('.bi-list')
const links = document.querySelector('.cabecalho_linkgeral')
const categorias = document.querySelector('.categorias_abas')
const categoriaAberta = document.querySelector('.categorias_lista')
const categoriaSeta = document.querySelector('.bi-caret-down-fill')
const emailBtn = document.querySelector('.bi-box-arrow-up-right')
const email = document.querySelector('.rodape_inp')

const viewMore = document.querySelector('.more_link')
const containerPart2 = document.querySelector('.part2')

const linkagem = document.querySelectorAll('.linkagem')

//-------menu-hamburguer

menu.addEventListener('click', ()=> {
    if (links.style.display == "block") {
        links.style.display = "none"
        menu.classList.remove('expandir')
    } else {
        links.style.display = "block"
        menu.classList.add('expandir')
    }
})

//-------container-principal

categorias.addEventListener('click', ()=> {
    if (categoriaAberta.style.display == "flex") {
        categoriaAberta.style.display = "none"
        categoriaSeta.classList.remove('open')
    } else {
        categoriaAberta.style.display = "flex"
        categoriaSeta.classList.add('open')
    }
})

//--------ver-mais----

// viewMore.addEventListener('click', ()=> {
//     if (containerPart2.style.display == 'flex') {
//         containerPart2.style.display = "none"
//     } else {
//         containerPart2.style.display = "flex"
//     }
// })

// linkagem.addEventListenerAll('click', ()=>{
//     containerPart2.style.display = "flex"
// })

//--------email-limpar

emailBtn.addEventListener('click', ()=> {
    email.value = " "
})


//--------cabecalho-scroll----

window.addEventListener('scroll', function() {
    let header = this.document.querySelector('.cabecalho')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})
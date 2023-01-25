const botaoTrailer = document.querySelector(".botao"); // pega o elemento botaoTrailer no JS pelo nome da classe
const modal = document.querySelector(".modal"); 
const fechaModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video"); // pega o elemento pelo nome do atributo ID
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto"); // Toggle: se tiver, remove; se não tiver, coloca
}

//identificar quando o usuário clicar no botão e abrir a modal
botaoTrailer.addEventListener("click", () =>{
    video.setAttribute("src",linkVideo);
    alternarModal();
});


// Identificar o elemento X e fechar a modal
fechaModal.addEventListener("click",() => {
    alternarModal();
    video.setAttribute("src","");
});

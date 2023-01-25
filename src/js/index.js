const botaoTrailer = document.querySelector(".botao");
const modal = document.querySelector(".modal"); // Passo 3 - pegar o elemento modal no JS pelo nome da classe
const fechaModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video"); // pega o elemento pelo nome do ID
const linkVideo = video.src;

console.log(linkVideo);


function alternarModal(){
    modal.classList.toggle("aberto"); 
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




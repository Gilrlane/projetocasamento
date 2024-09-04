const photos = [
    { src: 'foto1.jpg', alt: 'Foto 1', text: '“Nosso amor é como o vinho, melhora a cada ano que passa.”' },
    { src: 'foto2.jpg', alt: 'Foto 2', text: '“Cada momento ao seu lado é um tesouro que guardo no coração.”' },
    { src: 'foto3.jpg', alt: 'Foto 3', text: '“Você é a razão pela qual acredito em amor verdadeiro.”' },
    { src: 'foto4.jpg', alt: 'Foto 4', text: '“Juntos, construímos uma história que nenhuma palavra pode descrever completamente.”' },
    { src: 'foto5.jpg', alt: 'Foto 5', text: '“O amor que compartilhamos me dá forças para enfrentar qualquer desafio.”' },
    { src: 'foto6.jpg', alt: 'Foto 6', text: '“Cada sorriso seu é uma faísca que acende a chama do meu coração.”' },
    { src: 'foto7.jpg', alt: 'Foto 7', text: '“Com você, cada dia é uma nova aventura que eu não trocaria por nada.”' },
    { src: 'foto8.jpg', alt: 'Foto 8', text: '“Os momentos mais simples ao seu lado são os mais preciosos para mim.”' },
    { src: 'foto9.jpg', alt: 'Foto 9', text: '“Nos seus braços, encontrei o lar que sempre procurei.”' },
    { src: 'foto10.jpg', alt: 'Foto 10', text: '“Você é meu hoje, meu amanhã e meu para sempre.”' },
    { src: 'foto11.jpg', alt: 'Foto 11', text: '“O destino nos uniu, e nosso amor selou essa união para sempre.”' },
    { src: 'foto12.jpg', alt: 'Foto 12', text: '“A vida é mais doce quando compartilhada com você.”' },
    { src: 'foto13.jpg', alt: 'Foto 13', text: '“Seu amor é o presente mais precioso que já recebi.”' },
    { src: 'foto14.jpg', alt: 'Foto 14', text: '“Juntos, somos mais fortes, mais felizes e mais completos.”' },
    { src: 'foto15.jpg', alt: 'Foto 15', text: '“O amor verdadeiro é aquele que cresce com o tempo, e o nosso só cresce.”' },
    { src: 'foto16.jpg', alt: 'Foto 16', text: '“Você é o capítulo mais bonito da minha vida.”' },
    { src: 'foto17.jpg', alt: 'Foto 17', text: '“Nosso amor é a melodia que embala os meus dias.”' },
    { src: 'foto18.jpg', alt: 'Foto 18', text: '“A cada ano que passa, meu amor por você se renova e floresce.”' },
    { src: 'foto19.jpg', alt: 'Foto 19', text: '“Você é a luz que ilumina os meus dias mais sombrios.”' },
    { src: 'foto20.jpg', alt: 'Foto 20', text: '“Ao seu lado, encontrei a felicidade que sempre sonhei.”' },
    { src: 'foto21.jpg', alt: 'Foto 21', text: '“Meu coração bate mais forte quando estou ao seu lado.”' },
    { src: 'foto22.jpg', alt: 'Foto 22', text: '“Você é o sonho que se tornou realidade na minha vida.”' },
    { src: 'foto23.jpg', alt: 'Foto 23', text: '“O nosso amor é a melhor história que já vivi.”' },
    { src: 'foto24.jpg', alt: 'Foto 24', text: '“Obrigado por ser meu porto seguro e meu eterno companheiro.”' },
    { src: 'foto25.jpg', alt: 'Foto 25', text: '“Cada beijo seu é uma promessa de amor eterno.”' },
    { src: 'foto26.jpg', alt: 'Foto 26', text: '“A vida ao seu lado é mais doce, mais rica e mais bela.”' },
    { src: 'foto27.jpg', alt: 'Foto 27', text: '“Com você, aprendi o verdadeiro significado do amor incondicional.”' },
    { src: 'foto28.jpg', alt: 'Foto 28', text: '“Nosso amor é o que dá sentido à minha vida, todos os dias.”' },
];

let currentPage = 1;
const photosPerPage = 1;
const totalPages = Math.ceil(photos.length / photosPerPage);

function showPage(page) {
    const start = (page - 1) * photosPerPage;
    const end = start + photosPerPage;
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = '';

    for (let i = start; i < end && i < photos.length; i++) {
        const photo = photos[i];
        photoContainer.innerHTML += `
            <div class="photo-item">
                <a href="${photo.src}" target="_blank"><img src="${photo.src}" alt="${photo.alt}" data-keywords="${photo.alt}"></a>
                <p class="photo-text">${photo.text}</p>
            </div>
        `;
    }

    document.getElementById('page-number').textContent = `Página ${page} de ${totalPages}`;
}

function changePage(direction) {
    if (direction === 'next') {
        if (currentPage < totalPages) {
            currentPage++;
        }
    } else if (direction === 'prev') {
        if (currentPage > 1) {
            currentPage--;
        }
    }
    showPage(currentPage);
}
document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
    document.getElementById('prev-button').addEventListener('click', () => changePage('prev'));
    document.getElementById('next-button').addEventListener('click', () => changePage('next'));
});

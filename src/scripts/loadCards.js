// Dados dos cartões
const cardsData = [
  { id: 1, title: "Boas festas", image: "./src/assets/playlist/1.jpeg" },
  { id: 2, title: "Feitos para você", image: "./src/assets/playlist/2.png" },
  { id: 3, title: "Lançamentos", image: "./src/assets/playlist/3.jpeg" },
  { id: 4, title: "Creators", image: "./src/assets/playlist/4.jpeg" },
  { id: 5, title: "Para treinar", image: "./src/assets/playlist/5.jpeg" },
  { id: 6, title: "Podcasts", image: "./src/assets/playlist/6.jpeg" },
  { id: 7, title: "Sertanejo", image: "./src/assets/playlist/7.jpeg" },
  { id: 8, title: "Samba e pagode", image: "./src/assets/playlist/8.jpeg" },
  { id: 9, title: "Funk", image: "./src/assets/playlist/9.jpeg" },
  { id: 10, title: "MPB", image: "./src/assets/playlist/10.jpeg" },
  { id: 11, title: "Rock", image: "./src/assets/playlist/11.jpeg" },
  { id: 12, title: "Hip Hop", image: "./src/assets/playlist/12.jpeg" },
  { id: 13, title: "Indie", image: "./src/assets/playlist/13.jpeg" },
  { id: 14, title: "Relax", image: "./src/assets/playlist/14.jpeg" },
  { id: 15, title: "Música Latina", image: "./src/assets/playlist/15.jpeg" }
];


// Função para criar um cartão
function createCard(cardData) {
  // Cria os elementos
  const link = document.createElement('a');
  const cardDiv = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  // Define as propriedades e classes
  link.href = ''; // Defina o URL conforme necessário
  link.className = 'cards';

  cardDiv.className = `cards card${cardData.id}`;
  img.src = cardData.image;
  img.alt = ''; // Defina o texto alternativo conforme necessário
  span.textContent = cardData.title;

  // Monta a estrutura
  cardDiv.appendChild(img);
  cardDiv.appendChild(span);
  link.appendChild(cardDiv);

  return link;
}

// Função para adicionar todos os cartões ao DOM
function addCardsToDOM() {
  const container = document.getElementById('cards-container'); // Substitua pelo ID do seu container
  cardsData.forEach(cardData => {
      const cardElement = createCard(cardData);
      container.appendChild(cardElement);
  });
}

// Chama a função para adicionar os cartões ao carregar a página
document.addEventListener('DOMContentLoaded', addCardsToDOM);
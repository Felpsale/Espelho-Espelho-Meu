# Bookstagram — Estante Infinita (React + Vite)

Versão personalizada do projeto **Instagrão: Espelho, Espelho meu**, temática de **livros e personagens fictícios** (*The Stormlight Archive*, *Lord of the Mysteries*, *Tokyo Ghoul*, *Skyward* e *Percy Jackson*), com comentários no código para estudo de React.

A proposta do feed é imaginar o que personagens que eu admiro postariam se tivessem uma rede social literária: cada publicação mostra aquilo que o personagem mais deseja viver ou enxergar dentro do seu próprio universo.

## 🔗 Repositório e Demonstração

- **GitHub:** `https://github.com/Felpsale/espelho-espelho-meu` *(ajuste o final da URL se usar outro nome de repositório)*
- **Capturas de tela:** *(adicione aqui os prints da tela inicial e dos stories antes de entregar)*

## 🚀 Como executar

```bash
npm install
npm run dev
```

## 📚 Personagens e publicações (`src/data/posts.json`)

1. **Kaladin (`@Kaladin_Stormblessed`)** — *The Stormlight Archive: O Caminho dos Reis* (Brandon Sanderson)
2. **Klein Moretti (`@klein_moretti`)** — *Lord of the Mysteries* (Cuttlefish That Loves Diving)
3. **Kaneki Ken (`@kaneki_anteiku`)** — *Tokyo Ghoul — Vol. 1* (Sui Ishida)
4. **Spensa Nightshade (`@spensa_nightshade`)** — *Skyward: Conquiste as Estrelas* (Brandon Sanderson)
5. **Percy Jackson (`@percy_jackson`)** — *Percy Jackson e o Ladrão de Raios* (Rick Riordan)

## ✨ O que foi implementado

1. **Nova Identidade Visual (`src/App.css`, `src/index.css`, `src/components/Header.jsx`):**
   - Paleta editorial inspirada em páginas de livros (`#f5f3ef`, âmbar `#b45309` e azul `#0369a1`), logo **Bookstagram** com ícone de livro aberto, favicon próprio e barra de busca em tempo real por obra, autor ou personagem.
2. **Imagens locais e proporção ajustada (`public/images/` e `src/data/posts.json`):**
   - Avatares e capas armazenados localmente em `public/images/` com enquadramento `object-position: top center` nos retratos e proporção `4 / 5` nas capas dos livros (além de fallback SVG offline caso alguma imagem falhe).
3. **Curtidas Interativas (`src/components/Post.jsx`):**
   - Uso do Hook `useState` para alternar o ícone entre contorno (`FiHeart`) e preenchido vermelho (`FaHeart`), atualizar a contagem de curtidas e permitir curtida com duplo clique na capa.
4. **Área de Comentários (`src/components/Post.jsx`):**
   - Renderização da lista com `.map()` e formulário controlado para publicar novos comentários respeitando a imutabilidade do estado (`[...comments, newComment]`).
5. **Barra de Stories e Estante de Salvos (`src/components/Stories.jsx` e `src/App.jsx`):**
   - Lista horizontal de stories no topo do feed com visualização interativa da citação de cada leitor e filtro para exibir apenas os posts salvos.

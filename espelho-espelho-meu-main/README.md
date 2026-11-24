# Bookstagram — Estante Infinita (React + Vite)

Versão personalizada do projeto **Instagrão: Espelho, Espelho meu**, temática de **livros e personagens fictícios** (*The Stormlight Archive*, *Lord of the Mysteries*, *Tokyo Ghoul*, *Skyward* e *Percy Jackson*), com comentários detalhados no código para estudo de React.

## Como executar

```bash
npm install
npm run dev
```

## O que foi implementado (Desafios do README)

1. **Nova Identidade Visual (`src/App.css`, `src/index.css`, `src/components/Header.jsx`):**
   - Paleta editorial inspirada em livrarias (`#f5f3ef` e acentos em âmbar `#b45309` e azul `#0369a1`), logo **Bookstagram** com ícone de livro e barra de busca em tempo real por obra, autor ou personagem.
2. **Feed de Personagens Literários (`src/data/posts.json`):**
   - Cada post representa um personagem admirado postando aquilo que mais deseja ver/viver em seu universo, usando URLs placeholder (`placehold.co`) e fallback SVG offline automático caso esteja sem conexão.
3. **Curtidas Interativas (`src/components/Post.jsx`):**
   - Uso do Hook `useState` para alternar o ícone entre contorno (`FiHeart`) e preenchido vermelho (`FaHeart`), atualizar a contagem de curtidas e permitir curtida com duplo clique na imagem.
4. **Área de Comentários (`src/components/Post.jsx`):**
   - Renderização da lista com `.map()` e adição de novos comentários respeitando a imutabilidade do estado (`[...comments, newComment]`).
5. **Barra de Stories e Estante de Salvos (`src/components/Stories.jsx` e `src/App.jsx`):**
   - Lista horizontal de stories no topo do feed com visualização interativa da citação de cada leitor e filtro de posts salvos.

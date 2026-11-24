# Bookstagram — Estante Infinita

Projeto acadêmico de front-end desenvolvido em **React + Vite** a partir do exercício *Instagrão: Espelho, Espelho meu*. A ideia foi transformar o feed tradicional do Instagram em uma rede social literária onde personagens de livros e mangás que admiro compartilham aquilo que mais desejam viver ou enxergar em seus próprios universos.

## Personagens e obras no feed

- **Kaladin (`@Kaladin_Stormblessed`)** — *The Stormlight Archive: O Caminho dos Reis* (Brandon Sanderson)
- **Klein Moretti (`@klein_moretti`)** — *Lord of the Mysteries* (Cuttlefish That Loves Diving)
- **Kaneki Ken (`@kaneki_anteiku`)** — *Tokyo Ghoul — Vol. 1* (Sui Ishida)
- **Spensa Nightshade (`@spensa_nightshade`)** — *Skyward: Conquiste as Estrelas* (Brandon Sanderson)
- **Percy Jackson (`@percy_jackson`)** — *Percy Jackson e o Ladrão de Raios* (Rick Riordan)

## Funcionalidades

- **Feed dinâmico:** publicações carregadas a partir de `src/data/posts.json` e renderizadas com `.map()`, utilizando imagens locais e fallback automático caso alguma capa falhe.
- **Curtidas interativas:** alternância de ícone e atualização da contagem em tempo real pelo botão ou com duplo clique na imagem.
- **Comentários:** listagem dos comentários iniciais e formulário controlado para publicar novos comentários sem recarregar a página.
- **Stories interativos:** barra horizontal no topo onde clicar no avatar exibe uma citação rápida da leitura do personagem.
- **Busca e estante de salvos:** pesquisa em tempo real por livro, autor, personagem ou legenda, além de filtro para exibir apenas os posts salvos.

## Tecnologias utilizadas

- **React** (componentes funcionais, `props`, `useState` e renderização condicional)
- **Vite**
- **CSS3** (layout responsivo com barra de navegação dedicada para telas menores)
- **React Icons** (`react-icons`)

## Como executar

```bash
# Instale as dependências do projeto
npm install

# Inicie o servidor local de desenvolvimento
npm run dev

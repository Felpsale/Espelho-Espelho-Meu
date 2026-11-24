import { useState } from 'react'
import { FiBookmark, FiHeart, FiHome, FiSearch } from 'react-icons/fi'
// Importamos os componentes filhos que montam nossa página
import Header from './components/Header'
import Stories from './components/Stories'
import Post from './components/Post'
// Importamos os dados estáticos dos posts direto do JSON
import posts from './data/posts.json'
import './App.css'

// COMPONENTE PRINCIPAL (App):
// Ele coordena os estados compartilhados entre o Header e o Feed (busca e posts salvos).
// Em React, quando dois componentes precisam compartilhar um dado, elevamos o estado
// ("Lifting State Up") para o componente pai em comum!
function App() {
  // Estado para o texto da barra de pesquisa
  const [searchTerm, setSearchTerm] = useState('')
  // Estado que guarda um array com os IDs dos posts salvos na estante (ex: [1, 3])
  const [savedIds, setSavedIds] = useState([])
  // Estado booleano que indica se o usuário ativou o filtro "Ver apenas salvos"
  const [onlySaved, setOnlySaved] = useState(false)

  // Adiciona ou remove o ID de um post da lista de salvos
  function handleToggleSave(postId) {
    if (savedIds.includes(postId)) {
      // .filter() cria um novo array removendo o ID clicado (respeitando a imutabilidade)
      setSavedIds(savedIds.filter((id) => id !== postId))
    } else {
      // Cria um novo array mantendo os antigos e adicionando o novo ID
      setSavedIds([...savedIds, postId])
    }
  }

  // ESTADO DERIVADO (Derived State):
  // Em vez de criar outro useState para guardar os posts filtrados, calculamos
  // o resultado diretamente durante a renderização usando .filter()!
  const filteredPosts = posts.filter((post) => {
    const query = searchTerm.toLowerCase()
    const matchesSearch =
      post.bookTitle.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.user.toLowerCase().includes(query) ||
      post.caption.toLowerCase().includes(query)

    const matchesSaved = onlySaved ? savedIds.includes(post.id) : true

    return matchesSearch && matchesSaved
  })

  return (
    <div className="app">
      {/* Passamos estados e funções como PROPS para o Header */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onlySaved={onlySaved}
        onToggleSaved={() => setOnlySaved(!onlySaved)}
      />

      <main className="feed" aria-label="Feed de publicações literárias">
        {/* Barra de Stories no topo do feed (Desafio 5 do README) */}
        <Stories posts={posts} />

        {/* Se houver posts após o filtro, renderizamos cada um; senão, mostramos aviso */}
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              isSaved={savedIds.includes(post.id)}
              onToggleSave={handleToggleSave}
            />
          ))
        ) : (
          <div className="feed__empty">
            <p>
              {onlySaved
                ? 'Você ainda não salvou nenhum livro na sua estante.'
                : `Nenhuma obra ou personagem encontrado para "${searchTerm}".`}
            </p>
            <button
              type="button"
              className="feed__reset-button"
              onClick={() => {
                setSearchTerm('')
                setOnlySaved(false)
              }}
            >
              Mostrar todo o feed
            </button>
          </div>
        )}
      </main>

      {/* Navegação inferior para telas pequenas (responsividade mobile) */}
      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button
          className={`icon-button ${!onlySaved ? 'icon-button--active' : ''}`}
          type="button"
          aria-label="Início"
          onClick={() => {
            setSearchTerm('')
            setOnlySaved(false)
          }}
        >
          <FiHome />
        </button>
        <button
          className="icon-button"
          type="button"
          aria-label="Pesquisar"
          onClick={() => document.querySelector('.header__search input')?.focus()}
        >
          <FiSearch />
        </button>
        <button
          className={`icon-button ${onlySaved ? 'icon-button--active' : ''}`}
          type="button"
          aria-label="Salvos"
          onClick={() => setOnlySaved(!onlySaved)}
        >
          <FiBookmark />
        </button>
        <button className="icon-button" type="button" aria-label="Atividades">
          <FiHeart />
        </button>
      </nav>
    </div>
  )
}

export default App

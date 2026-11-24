// Importamos ícones vetoriais prontos da biblioteca "react-icons" (pacote Feather Icons "fi").
// No React, cada ícone importado funciona exatamente como um componente (<FiBookOpen />, <FiSearch />, etc.).
import { FiBookOpen, FiBookmark, FiHeart, FiHome, FiSearch } from 'react-icons/fi'

// DEFINIÇÃO DO COMPONENTE HEADER:
// Em React, componentes são funções JavaScript que começam com letra MAIÚSCULA
// e retornam JSX (uma sintaxe parecida com HTML escrita dentro do JavaScript).
//
// PROPS (Propriedades):
// { searchTerm, onSearchChange, onlySaved, onToggleSaved } são dados e funções
// enviados pelo componente pai (App.jsx) para este componente filho.
function Header({ searchTerm, onSearchChange, onlySaved, onToggleSaved }) {
  return (
    // Usamos "className" em vez de "class", porque "class" já é uma palavra reservada do JavaScript.
    <header className="header">
      {/* Logo do nosso Instagram literário */}
      <div className="header__brand">
        <FiBookOpen className="header__brand-icon" />
        <span className="header__logo">Bookstagram</span>
      </div>

      {/* INPUT CONTROLADO (Controlled Component):
          1. value={searchTerm} -> O texto visível na caixa é controlado pelo estado do React.
          2. onChange={...} -> A cada tecla digitada, chamamos a função recebida via prop,
             enviando o novo texto digitado (event.target.value). */}
      <div className="header__search">
        <FiSearch className="header__search-icon" />
        <input
          type="text"
          placeholder="Buscar livro, autor ou personagem..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Buscar no feed"
        />
      </div>

      {/* Barra de ações superior */}
      <nav className="header__actions" aria-label="Navegação principal">
        <button
          className={`icon-button ${!onlySaved ? 'icon-button--active' : ''}`}
          type="button"
          onClick={() => {
            if (onlySaved) onToggleSaved()
          }}
          title="Ver todos os posts"
          aria-label="Início"
        >
          <FiHome />
        </button>

        {/* Botão que filtra apenas os livros marcados como salvos */}
        <button
          className={`icon-button ${onlySaved ? 'icon-button--active' : ''}`}
          type="button"
          onClick={onToggleSaved}
          title={onlySaved ? 'Mostrando salvos (clique para ver todos)' : 'Ver posts salvos'}
          aria-label="Salvos"
        >
          <FiBookmark />
        </button>

        <button className="icon-button" type="button" title="Notificações" aria-label="Atividades">
          <FiHeart />
        </button>
      </nav>
    </header>
  )
}

// Exportamos o componente para que o App.jsx possa importá-lo e usá-lo como <Header />
export default Header

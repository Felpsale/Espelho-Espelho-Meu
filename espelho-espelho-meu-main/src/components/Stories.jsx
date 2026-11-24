import { useState } from 'react'
function Stories({ posts }) {
  // Estado que guarda qual story está aberto no momento (null = nenhum aberto)
  const [activeStory, setActiveStory] = useState(null)

  return (
    <section className="stories" aria-label="Stories dos leitores">
      <div className="stories__list">
        {/* .map() percorre cada post do JSON e cria um botão circular de Story */}
        {posts.map((post) => {
          const isSelected = activeStory && activeStory.id === post.id

          return (
            <button
              key={post.id}
              type="button"
              className={`story-item ${isSelected ? 'story-item--selected' : ''}`}
              onClick={() => setActiveStory(isSelected ? null : post)}
            >
              <div className="story-item__ring">
                <img
                  src={post.avatar}
                  alt={`Story de ${post.user}`}
                  className="story-item__avatar"
                />
              </div>
              <span className="story-item__user">{post.user}</span>
            </button>
          )
        })}
      </div>

      {/* RENDERIZAÇÃO CONDICIONAL:
          O bloco abaixo só aparece na tela se "activeStory" não for null */}
      {activeStory && (
        <div className="story-viewer">
          <div className="story-viewer__header">
            <strong>@{activeStory.user}</strong>
            <span>Lendo: {activeStory.bookTitle}</span>
            <button
              type="button"
              className="story-viewer__close"
              onClick={() => setActiveStory(null)}
              aria-label="Fechar story"
            >
              ✕
            </button>
          </div>
          <p className="story-viewer__text">“{activeStory.caption}”</p>
        </div>
      )}
    </section>
  )
}

export default Stories

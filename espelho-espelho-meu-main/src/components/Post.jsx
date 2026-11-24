import { useState } from 'react'


import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

function Post({ post, isSaved, onToggleSave }) {

  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [comments, setComments] = useState(post.comments || [])
  const [commentText, setCommentText] = useState('')
  const [showCommentBox, setShowCommentBox] = useState(true)

  function handleToggleLike() {
    if (liked) {
      setLiked(false)
      setLikesCount(likesCount - 1)
    } else {
      setLiked(true)
      setLikesCount(likesCount + 1)
    }
  }


  function handleAddComment(event) {
    event.preventDefault()

    if (commentText.trim() === '') return

    const newComment = {
      id: Date.now(), 
      user: 'leitor_visitante',
      text: commentText.trim(),
    }

    setComments([...comments, newComment])
    setCommentText('')
  }
  function handleImageError(event) {
    event.currentTarget.src =
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect fill="%231e293b" width="600" height="600"/><text fill="%23e2e8f0" font-family="sans-serif" font-size="24" x="50%" y="48%" text-anchor="middle">Capa do Livro</text><text fill="%2394a3b8" font-family="sans-serif" font-size="16" x="50%" y="54%" text-anchor="middle">(Placeholder Offline)</text></svg>'
  }
  return (
    <article className="post">
      {/* Cabeçalho do Card: Avatar, @usuario, localização literária e tag do autor */}
      <header className="post__header">
        <img
          className="post__avatar"
          src={post.avatar}
          alt={`Avatar de ${post.user}`}
        />
        <div className="post__user">
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>
        <span className="post__author-badge">{post.author}</span>
        <button className="icon-button post__more" type="button" aria-label="Mais opções">
          <FiMoreHorizontal />
        </button>
      </header>

      {/* Imagem Placeholder do livro (dar duplo clique também curte o post!) */}
      <div className="post__image-wrapper" onDoubleClick={handleToggleLike}>
        <img
          className="post__image"
          src={post.image}
          alt={post.alt}
          onError={handleImageError}
        />
      </div>

      {/* Conteúdo abaixo da imagem */}
      <div className="post__content">
        {/* Barra de botões de ação */}
        <div className="post__actions">
          {/* RENDERIZAÇÃO CONDICIONAL com operador ternário:
              Se "liked" for verdadeiro, mostra <FaHeart /> vermelho; senão, mostra <FiHeart /> */}
          <button
            className={`icon-button ${liked ? 'icon-button--liked' : ''}`}
            type="button"
            onClick={handleToggleLike}
            aria-label={liked ? 'Descurtir' : 'Curtir'}
          >
            {liked ? <FaHeart /> : <FiHeart />}
          </button>

          <button
            className="icon-button"
            type="button"
            onClick={() => setShowCommentBox(!showCommentBox)}
            aria-label="Comentar"
          >
            <FiMessageCircle />
          </button>

          <button className="icon-button" type="button" aria-label="Compartilhar">
            <FiSend />
          </button>

          {/* Botão de salvar chama a função recebida do App.jsx */}
          <button
            className={`icon-button ${isSaved ? 'icon-button--saved' : ''}`}
            type="button"
            onClick={() => onToggleSave(post.id)}
            aria-label={isSaved ? 'Remover dos salvos' : 'Salvar na estante'}
          >
            <FiBookmark />
          </button>
        </div>

        {/* Contagem dinâmica de curtidas */}
        <p className="post__likes">
          <strong>{likesCount} curtidas</strong>
        </p>

        {/* Título da obra e legenda */}
        <p className="post__book-title">📚 {post.bookTitle}</p>
        <p className="post__caption">
          <strong>{post.user}</strong>
          {post.caption}
        </p>

        {/* Área de Comentários (Desafio 4 do README) */}
        <div className="post__comments">
          {/* Renderização condicional com "&&": só mostra o contador se existir pelo menos 1 comentário */}
          {comments.length > 0 && (
            <span className="post__comments-count">
              {comments.length === 1
                ? '1 comentário'
                : `Todos os ${comments.length} comentários`}
            </span>
          )}

          {/* RENDERIZAÇÃO DE LISTA COM .map():
              Cada objeto do array "comments" vira um parágrafo <p>.
              A prop "key={comment.id}" é obrigatória no React para identificar
              cada item da lista de forma única e eficiente. */}
          {comments.map((comment) => (
            <p key={comment.id} className="post__comment-item">
              <strong>{comment.user}</strong> {comment.text}
            </p>
          ))}

          <span className="post__time">{post.time}</span>
        </div>

        {/* Formulário para escrever e publicar um novo comentário */}
        {showCommentBox && (
          <form className="post__comment-form" onSubmit={handleAddComment}>
            <input
              type="text"
              placeholder="Adicione um comentário sobre esta obra..."
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              aria-label="Escrever comentário"
            />
            <button type="submit" disabled={commentText.trim() === ''}>
              Publicar
            </button>
          </form>
        )}
      </div>
    </article>
  )
}

export default Post

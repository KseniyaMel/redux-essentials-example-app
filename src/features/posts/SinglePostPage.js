import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { selectPostById } from './postsSlice'

export default function SinglePostPage({ match }) {
  const { postId } = match.params

  // const post = useSelector((state) =>
  //   state.posts.find((post) => post.id === postId)
  // )

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </section>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

export default function PostsList() {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => <Post post={post} key={post.id} />)

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

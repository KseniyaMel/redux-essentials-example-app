import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: '1',
    date: '2022-02-06T14:41:39.907Z',
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: '2',
    date: '2022-02-06T14:41:39.907Z',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const post = state.find((post) => id === post.id)
      if (post) {
        post.title = title
        post.content = content
      }
    },
  },
})
export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer

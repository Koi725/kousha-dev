import axios from 'axios'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const sendMessage = async (data: {
  name: string
  email: string
  message: string
}) => {
  const res = await axios.post(`${API_BASE}/api/v1/message/`, data)
  return res.data
}

export const fetchBlogPosts = async () => {
  const res = await axios.get(`${API_BASE}/api/v1/blogposts/`)
  return res.data
}

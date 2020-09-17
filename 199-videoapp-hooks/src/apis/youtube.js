import axios from 'axios'
const API_KEY = 'AIzaSyC5q0t51ZwxzJoWHCe00UvcYu7gdgjwP7s'

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: API_KEY
  }
})

export /* async */ function search (term) {
  return axiosInstance.get('/search', {
    params: {
      q: term
    }
  })
}

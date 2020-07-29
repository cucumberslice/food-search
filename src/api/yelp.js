import axios from 'axios'

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer tDk-Ukvk7PngvpQ_DIFm7V3JF4peSOc3rlBhVR_tQYY2KK_9C7RVVQqywLkYAufdk_Cxkoc7uiq9dRWwRXNV71mvof40l-XrXGUzHxwgZYQd5tyrDoyHy3_E52R6XnYx`
  }
})



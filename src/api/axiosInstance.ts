import axios from "axios"

export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjE3YmFhYzE1ZjA5ZjY3NTRiZTczNWQ1NDkwYTViYiIsIm5iZiI6MTczMDI4Mjc4NC40OTE2NjA0LCJzdWIiOiI2NzFkYmQ0MzM0YzBmYWJkNjgxY2Q5OTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9OcGUeoYzDWtHYby2RFw1hng6QzaY0DOM8qaJ5BZbNo'
    }
})


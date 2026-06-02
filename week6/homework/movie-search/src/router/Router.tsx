import { createBrowserRouter } from 'react-router'
import Main from '@/pages/main/Main'
import MovieDetail from '@/pages/movie-detail/MovieDetail'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
  },
  {
    path: "movie-detail/:movieId",
    Component: MovieDetail
  }
])

export default router
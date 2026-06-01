import { createBrowserRouter } from 'react-router'
import Main from '@/pages/main/Main'
import DesignSystem from '@/pages/DesignSystem'
import MovieDetail from '@/pages/movie-detail/MovieDetail'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/design-system",
    Component: DesignSystem,
  },
  {
    path: "movie-detail/:movieId",
    Component: MovieDetail
  }
])

export default router
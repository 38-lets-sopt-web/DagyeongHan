import { createBrowserRouter } from 'react-router'
import Home from '@/pages/Home'
import DesignSystem from '@/pages/DesignSystem'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/design-system",
    Component: DesignSystem,
  }
])

export default router
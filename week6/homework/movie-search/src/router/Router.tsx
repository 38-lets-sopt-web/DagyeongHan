import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import DesignSystem from '@/pages/DesignSystem'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './contexts/ProgressContext'
import { PlatformProvider } from './contexts/PlatformContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import ReferenceGuide from './pages/ReferenceGuide'

export default function App() {
  return (
    <ProgressProvider>
      <PlatformProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="lesson/:lessonId" element={<Lesson />} />
              <Route path="reference" element={<ReferenceGuide />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlatformProvider>
    </ProgressProvider>
  )
}

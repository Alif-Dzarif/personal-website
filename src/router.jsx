import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProjectPages from './pages/ProjectPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/projects',
    element: <ProjectPages />
  }
])

export default router
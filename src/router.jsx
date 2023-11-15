import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProjectPages from './pages/ProjectPages'
import General from './pages/General'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/projects',
    element: <ProjectPages />
  },
  {
    path: '/general',
    element: <General />
  }
])

export default router
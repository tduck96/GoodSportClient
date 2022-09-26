import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
const Layout = () => {
  return (
    <main className = "App">
      <NavigationBar />
        <Outlet />
     <Footer />
    </main>
  )
}

export default Layout

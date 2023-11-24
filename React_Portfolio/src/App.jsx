import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import './style/App.css'

function App() {

    return (
        <>
            <Header />
            <NavBar />
            <p>Hello World</p>
            <Outlet />
            <Footer />
        </>
    )
}

export default App

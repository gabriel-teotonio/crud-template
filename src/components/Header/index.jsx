import './styles.css'
import Logo from '../../../public/logo-adc.svg' 
import { useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()
    return (
        <header className='header'>
            <img src={Logo} alt="" />
            <button onClick={() => navigate("createPost")}>Criar novo post</button>
        </header>
    )
}
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
      </ul>
    </nav>

  )

}

export default Header
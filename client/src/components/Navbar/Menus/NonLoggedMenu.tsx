import { Link, Routes } from 'react-router-dom'
import ROUTES from '../../../config/routes'
import './Menus.scss'

const NonLoggedMenu = () => {
    return (
        <ul className="menu">
            <li><Link to={ROUTES.REGISTER}>Register</Link></li>
            <li><Link to={ROUTES.LOGIN}>Login</Link></li>
        </ul>
    )
}

export default NonLoggedMenu
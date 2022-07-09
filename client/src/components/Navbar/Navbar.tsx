import { Link } from 'react-router-dom'
import ROUTES from '../../config/routes'
import { User } from '../../models/User'
import LoggedMenu from './Menus/LoggedMenu'
import NonLoggedMenu from './Menus/NonLoggedMenu'
import './Navbar.scss'

const Navbar = () => {

    const user: User | null = null

    return (
        <header>
            <nav className='site-navbar'>
                <h1 className='site-logo'><Link to={ROUTES.HOME}>Bug2buG</Link></h1>

                <div className="user-menu">
                    {user ? <LoggedMenu /> : <NonLoggedMenu />}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
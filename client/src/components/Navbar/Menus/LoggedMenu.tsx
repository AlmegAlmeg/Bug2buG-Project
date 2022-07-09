import { Link } from 'react-router-dom'
import { User } from '../../../models/User'
import './Menus.scss'

const LoggedMenu = () => {

    const user: User = {
        userName: 'Almog',
        email: 'almog@gmail.com',
        password: '123456'
    }

    return (
        <ul className="menu">
            <li>Hello { user.userName }</li>
            <li><Link to='/'>Logout</Link></li> 
        </ul>
    )
}

export default LoggedMenu
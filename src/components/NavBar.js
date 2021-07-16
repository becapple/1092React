import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar-nav">
            <NavLink to="/people" className="navbar-item" activeClassName="nav-item--active">
                人文
            </NavLink>
            <NavLink to="/math" className="navbar-item" activeClassName="nav-item--active">
                理工
            </NavLink>

        </div>
    );
}
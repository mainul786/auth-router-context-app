import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            }
            ).catch(error => {
                console.error(error)
            }
            )
    }
    return (

        <div className="navbar bg-primary text-primary-content">
            <Link to='/home' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
            <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
            <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
            {user?.email && <span>Welcome, {user?.email}</span>}

            {user && user?.email ?
                <button onClick={handleLogOut} className="btn btn-warning">LogOut</button> :
                <Link to='/login' className="btn btn-warning">Login</Link>
            }


        </div>

    );
};

export default Header;
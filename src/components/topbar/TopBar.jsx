import {Link} from "react-router-dom"
import "./topbar-style.css"

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fa-brands fa-pinterest"></i>
            <i className=" topIcon fa-brands fa-instagram"></i>
            <i className=" topIcon fa-brands fa-facebook"></i>
            <i className=" topIcon fa-brands fa-twitter"></i>

            </div>
            <div className="topCenter">
                <ul className="ul1">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    {user && <li className="topListItem">LOGOUT</li>}
        
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg" src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1685470972~exp=1685471572~hmac=01bdf6fe3bb7be6358a8ed44896a03daba7272f5a09dc0d1c37d097e10abadce" alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/login">REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
    );
}

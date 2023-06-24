import { Link } from "react-router-dom/cjs/react-router-dom";

export default function NavBar(){
    return(
        <nav >
        <img className='logo' src="/logo192.png" alt="logo"/>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
    )
}
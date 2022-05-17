import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return <div>
    <Link to='/'><p>Home</p></Link>
    <Link to='/adventure'><p>Lista de aventuras</p></Link>
    <Link to='/level'><p>Level up</p></Link>
    {/* <Link to="/shop">Shop</Link> */}
  </div>
}

export default Header
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/shop"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Shop
        </NavLink>
      </div>
      <span></span>
      <div className={classes.item}>
        <NavLink
          to="/shoppingCart"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Shopping Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav

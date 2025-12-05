
import { Link } from "@reach/router"
import classes from "./Layout.module.css"
import Button from "../../button/Button"
import Button2 from "../../button/Button"

function layout(props){
  console.log(props)
  const path = window.location.pathname;
    return(
            <div className={classes.app}>
      {/* Navigation Section */}
      <nav className={classes.nave}>
        <div className={classes.brind}>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li><Link to="/" className={path === '/' ? classes.navItemActive : classes.navItem} >Home</Link></li>
            <li><Link to="/about" className={path === '/about' ? classes.navItemActive : classes.navItem} >About</Link></li>

            <li><Link to="/help" className={path === '/help' ? classes.navItemActive : classes.navItem} >Help</Link></li>

            <li><Link to="/clock" className={path === '/clock' ? classes.navItemActive : classes.navItem} >Clock</Link></li>
            <li><Link to="/tasks" className={path === '/tasks' ? classes.navItemActive : classes.navItem} >Tasks</Link></li>
            
          </ul>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className={classes.main}>
        {props.children}
      </main>

      {/* Footer Section */}
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
         <li><Link to="/" className={path === '/' ? classes.navItemActive : classes.navItem} >Home</Link></li>
            <li><Link to="/about" className={path === '/about' ? classes.navItemActive : classes.navItem} >About</Link></li>

            <li><Link to="/help" className={path === '/help' ? classes.navItemActive : classes.navItem} >Help</Link></li>

            <li><Link to="/clock" className={path === '/clock' ? classes.navItemActive : classes.navItem} >Clock</Link></li>
            <li><Link to="/tasks" className={path === '/tasks' ? classes.navItemActive : classes.navItem} >Tasks</Link></li>
        </ul>
        <Button size="small" variant ="primary" text = "Hello world" />
        <Button2 size="small" variant ="primary" text = "Button2" />
      </footer>
    </div>
    )
}

export default layout
import {Link} from "react-router-dom"

const Header = () => {
 return(
    <header>
        <h1>Tracker App</h1>
        <ul>
        <Link to="/habits"><li>Habits</li></Link>
        <Link to="/task"><li>Tasks</li></Link>
        <Link to="/friends"><li>Friends</li></Link>
        </ul>
    </header>
 )
}

export default Header
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return ( <div>
        <nav>
            <ul>
            <li>
                <Link to="/">uno</Link>
            </li>
            <li>
                <Link to="/">dos</Link>
            </li>
            <li>
                <Link to="/">tres</Link>
            </li>
            </ul>
        </nav>
    <hr/>
    <Outlet />
    </div>
    );
}
export default Layout;
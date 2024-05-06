import { Link } from "react-router-dom";
function Navbar(){
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1 className="Font">Don't wish for it, work for it &nbsp;&nbsp;&nbsp;&nbsp;  "Today's agenda"</h1>
                    {/* <h1>Welcome Back </h1> */}
                </Link>
            </div>
        </header>
    );
}
export default Navbar;
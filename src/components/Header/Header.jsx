import { LogoutBtn, Logo, Container } from "../index";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.authReducre.status);
  
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header className="shadow-sm bg-secondary">
      <nav className="d-flex">
        <div className="me-4">
          <Link to='/'>
            <Logo width="70px" />
          </Link>
        </div>
        <ul className="d-flex">
          {navItems.map((item) =>
            item.active ?
              (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="d-inline-block btn btn-outline-primary px-4 py-2"
                  >{item.name}</button>
                </li>
              ) : null
          )}
          { authStatus && 
            <li>
              <LogoutBtn/>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header

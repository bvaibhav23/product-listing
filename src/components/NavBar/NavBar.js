import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://wforwomanonline.com/images/logo.png"
              alt="logo"
              width="100%"
              height="50vh"
            ></img>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  mb-lg-0">
              <li className="nav-item fw-bold tw-4 m-1 border border-1 rounded-3 text-center ">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item  fw-bold tw-4 m-1 border border-1 rounded-3 text-center ">
                <Link
                  to="/about"
                  className="nav-link  active"
                  aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item  fw-bold tw-4 m-1 border border-1 rounded-3 text-center ">
                <Link
                  to="/contact"
                  className="nav-link  active"
                  aria-current="page">
                  Contact
                </Link>
              </li>

            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.onChangeHandler}
              />
            </form>
            <Link
              to="/cart"
              className="nav-link text-light active fw-bold tx-4  rounded-3 text-center border border-1"
              aria-current="page">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

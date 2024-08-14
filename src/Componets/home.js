import { Link } from "react-router-dom";
function Hader() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ABC-Automobiles
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/main"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/vehicles"
                >
                  Vehicles
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Addvehicals"
                >
                  ADD-Vehicles
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact-us"
                >
                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Hader;

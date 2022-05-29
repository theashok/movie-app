import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USERS_FEATURE_KEY } from "../../../redux/users/users.reducer";
import { logOut } from "../../../redux/users/users.actions";

let Navbar = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let userInfo = useSelector((state) => {
    return state[USERS_FEATURE_KEY];
  });

  let { isAuthenticated, loading, user } = userInfo;

  // logout
  let logoutUser = () => {
    dispatch(logOut(history));
  };

  let privateLinks = (
    <React.Fragment>
      {user ? (
        <li className="nav-item">
          <Link to="/users/login" className="nav-link">
            <img
              src={user.image}
              alt=""
              width="20"
              height="20"
              className="rounded-circle"
            />
            {user.name}
          </Link>
        </li>
      ) : null}
      <li className="nav-item">
        <Link to="#!" onClick={logoutUser} className="nav-link">
          Logout
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-info navbar-expand-sm text-white">
        <div className="container">
          <Link to="/books/list" className="navbar-brand">
            <h3>Movie App</h3>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <Link to="/movies/list" className="nav-link">
                    Movies
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {!loading && (
                <React.Fragment>
                  {isAuthenticated ? privateLinks : ""}
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const user = useSelector((state: any) => state.user.profile);

  return (
    <header className="header">
      <ul className="navBlock">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>

      <ul className="userBlock">
        {user ? (
          <>
            <li>
              <Link to="/profile">{user.displayName || user.email}</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      <div className="clear" />
    </header>
  );
};

export default Header;

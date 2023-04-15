import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pages } from "../../data";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);

  const [name, setName] = useState("Username");

  const [active, setActive] = useState(0);

  useEffect(() => {
    pages.forEach((page, index) => {
      if (page.path == window.location.pathname) {
        setActive(index);
      }
    });
  }, [active]);

  const NavLink = ({
    name,
    path,
    index = "navLink",
    classname = "navLink",
  }) => (
    <Link
      className={active === index ? `${classname}Active` : classname}
      to={path}
      onClick={() => {
        setActive(index);
      }}
    >
      {name}
    </Link>
  );

  return (
    <nav className="Navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      {loggedIn ? (
        <ul>
          <li>
            <NavLink name={"Home"} path={"/"} />
          </li>
          <li>
            <NavLink name={"Username"} path={"/dashboard"} />
          </li>
        </ul>
      ) : (
        <ul className="navLinks">
          {pages.map((page, key) => {
            if (page.show)
              return (
                <li key={key}>
                  <NavLink name={page.name} path={page.path} index={key} />
                </li>
              );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
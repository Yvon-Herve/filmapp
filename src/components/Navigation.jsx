import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/favoris"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>coup de coeur</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;

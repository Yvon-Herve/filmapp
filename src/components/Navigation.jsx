import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="gap-2 flex p-2">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="bg-blue-600  rounded-md text-center">accueil</li>
        </NavLink>
        <NavLink
          to="/favoris"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="bg-blue-600  rounded-md text-center">coup de coeur</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;

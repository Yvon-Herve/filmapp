import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h1>React movie</h1>
        <div>
          <input className="border-2 border-blue-800" type="text" />
          <button>Rechercher</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

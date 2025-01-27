import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="text-white">
      <div className="w-1/4">
        <Navigation />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl p-2">Movie App</h1>
        <div className="flex-1 flex flex-col py-2 rounded-xl">
          <input className="bg-white" type="text" />
          <button className="bg-blue-600 p-2">Rechercher</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

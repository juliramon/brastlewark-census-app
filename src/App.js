import { useEffect, useState } from "react";
import CensusService from "./services/censusService";
import CensusListItem from "./components/CensusListItem";
import "./App.css";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";

const App = () => {
  const service = new CensusService();
  const [searchQuery, setSearchQuery] = useState("");
  const [hasCensus, setHasCensus] = useState(false);
  const [census, setCensus] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const { Brastlewark } = await service.getCensusData();
      if (Brastlewark) {
        setCensus(Brastlewark);
        setHasCensus(true);
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  };

  let censusList;
  if (hasCensus) {
    censusList = census
      .filter((item) => item.name.toLowerCase().includes(searchQuery))
      .map((el) => {
        const genders = ["male", "female", "other"];
        const randomGenderHandler =
          genders[Math.floor(Math.random() * genders.length)];
        return (
          <CensusListItem
            key={el.id}
            id={el.id}
            name={el.name}
            gender={randomGenderHandler}
            thumbnail={el.thumbnail}
            age={el.age}
            weight={el.weight}
            height={el.height}
            hair_color={el.hair_color}
            professions={el.professions}
            friends={el.friends}
          />
        );
      });
  }

  return (
    <>
      <header>
        <NavBar searchQuery={searchQuery} handleChange={handleChange} />
      </header>
      <main className="app-wrapper">
        <section className="census-list">
          <FilterBar />
          <div className="census-list__wrapper">{censusList}</div>
        </section>
      </main>
    </>
  );
};

export default App;

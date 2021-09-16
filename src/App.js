import { useEffect, useState } from "react";
import CensusService from "./services/censusService";
import CensusListItem from "./components/CensusListItem";

const App = () => {
  const service = new CensusService();
  const [hasCensus, setHasCensus] = useState(false);
  const [census, setCensus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { Brastlewark } = await service.getCensusData();
      if (Brastlewark) {
        setCensus(Brastlewark);
        setHasCensus(true);
      }
    };
    fetchData();
  }, []);

  let censusList;
  if (hasCensus) {
    censusList = census.map((el) => (
      <CensusListItem
        key={el.id}
        id={el.id}
        name={el.name}
        thumbnail={el.thumbnail}
        age={el.age}
        weight={el.weight}
        height={el.height}
        hair_color={el.hair_color}
        professions={el.professions}
        friends={el.friends}
      />
    ));
  }

  return (
    <>
      <div className="app__wrapper">
        <div className="census-list">
          <div className="census-list__wrapper">{censusList}</div>
        </div>
      </div>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import CensusService from "./services/censusService";
import CensusListItem from "./components/CensusListItem";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const App = () => {
  const service = new CensusService();
  const [searchQuery, setSearchQuery] = useState("");
  const [hasCensus, setHasCensus] = useState(false);
  const [census, setCensus] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [sortedData, setSortedData] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

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
  } else {
    censusList = (
      <div className="loading-alert">
        <Loader type="Oval" color="#00BFFF" height={50} width={50} />
        <span className="loading-alert__message">Loading...</span>
      </div>
    );
  }

  const sortData = (colTitle) => {
    console.log("sort data");
    console.log(colTitle);
    if (sortedData === false || sortedData === "decremental") {
      const sortedList = census
        .sort((a, b) => {
          if (
            colTitle === "id" ||
            colTitle === "age" ||
            colTitle === "weight" ||
            colTitle === "height"
          ) {
            return a[colTitle] - b[colTitle];
          } else {
            if (a[colTitle].toLowerCase() > b[colTitle].toLowerCase()) {
              return -1;
            }
            if (a[colTitle].toLowerCase() < b[colTitle].toLowerCase()) {
              return 1;
            }
            return 0;
          }
        })
        .reverse();
      setCensus(sortedList);
      setSortedData("incremental");
    } else if (sortedData === "incremental") {
      const sortedList = census.sort((a, b) => {
        if (
          colTitle === "id" ||
          colTitle === "age" ||
          colTitle === "weight" ||
          colTitle === "height"
        ) {
          return a[colTitle] - b[colTitle];
        } else {
          if (a[colTitle].toLowerCase() > b[colTitle].toLowerCase()) {
            return -1;
          }
          if (a[colTitle].toLowerCase() < b[colTitle].toLowerCase()) {
            return 1;
          }
          return 0;
        }
      });
      setCensus(sortedList);
      setSortedData("decremental");
    }
  };

  return (
    <>
      <header>
        <NavBar searchQuery={searchQuery} handleChange={handleChange} />
      </header>
      <main className="app-wrapper">
        <section className="census-list">
          <FilterBar sortData={sortData} />
          <div className="census-list__wrapper">{censusList}</div>
        </section>
      </main>
    </>
  );
};

export default App;

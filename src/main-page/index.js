import logo from './logo.svg';
import './main-page.css';
import Header from "./header";
import {useEffect, useState, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FeaturedHouse from './featured-house';

function App() {
  //let allHouses = []; bunu yapmak yeterli olmaz houses'a her yerden erişmek için
  const [allHouses, setAllHouses] = useState([]);
  
  useEffect(() =>{
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
   fetchHouses(); 

  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  
   
  const userName = "Roland";
  return (
    <Router>

   
   <div className='container'>
     <Header subtitle={userName} />
     <Route path="/">
     <FeaturedHouse house={featuredHouse}></FeaturedHouse>

     </Route>
   </div>
   </Router>
  );
}

export default App;

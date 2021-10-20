import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

export interface IRobot {
  name: string;
  id: string;
  email: string;
}

const App: React.FunctionComponent = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  // const [count, setCount] = useState(0) // for demo purposes

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    // console.log(count)
  }, []); // if you add count, only run if count changes.

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots: Array<IRobot> = robots.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      {/* <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;

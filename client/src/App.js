import "./App.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);
  return (
    <div className="container">
      <Sidebar isLoading={isLoading} />
      <div className="home">
        <Topbar isLoading={isLoading} user={user} />
        <Feed />
      </div>
    </div>
  );
}

export default App;

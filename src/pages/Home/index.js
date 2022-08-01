import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { getApis } from "../../services/getApis";
import { UPDATE_INTERVAL } from "../../config";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import "./style.css";

const Home = () => {
  const [apiList, setApiList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApiList = async () => {
    const data = await getApis();
    setApiList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiList();
  }, []);

  useEffect(() => {
    setInterval(() => fetchApiList(), UPDATE_INTERVAL);
  }, []);

  return (
    <div className="home-container">
      <Header />
      {loading?
        <Spinner />
        :
      <div className="cards-container">
        {apiList &&
          apiList.map((api, index) => (
            <Card
              key={index}
              apiName={api.name}
              hostName={api.hostname}
              message={api.success ? api.message.slice(0, 7) : "ERROR"}
              status={api.success}
              time={api.time}
            />
          ))}
      </div>
      }
    </div>
  );
};

export default Home;

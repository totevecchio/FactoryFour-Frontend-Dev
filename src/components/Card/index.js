import { format } from "date-fns";
import "./style.css";

const Card = (props) => {
  const { apiName, hostName, time, message, status } = props;

  return (
    <div className="card-container">
      <h2 className="title">{apiName}</h2>
      <h2 className={status ? "healthy" : "not-healthy"}>{message}</h2>
      <h2 className="text">{hostName}</h2>
      <h2 className="time">{format(time, "HH:mm:ss")}</h2>
    </div>
  );
};

export default Card;

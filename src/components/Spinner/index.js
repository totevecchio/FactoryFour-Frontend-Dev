import ClipLoader from "react-spinners/ClipLoader";
import './style.css'

const Spinner = () => {
  return (
    <div className="spinner-container">
      <h3 className="spinner-title">Loading...</h3>
      <ClipLoader color="black" size={100} />
    </div>
  );
};

export default Spinner;

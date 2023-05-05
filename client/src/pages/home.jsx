import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Weather from "../components/weather";
import "../css/pages/homepage.css";

function Home() {
  // set state for news data
  const [newsData, setNewsData] = useState(null);

  // set URL for new's API
  const URL =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ZiUzWfcN4TX6yW807m6vUEVdMzgGPDJV";

  // initialize navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Gets current state to see if user is logged in or not. Takes in a function
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.auth);

  // call News API
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewsData(data.results);
      })
      .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, isError, message, dispatch]);

  if (newsData === null) {
    return <Spinner />;
  }

  return (
    <div className="main-container">
      <div className="article-container">
      <h2 className="page-header">The New York Times</h2>
        {newsData.map((items) => (
          <div className="card" key={items.id}>
            <h5>{items.title}</h5>
            <p className="abstract">{items.abstract}</p>
            <address className="byline">{items.byline}</address>
            <Link to={items.url} target='_blank'>
              <button className="learn-more-btn">Learn More</button>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="weather"> */}
          {/* <Weather /> */}
          {/* </div> */}
    </div>
  );
}

export default Home;

//abstract
//asset_id
//title
//url
//byline

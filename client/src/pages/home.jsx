import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";

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
        console.log(newsData);
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
    <>
      <h2>The New York Times</h2>
      <div className="article-container">
        {newsData.map((items) => (
          <div key={items.id}>
            <h5>{items.title}</h5>
            <p>{items.abstract}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

//abstract
//asset_id
//title
//url
//byline

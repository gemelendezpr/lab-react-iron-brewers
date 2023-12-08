//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState({});

  useEffect(() => {
    getOneBeer();
  }, []);
  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();

  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.
  // 2. Set up an effect hook to make a request for the beer info from the Beers API.
  // 3. Use axios to make a HTTP request.
  // 4. Use the response data from the Beers API to update the state variable.

  const getOneBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setOneBeer(response.data))
      .catch((err) => console.log(err));
  };

  // Structure and the content of the page showing the beer details. You can leave this as it is:
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {oneBeer && (
        <>
          <img
            src={oneBeer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{oneBeer.name}</h3>
          <p>{oneBeer.tagline}</p>
          <p>Attenuation level: {oneBeer.attenuation_level}</p>
          <p>Description: {oneBeer.description}</p>
          <p>Created by: {oneBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;

import React, { useEffect, useState } from 'react';
import { Comment } from '../comment/Comment';

function AirQualityComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=55&longitude=61`)
      .then(response => response.json())
      .then(function(data) {
        console.log(data)
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);
  if (data) {
    return (
      <div>
        <Comment name={data.latitude} text={data.longitude} />
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

export default AirQualityComponent;
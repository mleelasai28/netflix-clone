import "./banner.css";
import axios from "../api";
import { useEffect, useState } from "react";
import { requests } from "../api";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${IMAGE_BASE}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>

        <p className="banner_desc">{movie?.overview}</p>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;

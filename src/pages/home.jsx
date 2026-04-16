import Navbar from "../components/navbar";
import Banner from "../components/banner";
import MovieRow from "../components/movierow";
import { requests } from "../api";
import Search from "../components/search";


function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Search />

      <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchAction} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedy} />
    </div>
  );
}

export default Home;

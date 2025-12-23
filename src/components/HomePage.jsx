import HomeDesc from "./HomeDesc";
import Title from "./Title";
import AlbumSearchBar from "./AlbumSearchBar";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className="bg-[url(src/assets/bg2.png)] bg-cover bg-repeat-round justify-center items-center h-screen overflow-x-hidden">
      <Navbar />
      <Title />
      <div className="mt-10 flex flex-col -mt-w">
        <HomeDesc />
        <AlbumSearchBar />
      </div>
    </div>
  );
}

export default HomePage;

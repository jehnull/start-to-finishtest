import Navbar from "./Navbar";
import RankingPageAlbumInfo from "./RankingPageAlbumInfo";
import RankingPageControls from "./RankingPageControls";
import RankingPageRank from "./RankingPageRank";
import SongPreview from "./SongPreview";

function RankingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap w-full h-screen">
        <RankingPageAlbumInfo />
        <RankingPageControls />
        <RankingPageRank />
        <SongPreview />
      </div>
    </>
  );
}

export default RankingPage;

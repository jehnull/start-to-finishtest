import TrackRank from "./TrackRank";

function RankingPageRank() {
  return (
    <div className="bg-amber-300 grow p-5 flex flex-col justify-center items-center">
      <h1 className="pb-5">Track Ranking :</h1>
      <TrackRank />
    </div>
  );
}

export default RankingPageRank;

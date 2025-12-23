function RankingPageControls() {
  return (
    <div className="bg-cyan-400 p-5 grow flex flex-col justify-center items-center">
      <h3>Current Track</h3>
      <h1 className="font-medium text-4xl pt-3">NOT OK</h1>
      <p className="text-sm pb-3">Track 2 / 15</p>
      <button className="cursor-pointer mt-2 rounded-sm bg-blue-300 hover:bg-blue-400 px-3">
        Next
      </button>
    </div>
  );
}

export default RankingPageControls;

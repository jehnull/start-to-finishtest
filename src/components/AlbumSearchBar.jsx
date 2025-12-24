import { useState, useEffect } from "react";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

function AlbumSearchBar() {
  const [userInput, userUserInput] = useState("");
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);
  let [artistName, setArtistName] = useState(
    "Have you listened to these latest released albums?"
  );

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setToken(data.access_token);
      });
  }, []);

  useEffect(() => {
    if (!token) return;

    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const fetchNewReleases = async () => {
      await fetch(
        "https://api.spotify.com/v1/browse/new-releases?limit=5",
        artistParams
      )
        .then((result) => result.json())
        .then((data) => {
          setAlbums(data.albums.items);
        });
    };

    fetchNewReleases();
  }, [token]);

  async function search() {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + userInput + "&type=artist",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums?include_groups=album&market=US&limit=50",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.items);
      });

    await fetch("https://api.spotify.com/v1/artists/" + artistID, artistParams)
      .then((result) => result.json())
      .then((data) => {
        setArtistName(
          <>
            {data.name} <br /> Select an album below
          </>
        );
      });

    // await fetch(
    //   "https://api.spotify.com/v1/albums/2xkZV2Hl1Omi8rk2D7t5lN/tracks",
    //   artistParams
    // )
    //   .then((result) => result.json())
    //   .then((data) => {
    //     console.log(data.items[0].duration_ms);
    //   });
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center py-2">
        <input
          name="artistName"
          className="border border-[#646668] mx-3 bg-[#ECF0F2] rounded-sm px-2 text-xl w-full/2"
          type="input"
          required
          placeholder="Enter Artist Name"
          onChange={(e) => {
            userUserInput(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={search}
          className="cursor-pointer mt-2 rounded-sm bg-blue-300 hover:bg-blue-400 px-3"
        >
          Done
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        <h1 className="py-10 font-extrabold text-center">{artistName}</h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {albums.map((album) => (
          <div
            className="mx-2 p-2 mb-2 w-50 text-center rounded-lg bg-linear-to-t from-[#ECF0F2] via-pink-400/5 to-transparent"
            key={album.id}
          >
            <a href={album.external_urls.spotify} className="cursor-pointer">
              <img
                src={album.images[0]?.url}
                className="drop-shadow-lg hover:scale-105 prefers-reduced-motion"
              />
            </a>
            <p className="mt-2 font-bold wrap-break-word">{album.name}</p>
            <p className="text-xs">{album.release_date.split("-")[0]}</p>
            <p className="text-xs">
              {album.total_tracks}
              {album.total_tracks === 1 ? " Track" : " Tracks"}
            </p>
            <p className="text-xs"></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AlbumSearchBar;

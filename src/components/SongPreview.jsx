function SongPreview() {
  return (
    <div>
      <iframe
        className="fixed bottom-0 left-0"
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/album/0zkgIyTdpvOpV5z4oK7c2j?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SongPreview;

export default function Spotify() {
  return (
    <div className="spotify">
      <h1 className="heading-style">My Favorite Track Lately 🎧</h1>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/5rZQUcZVDCCUsJHeaxVPpG?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

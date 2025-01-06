export default function Guitar() {
  return (
    <div>
      <div>
        <p style={{ paddingTop: "18px" }}>
          I also play the guitar 🎸. Here's what I'm learning.
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/DIJf08_ovZA"
        style={{ border: "none", width: "100%", height: "350px" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Guitar Video"
      />
    </div>
  );
}

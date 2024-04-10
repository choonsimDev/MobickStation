function YouTubeVideo({ width, height, src }) {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;

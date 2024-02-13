function YouTubeVideo({ width, height, src }) {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;

import { useSelector } from "react-redux";
import useMovieTrailer from "../../utils/Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

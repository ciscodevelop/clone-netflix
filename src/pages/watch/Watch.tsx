import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import { movieItemProps, movieProps } from "../../components/modelsProps/modelMovie";

const Watch = () => {
  const location = useLocation<movieProps>();
  const movie=location.state.movie as movieItemProps
  console.log(movie.video)
  return (
    <div className="watch">
      <Link to={'/'}>
        
      <div className="back">
        <ArrowBackOutlined className="arrow" />
       <span>Home</span> 
          </div>
      </Link>
      {/* <video className="video" autoPlay={true} muted controls src={movie.video}></video> */}
      <iframe width="560"  allowFullScreen height="315" src={movie.video} title={movie.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
    </div>
  );
};

export default Watch;

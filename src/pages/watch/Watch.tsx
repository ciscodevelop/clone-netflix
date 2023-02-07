import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined className="arrow" />
       <span>Home</span> 
          </div>
          <video className="video" autoPlay={true} muted controls src="assets/io_resto_ _trailer_ufficiale (360p).mp4"></video>
    </div>
  );
};

export default Watch;

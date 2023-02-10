import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { movieItemProps } from "../modelsProps/modelMovie";
interface Props {
  index: number;
  item?: string;
}
const ListItem: React.FC<Props> = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false); 
  const [movie, setMovie] = useState<movieItemProps>({});

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/movies/find/" + item,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTJiMGRhYmJiMThhNGU2Y2ViNWMyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTk4NzA3NCwiZXhwIjoxNjc2MDczNDc0fQ.p7E5w8R-a6XD5NT--qkXGXWa0d-i2-S_FexC9zouJDo",
          },
        }
      );
      setMovie(res.data);
      
    };
    getMovie();
  }, [item]);
 


  return (
    <Link to={{pathname:'/watch',state:{movie:movie}}}>
    <div
      className="listItem"
      //  style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      style={
        isHovered
          ? { left: index * 225 - 50 + index * 2.5 }
          : { position: "relative" }
      }
      onMouseEnter={() => setIsHovered(true) }
      onMouseLeave={() =>setIsHovered(false) }
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <iframe src={movie.trailer}   title={movie.title}  />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.title}</span>
              <span>1 Hour 14 mins</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.yeard}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
      </Link>
  );
};

export default ListItem;

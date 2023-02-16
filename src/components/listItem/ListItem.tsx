import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { movieItemProps } from "../modelsProps/modelMovie";
import { Http } from "../../shared/utils/httpWrapper/Http";
interface Props {
  index: number;
  item?: string;
}
const ListItem: React.FC<Props> = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false); 
  const [movie, setMovie] = useState<movieItemProps>({});

  useEffect(() => {
    const getMovie = async () => {
      const res = await Http.get(`movies/find/${item}`);
      setMovie(res);      
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

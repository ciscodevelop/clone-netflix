import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState } from "react";
interface Props {
  index: number;
}
const ListItem: React.FC<Props> = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      //  style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      style={
        isHovered
          ? { left: index * 225 - 50 + index * 2.5 }
          : { position: "relative" }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://www.film.it/typo3temp/pics/59f5051e73.jpg" alt="" />
      {isHovered && (
        <>
          <video src="assets/trailer.mp4" autoPlay={true} loop muted />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow  className="icon"/>
              <Add  className="icon"/>
              <ThumbUpOutlined  className="icon"/>
              <ThumbDownOutlined  className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 Hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              facere quis exercitationem minus facilis ratione fugiat illum
              tenetur dolorum, sequi laudantium omnis perferendis sunt vitae
              praesentium corporis veritatis quidem aspernatur.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;

import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { movieItemProps } from "../modelsProps/modelMovie";
interface Props{
    type?: string;
}

const Featured: React.FC<Props> = ({ type }) => {
  const [content, setContent] = useState<movieItemProps>({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get('movies/random?type:' + type, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTJiMGRhYmJiMThhNGU2Y2ViNWMyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTg5ODY1NywiZXhwIjoxNjc1OTg1MDU3fQ.g5l0cO5KHpoQYPMxRKcNI_0MWpmw_hN9XkOF_jNU9r0",
          },
        })

        setContent(res.data[0]);
        console.log(res.data)
        
      } catch (e) {
        console.log(e);
      }
      
    
    }
    getRandomContent();
}, [type])

  
  return (
    <div className="featured">
      {type && (
        <div className="category">
                  <span>{type === "movies" ? "Movies" : "Series"}</span>
                  <select name="genre" id="genre">
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="historical">Historical</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-fi</option>
                      <option value="thriller">Thriller</option>
                      <option value="western">Western</option>
                      <option value="animation">Animation</option>
                      <option value="drama">Drama</option>
                      <option value="documentary">Documentary</option>
                  </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />

        <span className="desc">

          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

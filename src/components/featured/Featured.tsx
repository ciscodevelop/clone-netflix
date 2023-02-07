import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
interface Props{
    type?: string;
}

const Featured :React.FC<Props> = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
                  <span>{type === "movie" ? "Movie" : "Series"}</span>
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
        src="https://upload.wikimedia.org/wikipedia/it/thumb/5/5c/Oxyg%C3%A8ne_%28film%29.png/2560px-Oxyg%C3%A8ne_%28film%29.png"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-2901-784.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRIc52fmNOGRmQmGWFVzgJKBQh7ua05BJyHQrl9xaqBTFcoMnE5oWkPcOHf8Yt6sEcLHt4wHVjj1Ikv6THKOPoZX3Ove0LHaPC1y6iImZjVohB1fLxQupv3drzrZWXcmVh9oo_QiwCIdzjQvMSbg-SlfDxBjVt7IVylj2eZGYFjVOgCXAp48dQ.png?r=46e"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          dolores nobis fuga asperiores ratione consectetur dolore vero
          consequatur, sunt nam quidem doloremque expedita quaerat eligendi modi
          distinctio quo magnam esse?
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

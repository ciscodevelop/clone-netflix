import "./home.scss";
import NavBar from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";
interface Props {
  type?: string;
}
const Home: React.FC<Props> = ({ type }) => {
  const [movieLists, setMovieLists] = useState([]);
  const [genre, setGenre] = useState();
  useEffect(() => {
    const getLists = async () => {
      //http://localhost:8800/api/lists?type="+type+"&genre="+genre
      const res = await axios.get("lists", {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTJiMGRhYmJiMThhNGU2Y2ViNWMyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTk4NzA3NCwiZXhwIjoxNjc2MDczNDc0fQ.p7E5w8R-a6XD5NT--qkXGXWa0d-i2-S_FexC9zouJDo",
        },
      });
      setMovieLists(res.data);
    };
    getLists();
  }, [type]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />

      {movieLists.map((list, i) => (
        <List movieLists={list} key={i} />
      ))}
    </div>
  );
};

export default Home;

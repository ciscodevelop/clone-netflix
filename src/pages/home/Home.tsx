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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTJiMGRhYmJiMThhNGU2Y2ViNWMyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTg5ODY1NywiZXhwIjoxNjc1OTg1MDU3fQ.g5l0cO5KHpoQYPMxRKcNI_0MWpmw_hN9XkOF_jNU9r0",
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

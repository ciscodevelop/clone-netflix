import "./home.scss";
import NavBar from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import Featured from "../../components/featured/futuredInfo/Featured";
import List from "../../components/list/List";
import { Http } from "../../shared/utils/httpWrapper/Http";
interface Props {
  type?: string;
}
const Home: React.FC<Props> = ({ type  }) => {
  const [movieLists, setMovieLists] = useState([]);
  const [genre, setGenre] = useState('comedy');
  
  useEffect(() => {
    var listType = '';
    type !== undefined ? listType = `?type=${type}&genre=${genre}` : listType = ''
    
    const getLists = async () => {     
      const res = await Http.get(`lists${listType}`, {
        headers: {
          token: "Bearer " + localStorage.getItem("token"),
        },
      });
      setMovieLists(res);
    };
    
    getLists();
  }, [type,genre]);

  return (
    <div className="home">
      <NavBar  />
      <Featured type={type} setGenre={setGenre}/>

      {movieLists.map((list, i) => (
        <List movieLists={list} key={i} />
      ))}
    </div>
  );
};

export default Home;

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useEffect, useRef, useState } from "react";

const List = ({movieLists}:any) => {
 
    const containerRef: any = useRef();
    const [distance, setDistance] = useState(0);
    // const itemsCount = 14;
    // const itemWidth = 230;
    // const maxRight = itemWidth * (itemsCount - 9);
    const [isMoved, setIsMoved] = useState(false)
    const [sliderNumber, setSliderNumber] = useState(0)
    useEffect(() => {
        containerRef.current.style.transform = `translateX(${distance}px)`;
      }, [distance]);
    
    const handleClick = (direction: string) => {
        setIsMoved(true);
         
       
        if (direction === "left" && sliderNumber > 0) {
             if (distance >= -230) {
                setIsMoved(false);
                //console.log(distance);
            }
            setSliderNumber(sliderNumber-1)
            setDistance(distance + 230);
             
        }
        if (direction === "right" && sliderNumber < 3) {
            setSliderNumber(sliderNumber + 1)
            
            setDistance(distance - 230 );
           
        }
      };

  return (
    <div className="list">
      <span className="list-title">{movieLists.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="slider-arrow left"
                  onClick={() => handleClick("left")}
                  style={isMoved ? { display: 'block' } : { display: 'none' }}
        />
        <div className="container" ref={containerRef}>
          {movieLists&& movieLists.content.map((listItem:any,i:any) =>
            <ListItem index={i} key={i} item={listItem } />
        )}
         
         
          
        </div>
        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

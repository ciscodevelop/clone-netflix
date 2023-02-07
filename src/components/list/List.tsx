import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useEffect, useRef, useState } from "react";

const List = () => {
   
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
      <span className="list-title">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="slider-arrow left"
                  onClick={() => handleClick("left")}
                  style={isMoved ? { display: 'block' } : { display: 'none' }}
        />
        <div className="container" ref={containerRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
         
          
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

import { useRef, useState } from "react";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log({ distance });

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }
    if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
    setIsMoved(true);
  };
  console.log({ slideNumber });
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: (!isMoved || slideNumber === 0) && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
          <ListItem index={13} />
          <ListItem index={14} />
          <ListItem index={15} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: slideNumber === 8 && "none" }}
        />
      </div>
    </div>
  );
};

export default List;

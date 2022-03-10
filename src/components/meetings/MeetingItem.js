import Card from "../ui/Card";
import classes from "./MeetingItem.module.css";
import { useContext } from "react";
import FavouriteContext from "../../context/favorites-context";

const MeetingItem = (props) => {
  const favCtx = useContext(FavouriteContext);
  const itemInFav = favCtx.itemInFav(props.id);

  const favHandler = () => {
    if (itemInFav) {
      favCtx.removeFromFav(props.id);
    } else {
      favCtx.addToFav({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt="url" />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={favHandler}>{itemInFav ? "Remove from Fav" : "Add to Fav"}</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetingItem;

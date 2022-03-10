import MeetingList from "../components/meetings/MeetingList";
import Card from "../components/ui/Card";
import FavouriteContext from "../context/favorites-context";
import {useContext} from "react";

const Favorites = () => {
    const favCtx = useContext(FavouriteContext)
    if(favCtx.totalFavourites === 0){
        return <p>No Favorites Found.</p>
    }
  return (
      <MeetingList meetups={favCtx.userFavorites}/>
  );
};

export default Favorites;

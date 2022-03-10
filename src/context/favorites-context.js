import React, { useState } from "react";

const FavouriteContext = React.createContext({
  userFavorites: [],
  totalFavourites: 0,
  addToFav: (meeting) => {},
  removeFromFav: (id) => {},
  itemInFav: (id) => {},
});

export const FavouriteContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavHandler = (meeting) => {
    setFavorites((prev) => prev.concat(meeting));
  };
  const removeFromFavHandler = (id) => {
    setFavorites((prev) => prev.filter((meetup) => meetup.id !== id));
  };

  const itemInFavHandler = (id) => {
      return favorites.some(meetup => meetup.id === id) 
  }

  const contextValue = {
      userFavorites: favorites,
      totalFavourites: favorites.length,
      addToFav: addToFavHandler,
      removeFromFav: removeFromFavHandler,
      itemInFav: itemInFavHandler
  };

  return (
    <FavouriteContext.Provider value={contextValue}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
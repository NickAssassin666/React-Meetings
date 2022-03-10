import { NavLink } from "react-router-dom";
import FavouriteContext from "../../context/favorites-context";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";

const MainNavigation = () => {
  const favCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meet</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.selected}>All Meetings</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetings" activeClassName={classes.selected}>Add Meetings</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={classes.selected}>
              Favorites <span>{favCtx.totalFavourites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import { Switch, Route } from "react-router-dom";
import AddMeetings from "./pages/AddMeetings";
import AllMeetings from "./pages/AllMeetings";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetings/>
        </Route>
        <Route path="/new-meetings"><AddMeetings /></Route>
        <Route path="/favorites"><Favorites /></Route>
      </Switch>
    </Layout>
  );
}

export default App;

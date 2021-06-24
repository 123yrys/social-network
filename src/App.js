import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from './components/Friends/Friends'
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  // let NavItem = props.item.map(m=><Route path="/messages" render={()=>m.menu_item} />)
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Nav store={props.store}></Nav>
        <div className="app-wrapper__content">
          {/* {NavItem} */}
          <Route path="/messages" render={()=><Messages store={props.store}/>}/>
          <Route path="/profile" render={()=><Profile store={props.store}/>}/>
          <Route path="/news" render={()=><News/>} />
          <Route path="/music" render={()=><Music/>} />
          <Route path="/settings" render={()=><Settings/>} />
          {/* <Route path="/friends" render={()=><Friends friends={props.store}/>} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

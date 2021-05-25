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
        <Nav friends={props.state}></Nav>
        <div className="app-wrapper__content">
          {/* {NavItem} */}
          <Route path="/messages" render={()=><Messages message={props.state} addMessage={props.addMessage} updateMessage={props.updateMessage}/>}/>
          <Route path="/profile" render={()=><Profile profile={props.state} addPost={props.addPost} updatePost={props.updatePost}/>}/>
          <Route path="/news" render={()=><News/>} />
          <Route path="/music" render={()=><Music/>} />
          <Route path="/settings" render={()=><Settings/>} />
          <Route path="/friends" render={()=><Friends friends={props.state}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Content from './components/Content/Index';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app-wrapper">
     <Header></Header>
      <Nav></Nav>
      <Content></Content>
    </div>
    
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
// import About from './pages/About';
// import Bookmark from './pages/Bookmarks/Bookmark';
// import BookmarkDetails from './pages/Bookmarks/BookmarkDetails';
// import Article from './pages/Articles/Article';
// import ArticleDetails from './pages/Articles/ArticleDetails';
import NotFound from './pages/NotFound';

function App() {
  // const LoggedIn = true
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

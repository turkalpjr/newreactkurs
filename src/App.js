
import Navbar from './Navbar';
import Anasayfa from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {

  const baslik = "AOS BLOG"
  let okunmaSayisi = 300;
  const blog = { ad: "ilk", aciklama: "ilk aciklama" };
  const link = "www.google.com"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Anasayfa />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

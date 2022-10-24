 
import Navbar from './Navbar';
import Anasayfa from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 



function App() {

  const baslik="AOS BLOG"
  let okunmaSayisi=300;
  const blog= {ad:"ilk",aciklama:"ilk aciklama"} ;
  const link= "www.google.com"

  return (
         <Router>
    <div className="App">
          <Navbar/>
          <div className="content">
             {/* <Anasayfa></Anasayfa> */}
                 <Switch>
                  <Route path="/create">
                       <Create/>

                    <Anasayfa/>
                  </Route>

                 </Switch>


          </div>
    </div>
         </Router>
  );
}

export default App;

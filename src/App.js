 
import Navbar from './Navbar';
import Anasayfa from './Home';


function App() {

  const baslik="AOS BLOG"
  let okunmaSayisi=300;
  const blog= {ad:"ilk",aciklama:"ilk aciklama"} ;
  const link= "www.google.com"

  return (
    <div className="App">
          <Navbar/>
          <div className="content">
             <Anasayfa></Anasayfa>
          </div>
    </div>
  );
}

export default App;

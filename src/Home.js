import { useState,useEffect } from "react";
import BlogList  from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
   

   const{veri:blogs,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar')
 
  

   return (
      <div className="home">

         {hata && <div className="error">{hata}</div>}
         {yukleniyor && <div className="loading"> Yukleniyor..</div>}
                 {blogs&&<BlogList bloglar={blogs} baslik="Tüm yazılar"
                      /> }
 
      </div>
   );
}
export default Home;



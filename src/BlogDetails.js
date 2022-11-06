import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {


    const {id}=useParams();
    const history=useHistory();
    const {veri:blog,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar/'+id);
    
    const handleDelete=()=>{
        fetch("http://localhost:8000/yazilar/"+id,{
            method:'DELETE'
        }).then(()=>{
            console.log('silindi..');
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {yukleniyor && <div> Yükleniyor...</div>}
            {hata&& <div>{hata}</div>}
            {blog&&(
               <article>
                <h2>{blog.ad}</h2>
                <p>Yazar: {blog.yazar}</p>
                <div>{blog.aciklama}</div>
                <button onClick={handleDelete}>Sil</button>
               </article>

            )}
        </div>
    );
}

export default BlogDetails;
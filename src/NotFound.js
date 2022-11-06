import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Yalnış sayfa</h2>
            <p>sayfa bulunamadı</p>
            <Link to="/">Anasayfa</Link>
        </div>
    );
}

export default NotFound;
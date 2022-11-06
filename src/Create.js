import { useState } from 'react';
import {useHistory} from 'react-router-dom';





const Create = () => {


    const [baslik, setBaslik] = useState('');
    const [aciklama, setAciklama] = useState('');
    const [yazar, setYazar] = useState('luffy');

    const [yukleniyor, setYukleniyor] = useState(false);

    const history= useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        setYukleniyor(true);

        const yazi = { ad: baslik, aciklama, yazar };

        fetch('http://localhost:8000/yazilar/', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(yazi)
        }).then(() => {
            console.log("yazi eklendi!")
            setYukleniyor(false);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}> Yeni Yazı Ekle
            </h2>

            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık: </label>
                <input type="text" required value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                <label>Yazı Açıklama:</label>
                <textarea value={aciklama} onChange={(e) => setAciklama(e.target.value)} required></textarea>
                <label>Yazar:</label>
                <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
                    <option value="luffy">Luffy</option>
                    <option value="zoro">Zoro</option>
                    <option value="sanji">Sanji</option>
                </select>
              {!yukleniyor&&   <button>Ekle</button>}
              {yukleniyor&&   <button disabled>Yukleniyor</button>}
                {baslik}
                {aciklama}
                {yazar}


            </form>

        </div>
    );
}

export default Create;

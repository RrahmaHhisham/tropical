


import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

    function Fav({ favorites, setFavorites, addToCart }) {

    // useEffect(() => {
    //     const storedFavorites = localStorage.getItem("favorites");
    //     if (storedFavorites) {
    //         setFavorites(JSON.parse(storedFavorites));
    //     }
    // }, []);
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [setFavorites]);

    const removeFromFavorites = (product) => {
        const updatedFavorites = favorites.filter((item) => item.name !== product.name);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
    };

    return (
        <div className='fav row m-0'>
            <div className='title-header col-md-11'>
                <p>المفضلة</p>
            </div>
            <div className='fav-cards col-md-11'>
                {favorites.length === 0 ? (
                    <p>لا توجد عناصر في المفضلة.</p>
                ) : (
                    favorites.map((item, index) => (
                        <div className="card" style={{ width: '18rem' }} key={index}>
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.price}$</p>
                                <div className='cart'>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="btn btn-primary">
                                        اضف الى السلة
                                    </button>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className='heart-icon-active cursor-pointer'
                                        onClick={() => removeFromFavorites(item)} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Fav;

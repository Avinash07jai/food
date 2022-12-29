import React from 'react';
import './FoodCard.css';

const FoodCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        menuData.map((currentElement) => {
                            return (

                                <div className='col-4' key={currentElement.id}>
                                    <div className=' card'>
                                        <div className='card-body'>
                                            <span className='card-circle'>{currentElement.id} </span>
                                            <span className='subtitle'>{currentElement.name} </span>
                                            <h2 className='card-title'>{currentElement.name}</h2>
                                            <span className='card-description'>{currentElement.description}
                                            </span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        <img src={currentElement.image} />
                                        <span className='card-order'>Order Now</span>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FoodCard;

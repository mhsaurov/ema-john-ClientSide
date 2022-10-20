import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCoffee,faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Reviewitems.css';

const Reviewitem = ({product,handleremoveitems}) => {
    const {id,name,price,quantity,shipping,img} = product;
    return (
        
        <div className='reviewitems'>
           <div>
           <img src= {img} alt="" />
           </div>
           <div className='review-detiels-container'>
            <div  className='review-detiels'>
                <h6>{name}</h6>
                <p><small>price : <span className='color'> {price}</span></small></p>
                <p><small>shipping : <span className='color'> {shipping}</span></small></p>
                <p><small>Quentity : <span className='color'>{quantity}</span></small></p>

            </div>
            <div className='delet-container'>
               <button onClick={() => handleremoveitems(id)} className='btn-delet'>
               <FontAwesomeIcon className='delet-icon' icon={faTrash}></FontAwesomeIcon>
               </button>
            </div>
           </div>
        </div>  
    );
};

export default Reviewitem;
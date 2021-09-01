import './Store.css';
import { useEffect } from 'react';


export default function Store(props){
    console.log(props.Form_data)
    return(
        <>{
            props.Form_data.length>0? props.Form_data.map((item,i)=>{
                return (
                    <div className="main-store-div" key={i}>
            <div className="image" >
                <img alt="Foto not Found" src={item.Foto} width="200px" height="200px"></img>
            </div>
            <div className="description" >
                <h3 className="priceHeading" >$ |{item.Price} </h3>
                <div className="Detail" >{item.description}</div>
            </div>
            <button id="AddCartButton" >Add To Cart</button>
            </div>    
                )
            }):'Empty data'
            
        }        
        </>
    )
} 
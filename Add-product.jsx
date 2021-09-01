import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import Store from "./Store";
import { NavLink } from "react-router-dom";
import pic from './Phuto.jpg';

//----------------------------------------------------------------------------------------
//--------------------------------------CODE GOES HERE--------------------------------------
//------------------------------------------------------------------------------------------
const disappear=()=>{
    const show = document.getElementById("show");
    show.style.display = 'none';
}

export default function Add_product(){

    //--------------------------------------------------
    //----------------STATES HADLING-----------------
    //--------------------------------------------------
     //this is state for storing User schema or object value
     const [preview,setPreview]=useState();
     const [FormValue, setFormValue] = useState({
        Price:'100',
        description:'Here is my text'
    });

    //this is for printing data on screen of frontend
    const [Formdata,setFormdata] = useState([]);
    // useEffect(
    //     ()=>{
    //         axios.get('http://localhost:8000')
    //         .then( (res)=>{
    //             setFormdata(res.data)
    //         } )
    //     }
    // )
    
    const [image,setImage]=useState();
    
    useEffect( ()=>{
        const reader = new FileReader();
        if(image){
            reader.onloadend=()=>{
                setPreview(reader.result); 
            }
            reader.readAsDataURL(image);
        }
    },[image] )
//------------------------------------------------------
//---------------Handle Functions=----------------------
//-------------------------------------
    const handleInput=(e)=>{
        const {name,value} = e.target;

        setFormValue(
            (prevVal)=>{
                return {...prevVal,[name]:value  }
            }
        )
    }
    const Onsubmitform=(e)=>{
        e.preventDefault();
       
        const userdata_insidefunction = {
            Price:FormValue.Price,
            description:FormValue.description,
            Foto:preview
            };
        
       const NewFormData = [...Formdata,userdata_insidefunction];
       
       setFormdata(NewFormData);
    // axios.post('http://localhost:8000/create',NewFormData)
    // .then( res=> console.log(res.data) )
    // .catch(err=>console.log(err))

        };
        console.log(Formdata)
  return (
      <>
    <div id="show" className="promptBox">
        <button id="close" onClick={disappear}>X</button>
        <div id="inner_box">
            <form onSubmit={Onsubmitform}>
                <label>Price</label>
                <input type="text"
                    name="Price"
                    value={FormValue.Price}
                    onChange={handleInput}
                 /><br/>
                <label>Description</label>
                <textarea cols="10" rows="10"
                name="description"
                value={FormValue.description}
                 onChange={handleInput} ></textarea>
                <br/>
                <input type="file"
                 onChange={(e)=>{
                     const file = e.target.files[0];
                     if(file){
                         setImage(file)
                     }
                     else{
                         setImage(null)
                     }
                 }}
                 
                 />
                 <img src={preview} width="100px" height="100px"/>
                 <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
    <Store Form_data={Formdata}/>
    </>
  );

}
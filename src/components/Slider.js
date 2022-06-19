import React, {useState} from "react";
// import SliderItems from "./SliderItems";
import NavBar from './NavBar';
import bovino1 from '../img/bovino1.jpg';
import bovino2 from '../img/bovino2.jpg';
import bovino3 from '../img/bovino1.png';
import bovino4 from '../img/bovino2.png';
import "../Slider.css";

const Slider = () => {
    const [values, setValues] = useState("");
    const [indice, setIndice] = useState(0);
    const images = [bovino1, bovino2, bovino3, bovino4];
    const indiceTemporal = indice;

    setTimeout(() => {
        if(indice < images.length - 1)
            setIndice(indiceTemporal + 1);
        else
            setIndice(0);
    }, 3000);

    const handleChange = (e) => {
        setValues(e.target.value);
    };
    return (
        <>
            <NavBar />
            <div className="slider">
            <img className="sliderImg" src={images[indice]}/>
            {/* <h3> {values} </h3>
            <input onChange={handleChange} type="text" />
            <SliderItems values={values} /> */}
            </div>
        </>

    )
}

export default Slider;
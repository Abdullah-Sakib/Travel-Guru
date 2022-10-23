import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import images from "../../../assets/images/images";
import "./ImageSlider.css";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";


const ImageSlide = () => {
  const [width, setWidth] = useState(0);
  const [id, setId ] = useState(0);
  const {setDestination} = useContext(AuthContext);

  const carouselRef = useRef();
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const btnClick = (id) => {
    setId(id);
  }

  useEffect(()=> {
    fetch( `https://travel-guru-server-abdullah-sakib.vercel.app/destination/${id}`)
    .then(res => res.json())
    .then(data => setDestination(data))
  },[id, setDestination])

  return (
    <div>
      <motion.div ref={carouselRef} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, idx) => {
            return (
              <motion.div key={idx} className="item ">
               <button onClick={()=>btnClick(idx)}><img className="border-3" src={image} alt="" /></button>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlide;

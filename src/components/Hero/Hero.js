import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import hero from "../../images/hero.jpeg";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const [categories, setCategories] = useState([]);

  const fetchcategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");
      const data1 = await response.json();
      setCategories(data1.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchcategories();
  }, []);
  // const location = useLocation();
  // const data = location.state;
  return (
    <div className="hero-container">
      <nav class="flex justify-around bg-white p-6">
        <div class="flex justify-around w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div class="text-lg lg:flex-grow font-bold ">
          {
            categories &&
            categories.map((category) => (
                <a
                    href={`#${category.name}`}
                    class="block mt-4 lg:inline-block lg:mt-0 text-Black hover:text-[#9b2130] mr-8 transition-all[0.3s]"
                >
                    {category.name}
                </a>
            ))
          }
          </div>
        </div>
      </nav>
      <img className="hero-img" src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
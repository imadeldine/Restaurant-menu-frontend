import React, { useState, useEffect } from "react";
import Card from "./Card";
import Carousel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";

const AllSections = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchitems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/items");
      const data = await response.json();
      console.log(data);
      setItems(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchcategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");
      const data1 = await response.json();
      setCategories(data1.data);
      navigate('/',{state:data1.data})
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchitems();
    fetchcategories();
  }, []);

  return (
    <div className="salad-container">
      <div className="salad-card-container">
        {categories &&
          categories.map((category) => (
            <div id={category.name}>
              <h4 class="pt-8 mb-5 text-2xl pb-2">
                <strong>{category.name}</strong>
              </h4>
              <Carousel show={3}>
                {items &&
                  items
                    .filter((ele) => ele.category._id === category._id)
                    .map((item) => (
                      <Card
                        key={item.id}
                        item={item}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                      />
                    ))}
              </Carousel>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllSections;

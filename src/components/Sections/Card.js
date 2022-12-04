import React from "react";

const SaladCard = (props) => {
  // const bg = {
  //   backgroundImage: `url(http://localhost:5000/${props.image.split("/")[1]})`,
  // };

  return (
    <div class="flex justify-center pb-10">
      <div class="rounded-lg shadow-lg bg-white max-w-sm relative ">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg"
            src={`http://localhost:5000/${props.image.split("/")[1]}`}
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{props.name}</h5>
          <p class="text-gray-700 text-base mb-4">{props.description}</p>
          <div class="flex items-center">
            <div class="absolute bottom-3 right-10">
              <strong >Price: {props.price} </strong>
              <strong>$</strong>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SaladCard;

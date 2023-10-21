import React from "react";

function ItemCard({ name, img }) {
  return (
    <div className=" max-w-[350px] w-[90%] h-[430px] bg-[#4b1818] mb-20 ml-auto mr-auto drop-shadow-md">
      <img
        className="w-[100%] h-[340px] object-cover"
        src={img}
        alt={name + " Image"}
      />
      <h3 className="text-white text-center text-3xl mt-[25px]">{name}</h3>
    </div>
  );
}

export default ItemCard;

import React from "react";
import imgPoster from "../Assets/Images/poster.jpg";
import ItemCard from "../components/ItemCard";

function HomePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&display=swap"
        rel="stylesheet"
      ></link>
      <div className=" bg-gradient-to-br from-[#2D1C1C] to-[#0f0a0a] w-[100%] text-center font-custom">
        <div className="relative desktop:h-[40rem] h-[30rem] bg-black">
          <img
            className="object-cover w-screen h-[30rem] desktop:h-[40rem] opacity-60 "
            src={imgPoster}
            alt="poster"
          />
          <div className="absolute mt-[-5rem] inset-0 flex items-center justify-center">
            <h1 className="text-5xl tablet:text-6xl desktop:text-7xl text-white text-center font-medium drop-shadow-2xl">
              The House Of <br />
              Cuisine
            </h1>
            <a
              href="tel:5125778709"
              className="absolute mt-64 p-12 pt-3 pb-3 bg-[#33BCE8] rounded-xl text-2xl font-medium text-white drop-shadow-md hover:bg-gradient-to-br hover:from-orange-600 hover:to-pink-500"
            >
              Start Ordering
            </a>
          </div>
        </div>

        <h2 className="text-center text-white text-3xl p-10">Our Specialty</h2>
        <div className="p-5 grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
          <ItemCard
            name="Mutton Curry"
            img={require("../Assets/Images/muton.png")}
          />
          <ItemCard
            name="Masala Chicken"
            img={require("../Assets/Images/chicken_curry.jpg")}
          />
          <ItemCard
            name="Chicken Biriyani"
            img={require("../Assets/Images/biriyani.jpg")}
          />
          <ItemCard
            name="Paplet Fish"
            img={require("../Assets/Images/paplet_fish.jpg")}
          />
          <ItemCard
            name="Fry Chicken"
            img={require("../Assets/Images/chicken.jpg")}
          />
        </div>
        <h2 className="text-center text-white text-3xl p-10">What We Offer</h2>
        <div className="p-5 grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
          <ItemCard
            name="Patudi"
            img={require("../Assets/Images/patudi.jpg")}
          />
          <ItemCard
            name="Khaman"
            img={require("../Assets/Images/khaman.webp")}
          />
          <ItemCard
            name="Idra Dhokla"
            img={require("../Assets/Images/idra.jpg")}
          />
          <ItemCard
            name="Gulab Jamun"
            img={require("../Assets/Images/gulab.jpg")}
          />
        </div>
        <a
          href="tel:5125778709"
          className=" p-12 pt-3 pb-3 mb-10 bg-[#33BCE8] rounded-xl text-2xl font-medium text-white drop-shadow-md hover:bg-gradient-to-br hover:from-orange-600 hover:to-pink-500"
        >
          Contact Us
        </a>
        <h2 className="text-center text-white text-3xl pb-2 mt-20">
          Dallas, TX
        </h2>
        <p className="text-center text-xl text-[#C5C0C0]">
          Yes, Cow Boyz! We are in your town!
        </p>
        <footer className="w-scree bg-[#210909] mt-20 rounded-tr-[30px] rounded-tl-[30px] p-5">
          <p className="text-center text-xl text-[#C5C0C0] pt-10">
            Call Us Anytime:
          </p>
          <a href="tel:5125778709" className="text-center text-white text-3xl">
            512-577-8709
          </a>

          <p className="text-center text-lg font-serif text-[#C5C0C0] pt-10">
            About Us:
          </p>
          <p className="text-center text-lg font-serif text-[#C5C0C0]">
            Remember we require pre-orders! We do catering service. We even
            deliver within 25 miles.
          </p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;

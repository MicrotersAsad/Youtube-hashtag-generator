import Image from "next/image";
import React from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import Slider from "react-slick";
import avatarMale from "../public/img/img_avatar.png";
import avatarFemale from "../public/img/img_avatar2.png";

const Review = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const reviews = [
    {
      avatar: avatarMale,
      name: "John Smith",
      feedback: "The hashtag generator streamlined my video tagging process! It's so intuitive and effective.",
    },
    {
      avatar: avatarFemale,
      name: "Arita Saha",
      feedback: "Thanks to the hashtag generator, my videos are now getting more views and engagement!",
    },
    {
      avatar: avatarMale,
      name: "David Watson",
      feedback: "A must-have tool for any content creator. The hashtag suggestions are spot on!",
    },
    {
      avatar: avatarFemale,
      name: "Alegabeth Dues",
      feedback: "Love how easy it is to find trending hashtags for my niche. Highly recommend this tool!",
    },
    {
      avatar: avatarMale,
      name: "Nure Tapos",
      feedback: "The advanced analytics feature gives me insight into which tags perform best. Fantastic!",
    },
    {
      avatar: avatarFemale,
      name: "Anuska Sharma",
      feedback: "This tool has changed how I optimize my videos. It's incredibly user-friendly!",
    },
  ];

  return (
    <div id="review" className="bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-8">Our Clients Say</h2>

      <div className="hidden md:block">
        {/* Grid Layout */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg bg-white text-center p-6 space-y-4"
            >
              <div className="flex justify-center">
                <Image
                  src={review.avatar}
                  className="rounded-full w-24 h-24 object-cover"
                  alt={`Avatar of ${review.name}`}
                />
              </div>
              <p className="text-gray-600 mt-4">{review.feedback}</p>
              <div className="flex justify-center text-yellow-400 mt-4">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarHalf />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        {/* Slider Layout */}
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg bg-white text-center p-6 space-y-4"
            >
              <div className="flex justify-center">
                <Image
                  src={review.avatar}
                  className="rounded-full w-24 h-24 object-cover"
                  alt={`Avatar of ${review.name}`}
                />
              </div>
              <p className="text-gray-600 mt-4">{review.feedback}</p>
              <div className="flex justify-center text-yellow-400 mt-4">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarHalf />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{review.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;

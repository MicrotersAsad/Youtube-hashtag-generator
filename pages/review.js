import React from "react";
import Head from "next/head";
import about from "../public/about.jpg";
import Image from "next/image";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import Slider from "react-slick";
import avatarMale from "../public/img/img_avatar.png";
import avatarFemale from "../public/img/img_avatar2.png";

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

const About = () => {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Client Say - YouTube Hashtag Generator</title>
        <meta 
          name="description" 
          content="Learn more about YouTube Hashtag Generator. Discover how we help content creators boost video visibility with optimized, trending hashtags for YouTube SEO." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youtube-hashtag-generator-w6pt.vercel.app/review" />
        <meta property="og:title" content="Client Say - YouTube Hashtag Generator" />
        <meta 
          property="og:description" 
          content="Learn more about YouTube Hashtag Generator. Discover how we help content creators boost video visibility with optimized, trending hashtags for YouTube SEO." 
        />
        <meta property="og:image" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
        <meta property="og:image:secure_url" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
        <meta property="og:site_name" content="YouTube Hashtag Generator" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="youtube-hashtag-generator-w6pt.vercel.app" />
        <meta property="twitter:url" content="https://youtube-hashtag-generator-w6pt.vercel.app/review" />
        <meta name="twitter:title" content="Client Say - YouTube Hashtag Generator" />
        <meta 
          name="twitter:description" 
          content="Learn more about YouTube Hashtag Generator. Discover how we help content creators boost video visibility with optimized, trending hashtags for YouTube SEO." 
        />
        <meta name="twitter:image" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
        <meta name="twitter:site" content="@ytubetools" />
        <meta 
          name="twitter:image:alt" 
          content="About YouTube Hashtag Generator - Your partner in optimizing YouTube content with trending hashtags." 
        />
      </Head>
      <div id="about" className="p-5 container text-white">
        <h2 className="text-center text-3xl fw-bold headline p-3">About Us</h2>
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className="col-md-6">
              <Image
                src={about}
                width={500}
                height={300}
                alt="Client Say Image"
              />
            </div>
            <div data-aos="fade-up" className="col-md-6 pt-5">
              <h2 className="fw-bold">Welcome to YouTube Hashtag Generator</h2>
              <p>
                At <span className="fw-bold text-primary">YouTube Hashtag Generator</span>, we aim to make it easier for creators to find the most effective and trending hashtags for their videos. Whether you're just starting out or are a seasoned creator, having the right hashtags can make a significant difference in your video's discoverability and engagement.
              </p>
              <p>
                Our tool generates optimized hashtags tailored to your content, helping you connect with the right audience. By leveraging trending topics and keywords, you can ensure your videos reach a wider audience and stay relevant in the ever-changing landscape of YouTube.
              </p>
              <p>
                With the power of AI and data-driven insights, our hashtag generator ensures your tags are relevant, engaging, and impactful. Save time, boost discoverability, and drive more traffic to your channel with our tool.
              </p>
              <p>
                Whether you're looking for niche hashtags, SEO-friendly suggestions, or simply a way to enhance your video's visibility, <span className="fw-bold text-primary">YouTube Hashtag Generator</span> is here to help you achieve your goals effortlessly.
              </p>
              <p>
                Join us in revolutionizing the way creators use hashtags to amplify their content's reach and impact!
              </p>
            </div>
          </div>

          <h3 className="fw-bold text-3xl text-center mt-5">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Trending Hashtags",
                content: "Discover the latest and most relevant hashtags for your niche.",
                icon: "📈",
                color: "bg-blue-500",
              },
              {
                title: "SEO Optimization",
                content: "Boost your video's search ranking with SEO-focused hashtags.",
                icon: "🔍",
                color: "bg-green-500",
              },
              {
                title: "Save Time",
                content: "Generate high-quality hashtags instantly for faster uploads.",
                icon: "⏱️",
                color: "bg-purple-500",
              },
              {
                title: "Enhance Engagement",
                content: "Use hashtags to attract and connect with the right audience.",
                icon: "🤝",
                color: "bg-yellow-500",
              },
              {
                title: "Stay Relevant",
                content: "Keep up with YouTube's ever-changing trends effortlessly.",
                icon: "🌟",
                color: "bg-pink-500",
              },
              {
                title: "Easy to Use",
                content: "User-friendly interface to make hashtag generation a breeze.",
                icon: "👍",
                color: "bg-red-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className={`p-5 rounded-lg text-white shadow-lg hover:scale-105 transform transition-all duration-300 ${item.color}`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </>
  );
};

export default About;

import React from "react";
import about from "../public/about.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="p-5 container text-white">
      <h2 className="text-center text-3xl fw-bold headline p-3">About Us</h2>
      <div className="container">
        <div className="row">
          <div data-aos="fade-right" className="col-md-6">
            <Image
              src={about}
              width={500}
              height={300}
              alt="About Us Image"
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
  );
};

export default About;

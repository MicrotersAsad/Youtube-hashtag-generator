import { useState } from "react";
import axios from "axios";
import { FaCopy, FaDownload } from "react-icons/fa";

import HowTouse from "../public/how to use.png"
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [generatedTags, setGeneratedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [videoDescription, setVideoDescription] = useState("");
  const [tone, setTone] = useState("formal");
  const [language, setLanguage] = useState("english");
  const [selectAll, setSelectAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const steps = 
    [
      {
        "number": "1",
        "title": "Tell us about your video",
        "description": "Provide information about the video you want to analyze or monitor."
      },
      {
        "number": "2",
        "title": "Select Tone For Keywords",
        "description": "Choose the tone or sentiment you want to focus on for keyword monitoring."
      },
      {
        "number": "3",
        "title": "Select Language For Keywords",
        "description": "Specify the language you want to use for keyword analysis."
      },
      {
        "number": "4",
        "title": "Click Generate Button",
        "description": "Initiate the process to monitor forms when they are submitted, abandoned, or broken."
      }
    ]
    
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const generateTags = async (e) => {
    e.preventDefault();
    if (!videoDescription) {
      alert("Please enter a video description.");
      return;
    }
  
    setIsLoading(true);
  
    const url = "https://nazmul.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-08-01-preview";
    const headers = {
      "Content-Type": "application/json",
      "api-key": "7fSJmNQCSnO0E6cIpqJF17NSRC7n0fWsnUL3F2JhIr5Z5TZVFoVcJQQJ99AKACHYHv6XJ3w3AAABACOGdAEc" // Use environment variable for API key
    };
    const body = {
      messages: [
        {
          role: "system",
          content: `Generate a list of at least 10 SEO-friendly tags for keywords: "${videoDescription}" in this language ${language}.`,
        },
        { role: "user", content: videoDescription },
      ],
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    };
  
    try {
      const response = await axios.post(url, body, { headers });
      // Check if data has choices or a similar property based on the API type
      if (response.data && response.data.choices && response.data.choices.length > 0) {
        const generatedTags = response.data.choices[0].message.content
          .trim()
          .split("\n")
          .map(tag => ({ text: tag.trim(), selected: false }));
        setGeneratedTags(generatedTags);
      }
    } catch (error) {
      console.error('Error generating tags:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAll = () => {
    const updatedTags = generatedTags.map(tag => ({ ...tag, selected: !selectAll }));
    setGeneratedTags(updatedTags);
    setSelectAll(!selectAll);
  };

  const toggleTagSelect = (index) => {
    const updatedTags = [...generatedTags];
    updatedTags[index].selected = !updatedTags[index].selected;
    setGeneratedTags(updatedTags);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const copySelectedTags = () => {
    const selectedTags = generatedTags.filter(tag => tag.selected).map(tag => tag.text).join(", ");
    navigator.clipboard.writeText(selectedTags);
  };

  const downloadSelectedTags = () => {
    const selectedTags = generatedTags.filter(tag => tag.selected).map(tag => tag.text).join(", ");
    const element = document.createElement("a");
    const file = new Blob([selectedTags], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tags.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div className="mx-auto max-w-5xl mt-5 mb-5 p-2">
      <Head>
  {/* SEO Meta Tags */}
  <title>AI YouTube Hashtag Generator</title>
  <meta 
    name="description" 
    content="Enhance your YouTube video performance with the AI YouTube Hashtag Generator. Create trending, optimized hashtags to boost SEO, reach your target audience, and maximize engagement. Start generating tags today to see your video views grow!" 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://youtube-hashtag-generator-w6pt.vercel.app/" />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://youtube-hashtag-generator-w6pt.vercel.app/" />
  <meta property="og:title" content="AI YouTube Hashtag Generator" />
  <meta 
    property="og:description" 
    content="Enhance your YouTube video performance with the AI YouTube Hashtag Generator. Create trending, optimized hashtags to boost SEO, reach your target audience, and maximize engagement. Start generating tags today to see your video views grow!" 
  />
  <meta property="og:image" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
  <meta property="og:image:secure_url" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
  <meta property="og:site_name" content="Ytubetools" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="youtube-hashtag-generator-w6pt.vercel.app" />
  <meta property="twitter:url" content="https://youtube-hashtag-generator-w6pt.vercel.app/" />
  <meta name="twitter:title" content="AI YouTube Hashtag Generator" />
  <meta 
    name="twitter:description" 
    content="Enhance your YouTube video performance with the AI YouTube Hashtag Generator. Create trending, optimized hashtags to boost SEO, reach your target audience, and maximize engagement. Start generating tags today to see your video views grow!" 
  />
  <meta name="twitter:image" content="https://ytubetools.s3.eu-north-1.amazonaws.com/uploads/1734954706609-tag-generator.png" />
  <meta name="twitter:site" content="@ytubetools" />
  <meta 
    name="twitter:image:alt" 
    content="A preview of AI YouTube Hashtag Generator with a clean and simple design for optimizing your YouTube video hashtags." 
  />
</Head>

        <h2 className="font-extrabold text-[18px] leading-[22px] tracking-[0.4em] uppercase text-center text-[#9597ff] relative z-20 bg-clip-text">
          AI YOUTUBE VIDEO HashTag TOOL
        </h2>
        <h1 className="text-white text-[36px] leading-[43px] md:text-[56px] md:leading-[60px] text-center mt-8 relative z-20">
          Save Time Generating YouTube Tags with our Video HashTag Generator
        </h1>
        <p className="mt-8 text-[#C7CBD5] text-center text-[18px] leading-[22px] md:text-[22px] md:leading-[28px] font-normal lg:max-w-[1000px] relative z-20">
          Effortlessly generate HashTags for your videos using our YouTube Hashtag generator, built to help you find the most relevant tags in seconds.
        </p>

        <div className="flex flex-col bg-[#171C29] px-4 py-6 md:p-6 md:pb-[34px] border-[2px] border-[rgba(161,174,210,0.24)] rounded-[16px] mt-10 w-full lg:min-w-[860px] relative z-20 shadow-[8px_32px_32px_-8px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6 w-full" onSubmit={generateTags}>
            <label className="text-white text-sm font-bold mb-2" htmlFor="language">Video Description:</label>
            <textarea
              className="flex-grow text-[#C7CBD5] bg-[#0D111B] p-3 rounded-lg h-[54px] pl-6 w-full focus:outline-none"
              name="idea"
              placeholder="Tell us about your video..."
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
            />
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-white text-sm font-bold mb-2" htmlFor="tone">Tone:</label>
                <select
                  id="tone"
                  name="tone"
                  className="bg-[#0D111B] text-[#C7CBD5] rounded-lg h-[54px] px-4 w-full focus:outline-none border border-gray-500"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="formal">Formal</option>
                  <option value="informal">Informal</option>
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-white text-sm font-bold mb-2" htmlFor="language">Language:</label>
                <select
                  id="language"
                  name="language"
                  className="bg-[#0D111B] text-[#C7CBD5] rounded-lg h-[54px] px-4 w-full focus:outline-none border border-gray-500"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="zh-HANT">中国传统的</option>
                  <option value="zh-HANS">简体中文</option>
                  <option value="italiano">Italiano</option>
                  <option value="japan">日本語</option>
                  <option value="korean">한국어</option>
                  <option value="polski">Polski</option>
                  <option value="português">Português</option>
                  <option value="español">Español</option>
                </select>
              </div>
            </div>
            <button
              className="text-center appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out focus:outline-none inline-flex items-center justify-center shadow-button focus:ring-4 font-bold px-6 py-[14px] text-lg leading-[18px] text-[#0D111B] active:!bg-[#139dff] bg-[#38b5fe] hover:!bg-[#139dff] hover:!text-[#0D111B] rounded-[100px] w-full md:w-auto"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate"}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        {generatedTags.length > 0 && (
          <div className="generated-titles-container mt-10">
            <div className="select-all-checkbox flex items-center mb-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="mr-2"
              />
              <span>Select All</span>
            </div>
            {generatedTags.map((tag, index) => (
              <div key={index} className="title-checkbox flex items-center bg-[#0D111B] text-black px-4 py-2 rounded-lg border border-gray-500 mb-2">
                <input
                  className="me-2"
                  type="checkbox"
                  checked={tag.selected}
                  onChange={() => toggleTagSelect(index)}
                />
                <span className="flex-grow">{tag.text}</span>
                <FaCopy
                  className="copy-icon ml-2 text-blue-500 hover:text-blue-300 cursor-pointer"
                  onClick={() => copyToClipboard(tag.text)}
                />
              </div>
            ))}
            {generatedTags.some((tag) => tag.selected) && (
              <div className="flex justify-center mt-4">
                <button className="btn btn-primary bg-[#38b5fe] text-[#0D111B] px-4 py-2 rounded-lg font-bold mr-2" onClick={copySelectedTags}>
                  Copy All Tags <FaCopy />
                </button>
                <button className="btn btn-primary bg-[#38b5fe] text-[#0D111B] px-4 py-2 rounded-lg font-bold ms-2" onClick={downloadSelectedTags}>
                  Download Tags <FaDownload />
                </button>
              </div>
            )}
          </div>
        )}

        <div id="Howitworks" className="shadow-lg mt-20">
        <h3 className="text-white text-[26px] leading-[43px] font-semibold md:text-[36px] md:leading-[60px] text-center mt-8 relative z-20">
        How To Youtube HashTag Generator works?
        </h3>
        <Image src={HowTouse} alt="How To use" width={1200}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <span className="text-4xl font-bold text-gray-300">{step.number}</span>
          <h3 className="text-xl font-semibold text-white mt-2">{step.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{step.description}</p>
        </div>
      ))}
    </div>
        </div>

        <h3 className="text-[28px] leading-[36px] md:text-[34px] font-black md:leading-[41px] mt-5 mb-4 text-white text-center">Are YouTube video Hashtags important?</h3>
        <p className="text-lg leading-[25px] text-gray-300 mt-6">
          While YouTube video tags have historically been important, they recently have played less of a role in a video‘s success. Tags may influence your video‘s visibility and discoverability, but we recommend that you focus on creating 
          interesting video ideas
          and finding the 
          perfect video title.
        </p>
        <div className="mt-20"> 
  <h2 className="text-2xl font-bold text-white text-center mb-6">
    YouTube Hashtag Generator Best Practices:
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Relevance",
        content: "Ensure your hashtags are directly relevant to your video content. Irrelevant hashtags may confuse viewers and negatively affect engagement.",
        borderColor: "border-[#FF6A6A]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(255,106,106,0.4)]"
      },
      {
        title: "Keyword Integration",
        content: "Use popular and relevant keywords as hashtags to make your video more discoverable.",
        borderColor: "border-[#6A9EFF]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(106,158,255,0.4)]"
      },
      {
        title: "Trending Hashtags",
        content: "Incorporate trending hashtags that align with your video topic to attract a wider audience.",
        borderColor: "border-[#FFD36A]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(255,211,106,0.4)]"
      },
      {
        title: "Specificity",
        content: "Use specific and niche hashtags to reach the right audience and stand out among competitors.",
        borderColor: "border-[#6AFF8F]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(106,255,143,0.4)]"
      },
      {
        title: "Avoid Overuse",
        content: "Limit the number of hashtags to avoid clutter and maintain focus on the most important ones.",
        borderColor: "border-[#FF6AFF]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(255,106,255,0.4)]"
      },
      {
        title: "Monitor Performance",
        content: "Regularly review hashtag performance and update them based on viewer behavior and trends.",
        borderColor: "border-[#6AFFE9]",
        shadowColor: "shadow-[0_4px_12px_0_rgba(106,255,233,0.4)]"
      }
    ].map((item, index) => (
      <div
        key={index}
        className={`p-4 bg-[#0D111B] border ${item.borderColor} rounded-lg text-white ${item.shadowColor}`}
      >
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm leading-6 text-gray-300">{item.content}</p>
      </div>
    ))}
  </div>
</div>

<div id="price" className="mt-20">
  <div className="pt-5 pb-5">
    <h1 className="text-4xl uppercase text-center text-[#9597ff] relative z-20 bg-clip-text">
      Get started now pick a plan later
    </h1>
    <p className="text-center text-white pt-3">Choose the plan that’s right for you</p>
  </div>
  <div className="bg-[#171C29] pt-10 pb-10 px-6 py-8 border-[2px] border-[rgba(161,174,210,0.24)] rounded-[16px] shadow-[8px_32px_32px_-8px_rgba(0,0,0,0.5)] max-w-sm mx-auto animate-fadeIn">
    <h3 className="text-white text-2xl font-bold mb-4 text-center">Premium Plan</h3>
    <div className="text-center mb-4">
      <span className="text-[#38b5fe] text-4xl font-bold">$0</span>
      <span className="text-[#C7CBD5] line-through ml-2">$10</span>
    </div>
    <ul className="text-[#C7CBD5] mb-6">
      <li className="mb-2">✔️ Unlimited Tag Generation</li>
      <li className="mb-2">✔️ Access to All Languages</li>
      <li className="mb-2">✔️ Priority Support</li>
      <li className="mb-2">✔️ Advanced Analytics</li>
      <li className="mb-2">✔️ Hashtag Suggestions for Trending Topics</li>
      <li className="mb-2">✔️ AI-Powered Optimization</li>
    </ul>
    <button className="w-full bg-[#38b5fe] text-[#0D111B] py-3 rounded-lg font-bold hover:bg-[#139dff] transition duration-300 hover:scale-105">
      Get Started
    </button>
  </div>
</div>

<div id="Faq" className="mt-10">
  <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
  <div className="flex flex-col gap-6">
    {[
      {
        question: "What are YouTube video tags?",
        answer:
          "YouTube video tags are keywords or phrases that you attach to your video. They provide YouTube's algorithm with context and information about your video's content, subject matter, and relevancy to viewers. These tags play a critical role in how your video is discovered within YouTube's search and recommendation features.",
      },
      {
        question: "How many tags should I use in my YouTube video?",
        answer:
          "While YouTube permits up to 500 characters for video tags, it's not simply about quantity. The focus should be on the quality and relevance of your tags. As a general guideline, you may consider using between 5 to 15 tags for each video, which accurately depict the video's content, topic, and potential search terms.",
      },
      {
        question: "How can I find the right tags for my YouTube video?",
        answer:
          "The first step is to brainstorm keywords that accurately represent your video content. From there, consider adding long-tail keywords, which are more specific, along with synonyms and common variations. Utilizing keyword research tools can also be beneficial. Another approach is to analyze successful competitors' tags, to understand what might work for your video if you're creating similar content.",
      },
      {
        question: "Can I use the same tags for all my videos?",
        answer:
          "If your videos revolve around a similar theme or topic, it might be tempting to use the same tags across all videos. While it's okay to include a few general tags representing your channel's theme across videos, the majority of your tags should be specific to each video's unique content. This ensures YouTube accurately categorizes and recommends each video based on its individual content.",
      },
      {
        question: "How does the hashtag generator help with tags?",
        answer:
          "A hashtag generator streamlines the process of finding the best tags for your videos by analyzing trends, keywords, and relevancy. It saves time and improves accuracy by suggesting effective hashtags that align with your content, ensuring better discoverability.",
      },
      {
        question: "Ready to Start Your New Channel?",
        answer:
          "Starting a new channel is simple! Plan your content, create an account, and start uploading videos. With tools like a hashtag generator, you can optimize your tags for better reach from the very beginning.",
      },
    ].map((faq, index) => (
      <div
        key={index}
        className="flex flex-col bg-[#1A1F2E] text-white px-6 py-4 rounded-lg border border-[#6A9EFF] shadow-md"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-lg">{faq.question}</span>
          <button
            className="text-white font-bold text-xl focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            {activeIndex === index ? "-" : "+"}
          </button>
        </div>
        {activeIndex === index && (
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
        )}
      </div>
    ))}
  </div>
</div>

 
      </div>
    </>
  );
}
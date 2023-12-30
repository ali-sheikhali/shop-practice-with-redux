import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className="mt-5 w-full bg-blue-900 py-5 text-white md:flex
       md:justify-around">
        <div className="flex flex-col justify-center items-center space-y-5
         border-b-2 md:border-none pb-5 md:w-4/12">
          <h3>our Newsletter</h3>
          <form action="">
            <input
              type="text"
              className="rounded-l-2xl py-1 px-3 text-black focus:outline-none"
              placeholder="Enter your email..."
            />
            <button className="bg-orange-500 px-2 rounded-r-2xl py-1">
              subscribe
            </button>
          </form>
          <div className="flex justify-around w-6/12 font-bold text-2xl cursor-pointer">
            <FaInstagram />
            <FaXTwitter />
            <CiLinkedin />
            <CiFacebook />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-around
         w-8/12 mx-auto mt-5 md:w-8/12">
          <div className="w-10/12">
            <h3 className="font-bold text-lg mb-3 border-b-2">the basics</h3>
            <div>
              <p>About TMDB</p>
              <p>contact us</p>
              <p>support</p>
              <p>API</p>
              <p>system status</p>
            </div>
          </div>
          <div className="w-10/12">
            <h3 className="font-bold text-lg mb-3 border-b-2">Social Media</h3>
            <div className="">
              <p>Inestagram</p>
              <p>Twitter</p>
              <p>Linkein</p>
              <p>API</p>
              <p>system status</p>
            </div>
          </div>
          <div className="w-10/12">
            <h3 className="font-bold text-lg mb-3 border-b-2">Get involved</h3>
            <div className="">
              <p>Contribution Bible</p>
              <p>Add New Movie</p>
              <p>Add New TV Show</p>
            </div>
          </div>
          <div className="w-10/12">
            <h3 className="font-bold text-lg mb-3 border-b-2">COMMUNITY</h3>
            <div className="">
              <p>Guidelines</p>
              <p>Discussions</p>
              <p>Leaderboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
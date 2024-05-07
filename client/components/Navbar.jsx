import { FaHouseChimney } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBuysellads } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

import  { useState } from 'react'

import './Navbar.css' ;
import Modal from "./Modal";


const Navbar = () => {

      const [showModal, setShowModal] = useState(false);

      const closeModal =  () => setShowModal(false) ;


  return (
    <section className="navbar">
      <a href='/' className="logo">
        <img src="https://lzycrazy.com/assets/logo.86bdc6c8.png" alt="logo img" height={45} />
      </a>
      <div className="mid">
        <nav>
          <a href="/"> 
            <FaHouseChimney className="icon" />
            <p>Home</p>
        </a>
        </nav>
        <nav>
          <a href="/market">
            <SiHomeassistantcommunitystore className="icon" />
            <p>Market Place</p>
        </a>
        </nav>
       <nav>
           <button className="btn" onClick={() => setShowModal(true)}>
            <FaBuysellads className="icon" />
            <p>Post Ads</p>
            {showModal && <Modal closeModal={closeModal} />}
        </button>
       </nav>
      </div>
      <div className="last">
      <nav>
        <a href="/myadsresponse">
          <BiSolidMessageDots className="icon" />
          <p>Response</p>
        </a>
      </nav>
        <nav>
          <a href="#">
          <IoMdSettings className="icon sett" />
          <p>Setting</p>
           </a>
        </nav>
        
      </div>
    </section>
  )
}

export default Navbar

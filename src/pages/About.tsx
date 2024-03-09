import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/founder.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function About(){
    return(
        <div className="profile">
            <img src={avatarImage} alt="avatar" className="profile-image"/>
            <h1 className="profile-text">Hi I Am Pranjal Tyagi</h1>
            <h2 className="profile-text">The Creator Of This Awesome Pokedex</h2>
            <h4 className="profile-text">This Project Is For Pokemon Enthusiasts</h4>
            <div className="profile-links">
                <a href="https://github.com/PranjalTyagi16">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/pranjal-tyagi-/">
                    <FaLinkedin/>
                </a>
                
            </div>
        </div>
    );
}
export default Wrapper(About);
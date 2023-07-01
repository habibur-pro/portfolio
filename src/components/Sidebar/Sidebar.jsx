import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile-img.jpg'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className='py-2 px-3  bg-accent text-white h-screen '>
            <div className='flex justify-center items-center flex-col bg-primary pt-20 px-5'>
                <div className='text-center flex items-center justify-center flex-col mb-10'>
                    <img className='w-24 h-24 rounded-full mb-5 border-2 border-secondary' src={profileImage} alt="" />
                    <h2 className='text-2xl'>Habibur Rahman</h2>
                </div>
                <div className='my-14'>
                    <ul className=''>
                        <li className='text-white hover:text-secondary text-center mb-5'><Link to="#home">Home</Link></li>
                        <li className='text-white hover:text-secondary text-center mb-5'><Link to="#about">About</Link></li>
                        <li className='text-white hover:text-secondary text-center mb-5'><Link to="#skills">Skills</Link></li>
                        <li className='text-white hover:text-secondary text-center mb-5'><Link to="#projects">Projects</Link></li>
                        <li className='text-white hover:text-secondary text-center mb-5'><Link to="#contact">Contact</Link></li>

                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center my-5'>
                        <li className='p-2 text-lg mx-2 hover:scale-125 duration-200 rounded-full bg-primary hover:bg-secondary'><Link to='#'><FaFacebookF /></Link></li>
                        <li className='p-2 text-lg mx-2 hover:scale-125 duration-200 rounded-full bg-primary hover:bg-secondary'><Link to='#'><FaLinkedinIn /></Link></li>
                        <li className='p-2 text-lg mx-2 hover:scale-125 duration-200 rounded-full bg-primary hover:bg-secondary'><Link to='#'><FaGithub /></Link></li>
                    </ul>
                    <p className='my-5 text-center'>Copyright © 2023 Habibur Rahman. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
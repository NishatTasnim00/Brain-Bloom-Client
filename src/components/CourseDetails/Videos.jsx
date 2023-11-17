import Aos from "aos";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const Videos = ({video, id}) => {
    const {title, thumbnail, url} = video;
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
      console.log(id)
  return (
    <div data-aos="fade-left" data-aos-easing="ease-in-sine" className=" ">
      <div className="card w-full h-64 bg-gray-900 shadow-xl hover:scale-1 hover:shadow-slate-500 duration-150 rounded-none hover:-translate-y-1 ">
        {/* <figure>
          <img
            src={thumbnail}
            alt="tutorial"
          />
        </figure> */}
        <div className="px-3 py-3 space-y-3 ">
          <h2 className="text-lg font-semibold text-gray-300">{title}</h2>
          <div className="flex justify-between text-gray-400">
        
          </div>
          <div className="card-actions flex justify-center items-center">
            <motion.button onClick={() => navigate('/player', {state: url})} whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn btn-lg mt-7 dark:border-white dark:text-white hover:bg-purple-700 hover:border-purple-700 border-2 border-purple-700 rounded-full bg-transparent text-purple-700  hover:text-white text-base"><FaPlay /></motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;

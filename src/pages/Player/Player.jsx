import ReactPlayer from 'react-player'
import { useLocation, useNavigate } from 'react-router-dom';
// import Iframe from 'react-iframe'
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Player = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";  
    console.log(from)  
    const videoUrl = location.state
    return (
            <div className="relative">
            <motion.button onClick={() =>  navigate(from, { replace: true })} whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn btn-sm  btn-info font-bold text-white dark:bg-transparent dark:border-2 dark:border-white absolute top-1 left-10">
            <FaArrowLeft />Back</motion.button>
            <ReactPlayer width='100%' height="640px"  className='py-10 h-full btn-ghost dark:bg-gray-800 px-10' style={{ height: '5%' }} controls={true} playing  url={videoUrl} />
            </div>
    );

};

export default Player;
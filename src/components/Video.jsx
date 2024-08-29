import React, { useEffect, useRef, useState } from 'react';
import Video_Robot from "../assets/video_robot.png";
import video from "../assets/video.mp4";
import Quiz from './Quiz';
import { Link } from 'react-router-dom';
import MLBOOK from "../assets/MLBOOK.pdf";
import rotate from "../assets/video_rotate.mp4";
import Feedback from './Feedback';
import doubt_img from "../assets/doubt.png";
import download_img from "../assets/download.png";
import SubmitingFeedback from './SubmitingFeedback';

const Video = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizInterval, setQuizInterval] = useState(10);
    const [quizToggle, setQuizToggle] = useState(true);
    const [showRotateVideo, setShowRotateVideo] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showSubmittingFeedback, setShowSubmittingFeedback] = useState(false); // State for showing submitting feedback
    const videoRef = useRef(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                console.log(`Current Time: ${videoRef.current.currentTime}, Quiz Interval: ${quizInterval}`);
                if (videoRef.current.currentTime >= quizInterval && quizToggle) {
                    setShowQuiz(true);
                    videoRef.current.pause();
                }
            }
        };

        const handleVideoEnd = () => {
            setShowFeedback(true);
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
            videoElement.addEventListener('ended', handleVideoEnd);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
                videoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, [quizInterval, quizToggle]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 368) {
                setShowRotateVideo(false);
                setQuizToggle(false);
            } else {
                setShowRotateVideo(true);
                setQuizToggle(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeQuiz = () => {
        setShowQuiz(false);
        setQuizInterval(prev => prev + 10);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const downloadNotes = () => {
        const link = document.createElement('a');
        link.href = MLBOOK;
        link.download = 'notes.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleQuiz = () => {
        setQuizToggle(!quizToggle);
        if (!quizToggle) {
            setShowQuiz(false);
        }
    };

    const handleFeedbackClose = () => {
        setShowFeedback(false);
        setShowSubmittingFeedback(true);  // Show submitting feedback
        setTimeout(() => {
            setShowSubmittingFeedback(false);  // Hide after 5 seconds
        }, 5000);
    };

    return (
        <div className='video-page-background w-screen flex flex-col text-white font-[Montserrat] items-center pb-8 min-h-screen'>
            <h1 className='md:text-3xl text-[22px] text-center lg:text-justify mt-5 font-semibold font-[jost]'>TOPIC NAME: RANDOM THINGS TEXT BLUE</h1>
            <div className={`flex border-4 mt-16 border-white w-[100%] md:w-[80%] md:h-[100%] md:h-[70%] h-[30%] relative`}>
                {showRotateVideo && (
                    <video src={rotate} autoPlay muted loop className='sm:hidden w-full h-full object-cover'></video>
                )}
                <>
                    <h3 className='text-sm md:text-sm blur-0 lg:text-lg absolute left-[30px] top-[-39px]'>VIDEO NO:1</h3>
                    <div className='flex items-center absolute right-[30px] top-[-39px]'>
                        <span className='text-sm mr-2'>Quiz:</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={quizToggle} onChange={toggleQuiz} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{quizToggle ? 'On' : 'Off'}</span>
                        </label>
                    </div>
                    <div className={`${showQuiz && "blur-sm"} w-[100%] flex justify-center  items-center`}>
                        <video ref={videoRef} muted controls className='w-[100%] h-[100%] object-cover '>
                            <source src={video} type='video/mp4' />
                        </video>
                    </div>

                    <div className={`sm:flex items-end radial-background hidden ${showQuiz && "blur-sm"}`}>
                        <img src={Video_Robot} alt="" />
                    </div>
                </>
            </div>
            {showQuiz && <Quiz onClose={closeQuiz} />}
            {showSubmittingFeedback && <SubmitingFeedback />}  {/* Conditionally render SubmitingFeedback */}
            {showFeedback && <Feedback onClose={handleFeedbackClose} />}  {/* Conditionally render Feedback */}
            <div className='flex justify-evenly w-full mt-8'>
                <div onClick={downloadNotes} className=' p-[5px] md:p-2  text-[9px] md:text-sm flex flex-col items-center gap-2'><img className='w-[30%]' src={download_img} alt="" />DOWNLOAD NOTES</div>
                <Link target='_blank' to="/doubt" className='  p-[5px] md:p-2  text-[9px] md:text-sm  flex flex-col items-center gap-2'><img src={doubt_img} className='w-[50%]' alt="" />ASK DOUBTS</Link>
            </div>
        </div>
    );
};

export default Video;

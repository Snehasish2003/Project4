import { useState } from "react";
import { CircleArrowLeft } from 'lucide-react';

const Feedback = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleStarClick = (index) => {
        setRating(index);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = () => {
        onClose();
    };

    return (
        <div className="bg-white top-60 rounded-3xl shadow-lg w-full max-w-xl absolute pb-8">
            <div className="text-center flex items-center justify-center h-[3rem] quiz_gradiant relative">
                <span className="text-white font-medium text-center">Session Feedback</span>
            </div>
            <div className="mb-4 mx-6 text-center">
                <p className="text-lg text-neutral-600">Please rate your experience below</p>
                <div className="flex justify-center mt-4">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                key={index}
                                type="button"
                                className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}
                                onClick={() => handleStarClick(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10"  // Increased size
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                    />
                                </svg>
                            </button>
                        );
                    })}
                <p className="text-lg text-neutral-600 mt-2 pl-3">{rating}/5 stars</p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center mb-6 mx-6">
                <div className="w-full">
                    <p className="text-sm text-neutral-600">Additional Feedback</p>
                    <textarea
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="My Feedback!!"
                        className="w-full mt-2 p-2 border border-black rounded text-black"

                    ></textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                    Submit Feedback
                </button>
            </div>
        </div>
    );
};

export default Feedback;

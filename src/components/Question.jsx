import React, { useEffect, useRef, useState } from 'react';
import AnalogClock from './analogClock';
import Easy from './questions/Easy';
import Medium from './questions/Medium';
import Hard from './questions/Hard';

const Question = ({ level = 'easy' }) => {
    const containerRef = useRef();
    const [isSolved, setIsSolved] = useState(false);

    useEffect(()=>{
        if (localStorage.getItem(`${level}-time`)) {
            setIsSolved(true);
        }
    }, [level]);

    // Function to render the appropriate question component based on level
    const renderQuestionComponent = () => {
        switch (level.toLowerCase()) {
            case 'easy':
                return <Easy />;
            case 'medium':
                return <Medium />;
            case 'hard':
                return <Hard />;
            default:
                return <Easy />; // Default to easy if invalid level
        }
    };

    // Function to get the level display text and color
    const getLevelStyle = () => {
        switch (level.toLowerCase()) {
            case 'easy':
                return { text: 'Easy', color: 'text-green-400' };
            case 'medium':
                return { text: 'Medium', color: 'text-yellow-400' };
            case 'hard':
                return { text: 'Hard', color: 'text-red-400' };
            default:
                return { text: 'Easy', color: 'text-green-400' };
        }
    };

    const levelStyle = getLevelStyle();

    return (
        <div className="relative w-1/2 bg-[#101828] rounded overflow-auto max-h-[calc(100vh-100px)] border-[#00d3f3]">

            <AnalogClock containerRef={containerRef} />

            <div className='absolute top-0 p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className={`text-xl font-semibold ${levelStyle.color} mb-3`}>{levelStyle.text}</h2>
                    {isSolved && (
                        <div className="text-black px-2 py-1 rounded-md mb-2 font-bold bg-green-400">Solved</div>
                    )}
                </div>

                <div className='text-white'>
                    {renderQuestionComponent()}
                </div>
            </div>
        </div>
    );
};

export default Question;

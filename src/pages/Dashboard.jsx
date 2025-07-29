import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import CodeEditor from '../components/CodeEditor';
import Timer from '../components/Timer';
import { useParams } from 'react-router-dom';

const Dashboard = () => {

    const { level } = useParams()
    const [inputs, setInputs] = React.useState([0]);
    const [time, setTime] = React.useState(0);

    useEffect(() => {
        // Set input based on level
        if (level === 'easy') {
            setInputs(
                Array.from({ length: 8 }, () => Math.floor(Math.random() * 1000) + 1)
            ); // Random input for easy level
        } else if (level === 'medium') {
            setInputs(
                Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 1)
            ); // Random input for medium level
        } else if (level === 'hard') {
            setInputs(
                Array.from({ length: 6 }, () => Math.floor(Math.random() * 100000) + 1).concat([153, 54748])
            ); // Random input for hard level
        }
    }, [level]);

    return (
        <div className="relative bg-[#131324] text-white h-screen w-full overflow-hidden z-50">

            <div className="relative z-10 flex flex-col h-full">
                <Navbar />
                <div className='flex w-full justify-between items-center px-6 py-4'>
                    <Timer setTime={setTime} time={time} start={true} onComplete={() => alert('Time is up!')} />
                </div>
                <div className="flex-1 flex px-6 py-4 gap-4 overflow-hidden">
                    <Question level={level} />
                    <CodeEditor time={time} level={level} inputs={inputs} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

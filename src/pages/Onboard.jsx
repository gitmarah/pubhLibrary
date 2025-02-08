import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { levelContext } from '../contextApi/Level.jsx';

const Onboard = () => {
    const navigate = useNavigate();
    const { setLevel } = useContext(levelContext);
    const handleClick = (level) => {
        setLevel(level);
        localStorage.setItem('level', level);
        navigate('/home');
    }
  return (
    <>
        <main className='flex flex-col items-center justify-center h-[90vh] md:h-[100vh] px-10 max-w-sm mx-auto'>
            <img className='w-[70%]' src="images/Study Mate Logo 2.png" alt="Study Mate Logo" />
            <h1 className='text-4xl font-extrabold text-center mb-2'>Welcome to Study Mate!</h1>
            <p className='text-xl mb-3 font-semibold'>Select your Level:</p>
            <button onClick={() => handleClick('one')} className='border border-[#0a0454] text-[#0a0454] py-3 w-full px-12 rounded-md font-bold text-xl mb-2'>Year 1</button>
            <button onClick={() => handleClick('two')} className='border border-[#0a0454] text-[#0a0454] py-3 w-full px-12 rounded-md font-bold text-xl mb-2'>Year 2</button>
            <button onClick={() => handleClick('three')} className='border border-[#0a0454] text-[#0a0454] py-3 w-full px-12 rounded-md font-bold text-xl'>Year 3</button>
        </main>
    </>
  )
}

export default Onboard
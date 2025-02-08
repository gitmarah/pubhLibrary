import React, { useContext, useState } from 'react'
import { RiHome3Fill } from "react-icons/ri";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { levelContext } from '../contextApi/Level';
import { GiArchiveResearch } from "react-icons/gi";

const Footer = ({main, calendar, exclam, person, notes}) => {
    const [home, setHome] = useState(main);
    const [timetable, setTimetable] = useState(calendar);
    const [about, setAbout] = useState(exclam);
    const [tutors, setTutors] = useState(person);
    const [materials, setMaterials] = useState(notes);
    const navigate = useNavigate();
    const {setSearch } = useContext(levelContext);

    const handleMem = () => {
        if(timetable !== "active"){
            setTimetable('active');
            setHome('!active');
            setTutors('!active');
            setMaterials('!active');
            setSearch("");
            navigate('/timetable');
        }
    }

    const handleHome = () => {
        if(home !== "active"){
            setHome('active');
            setTimetable('!active');
            setAbout('!active');
            setTutors('!active');
            setMaterials('!active');
            setSearch("");
            navigate('/');
        }
    }
    const handleMaterials = () => {
        if(materials !== "active"){
            setMaterials('active');
            setTimetable('!active');
            setAbout('!active');
            setTutors('!active');
            setHome('!active');
            setSearch("");
            navigate('/materials');
        }
    }

    const handleAbout = () => {
        if(about !== "active"){
            setAbout('active');
            setTimetable('!active');
            setHome('!active');
            setTutors('!active');
            setSearch("");
            navigate('/about');
            setMaterials('!active');
        }
    }

    const handleTutors = () => {
        if(tutors !== "active"){
            setTutors('active');
            setTimetable('!active');
            setHome('!active');
            setAbout('!active');
            setMaterials('!active');
            setSearch("");
            navigate('/tutors');
        }
    }

  return (
    <footer className='bg-white fixed bottom-0 left-0 right-0 text-white py-3 px-5 font-poppins shadow-inner border-b z-50'>
        <div className='flex justify-around max-w-4xl mx-auto'>
        <p className='italic text-justify md:text-center text-[0.6rem] hidden md:flex my-2 text-[#0a0454]'>Remember to keep striving for success over perfection. A little progress everyday, will go a very long way! <b>- Dave Gray</b></p>
        <nav className='md:hidden flex justify-around w-full'>
            {home === 'active' ?
            <div className='text-4xl flex flex-col items-center text-[#0cbe69]'>
                <RiHome3Fill />
                <p className='text-[0.6rem] font-extrabold leading-none'>Home</p>
            </div> :
            <div onClick={handleHome} className='text-4xl cursor-pointer flex flex-col items-center text-[#00adea]'>
                <RiHome3Fill />
                <p className='text-[0.6rem] font-normal leading-none'>Home</p>
            </div>}
            {materials === 'active' ?
            <div className='text-4xl flex flex-col items-center text-[#0cbe69]'>
                <FaBookOpenReader />
                <p className='text-[0.6rem] font-extrabold leading-none'>Materials</p>
            </div> :
            <div onClick={handleMaterials} className='text-4xl cursor-pointer flex flex-col items-center text-[#00adea]'>
                <FaBookOpenReader />
                <p className='text-[0.6rem] font-normal leading-none'>Materials</p>
            </div>}
            {timetable === 'active' ?
            <div className='text-3xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                <FaCalendarAlt />
                <p className='text-[0.6rem] font-extrabold leading-none'>Past Papers</p>
            </div> :
            <div onClick={handleMem} className='text-3xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                <FaCalendarAlt />
                <p className='text-[0.6rem] font-normal leading-none'>Past Papers</p>
            </div>}
            {tutors === 'active' ?
            <div className='text-3xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                <GiArchiveResearch />
                <p className='text-[0.6rem] font-extrabold leading-none'>Research</p>
            </div> :
            <div onClick={handleTutors} className='text-3xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                <GiArchiveResearch />
                <p className='text-[0.6rem] font-normal leading-none'>Research</p>
            </div>}
            {about === 'active' ?
            <div className='text-3xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                <FaExclamationCircle />
                <p className='text-[0.6rem] font-extrabold leading-none'>About</p>
            </div> :
            <div onClick={handleAbout} className='text-3xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                <FaExclamationCircle />
                <p className='text-[0.6rem] font-normal leading-none'>About</p>
            </div>}
        </nav>
        </div>
    </footer>
  )
}

export default Footer;
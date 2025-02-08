import React, { useContext, useState } from 'react'
import { RiHome3Fill} from "react-icons/ri";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { FaBookOpenReader } from "react-icons/fa6";
import { levelContext } from '../contextApi/Level';

export const Header = ({main, calendar, exclam, person, notes, placeholder}) => {
    const [home, setHome] = useState(main);
    const [timetable, setTimetable] = useState(calendar);
    const [about, setAbout] = useState(exclam);
    const [tutors, setTutors] = useState(person);
    const [materials, setMaterials] = useState(notes);
    const navigate = useNavigate()
    const { search, setSearch } = useContext(levelContext);


    const handleMem = () => {
        if(timetable !== "active"){
            setTimetable('active');
            setHome('!active');
            setTutors('!active');
            setMaterials('!active');
            setSearch("")
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
            setSearch("")
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
            setSearch("")
            navigate('/materials');
        }
    }

    const handleAbout = () => {
        if(about !== "active"){
            setAbout('active');
            setTimetable('!active');
            setHome('!active');
            setTutors('!active');
            setSearch("")
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
            setSearch("")
            navigate('/tutors');
        }
    }

    return (
        <header className='bg-white fixed top-0 left-0 right-0 text-white py-2 px-5 font-poppins border shadow-sm z-50'>
            <div className='max-w-4xl mx-auto lg:px-7 md:px-7 flex items-center justify-between gap-10'>
            <Link to={'/'} className='flex'>
                <img className='w-12' src="images/PUBH Logo.jpg" alt="Study Mate Logo" />
            </Link>
            {!(location.pathname === '/') && !(location.pathname === "/about")? 
                <div className='relative border border-[#0cbe69] h-10 text-[#0cbe69] p-2 rounded lg:w-72'>
                    <input className='w-full outline-none font-montserrat flex' placeholder={`${placeholder}`} type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <div className='absolute right-2 top-2 text-xl font-extrabold'>
                        <CiSearch />
                    </div>
                </div> : <img className='w-32' src="images/Unimak Logo.jpg" alt="Study Mate Logo" />

            }
            <nav className='md:flex justify-around hidden gap-10'>
                {home === 'active' ?
                <div className='text-3xl flex flex-col items-center text-[#0cbe69]'>
                    <RiHome3Fill />
                    <p className='text-[0.8rem] md:text-[1rem] leading-none'>Home</p>
                </div> :
                <div onClick={handleHome} className='text-3xl cursor-pointer flex flex-col items-center text-[#00adea]'>
                    <RiHome3Fill />
                    <p className='text-[0.8rem] md:text-[1rem] font-normal leading-none'>Home</p>
                </div>}

                {materials === 'active' ?
                <div className='text-3xl flex flex-col items-center text-[#0cbe69]'>
                    <FaBookOpenReader />
                    <p className='text-[0.8rem] md:text-[1rem] leading-none'>Materials</p>
                </div> :
                <div onClick={handleMaterials} className='text-3xl cursor-pointer flex flex-col items-center text-[#00adea]'>
                    <FaBookOpenReader />
                    <p className='text-[0.8rem] md:text-[1rem] font-normal leading-none'>Materials</p>
                </div>}

                {timetable === 'active' ?
                <div className='text-2xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                    <FaCalendarAlt />
                    <p className='text-[0.8rem] md:text-[1rem] leading-none whitespace-nowrap'>Past Papers</p>
                </div> :
                <div onClick={handleMem} className='text-2xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                    <FaCalendarAlt />
                    <p className='text-[0.8rem] md:text-[1rem] font-normal leading-none whitespace-nowrap'>Past Papers</p>
                </div>}

                {tutors === 'active' ?
                <div className='text-2xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                    <GiArchiveResearch />
                    <p className='text-[0.8rem] md:text-[1rem] leading-none'>Research</p>
                </div> :
                <div onClick={handleTutors} className='text-2xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                    <GiArchiveResearch />
                    <p className='text-[0.8rem] md:text-[1rem] font-normal leading-none'>Research</p>
                </div>}

                {about === 'active' ?
                <div className='text-2xl flex flex-col gap-1 items-center text-[#0cbe69]'>
                    <FaExclamationCircle />
                    <p className='text-[0.8rem] md:text-[1rem] leading-none'>About</p>
                </div> :
                <div onClick={handleAbout} className='text-2xl flex font-normal flex-col gap-1 items-center cursor-pointer text-[#00adea]'>
                    <FaExclamationCircle />
                    <p className='text-[0.8rem] md:text-[1rem] font-normal leading-none'>About</p>
                </div>}
            </nav>
            </div>     
        </header>
    );
}
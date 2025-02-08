import React, { useContext } from 'react';
import Footer from '../components/Footer';
import { levelContext } from '../contextApi/Level.jsx';
import { Header } from '../components/Header.jsx';
import { pastQuestions } from '../assets/pastQuestions.js';
import ModuleExerpt from '../components/ModuleExerpt.jsx';
import Swiper from '../components/Swiper.jsx';
import { CiSearch } from "react-icons/ci";
import { materials } from '../assets/materials.js';


const Home = () => {
    const { search, setSearch } = useContext(levelContext);
    let list;
    if (search.trim()){
        list = materials.filter(module => module.title.toLowerCase().includes(search.trim().toLowerCase()) || module.module.toLowerCase().includes(search.trim().toLowerCase())); 
    } else {
        list = ""
    }

    return (
        <>
            <Header main="active" />
                <main className='max-w-4xl mx-auto pt-16 pb-20 px-6'>
                    <h1 className='font-black font-montserrat text-center text-4xl mt-3 text-'><span className='font-normal'>Welcome to</span><br/>Public Health <br/><span className='font-normal'>Online Library!</span></h1>
                    <div className='mt-3 mb-3 -z-50'>
                        <Swiper/>
                    </div>
                    <p className='font-montserrat text-center'>
                        Discover a <b>wealth of knowledge</b> tailored to support your academic journey and professional growth. Our platform provides easy access to a wide range of resources, including <b>e-books, research papers, lecture notes, and more.</b> Whether you’re exploring new topics, conducting research, or preparing for exams, we’re here to empower your learning experience. Start exploring today and <b>unlock the potential of knowledge</b> at your fingertips!
                    </p>
                    <div className='my-3 relative border border-[#0cbe69] text-[#0cbe69] rounded lg:w-full md:w-full flex items-center justify-center mx-auto'>
                        <input className='w-full outline-none font-montserrat text-lg p-2 rounded' placeholder="Search for Materials" type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <div className='absolute right-2 top-3 text-xl font-extrabold'>
                            <CiSearch />
                        </div>
                    </div>
                    <div className='mt-3 flex flex-col gap-4 rounded'>
                        <ModuleExerpt sem={list} />
                    </div>
                </main>
            <Footer main="active"/>
        </>
    )
}

export default Home;
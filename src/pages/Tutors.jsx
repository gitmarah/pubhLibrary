import React, { useContext } from 'react';
import Footer from '../components/Footer';
import { levelContext } from '../contextApi/Level.jsx';
import { Header } from '../components/Header.jsx';
import { research } from '../assets/research.js';

const Tutors = () => {
    const { search } = useContext(levelContext);
    const list = research.filter(module => module.title.toLowerCase().includes(search.trim().toLowerCase()) || module.module.toLowerCase().includes(search.trim().toLowerCase()));

    return (
        <>
            <Header person="active" placeholder="Search for Research"/>
            <main className='max-w-4xl mx-auto pt-16 pb-20 px-4'>
                { !(list.length === 0) ?
                    <fieldset className='p-3 my-3 flex flex-col gap-4 rounded'>
                        <h1 className='font-montserrat text-center'>Browse through our library of <span className='font-bold'>{list.length}</span> materials!</h1>
                        <ModuleExerpt sem={list} />
                    </fieldset> : <p className='font-montserrat mt-5 text-center'>No research work for now!</p>
                }
                
            </main>
            <Footer person="active" />
        </>
    )
}

export default Tutors;
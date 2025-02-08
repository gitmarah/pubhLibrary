import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { materials } from '../assets/materials';
import { useContext } from 'react';
import { levelContext } from '../contextApi/Level';
import ModuleExerpt from '../components/ModuleExerpt';

const Materials = () => {

    const { search } = useContext(levelContext);
    const list = materials.filter(module => module.title.toLowerCase().includes(search.trim().toLowerCase()) || module.module.toLowerCase().includes(search.trim().toLowerCase()));
    const sortedList = list.sort((a,b) => a.module > b.module ? 1 : a.module < b.module ? -1 : 0);

    return (
        <>
            <Header notes="active" placeholder="Search for Materials"/>
            <main className='max-w-4xl mx-auto pt-16 pb-20 px-4'>
                <fieldset className='p-3 my-3 flex flex-col gap-4 rounded'>
                    <h1 className='font-montserrat text-center'>Browse through our library of <span className='font-bold'>{list.length}</span> materials!</h1>
                    <ModuleExerpt sem={sortedList} />
                </fieldset>
            </main>
            <Footer notes="active" />
        </>
    )
}

export default Materials
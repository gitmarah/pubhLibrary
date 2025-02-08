import React, { useState } from 'react'

const ModuleExerpt = ({sem}) => {


    const handleDownload = (link, name) => {
        const a = document.createElement('a');
        a.href = link;
        a.download = name
        a.click();
        document.removeChild(a)
    }

    return (
        <>
            
            {sem.length !== 0 ? sem.map(module => 
                <div key={module.link}>
                    <div className='flex justify-between items-center gap-5 shadow-md border border-[#0cbe69] rounded p-3 font-montserrat text-sm'>
                        <div className='flex flex-col'>
                            <p className='font-bold'>{module.title}</p>
                            <p>{module.module}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='bg-[#0cbe69] text-white py-2 px-3 rounded hover:opacity-85 active:opacity-75' onClick={() => handleDownload(module.link, module.title)}>Download</button>
                        </div>
                    </div>
                </div>
                ) : 
                !(location.pathname === '/') ? <p className='text-center'>Your List is Empty!</p> : ""
            }
        </>
    )
}

export default ModuleExerpt
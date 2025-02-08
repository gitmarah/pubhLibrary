import React, { useContext } from 'react';
import Footer from '../components/Footer.jsx';
import { levelContext } from '../contextApi/Level.jsx';
import { Header } from '../components/Header.jsx';
import Form from '../components/Form.jsx'

const About = () => {
    const { level } = useContext(levelContext);

    return (
        <main className='pt-14 pb-20 md:pb-16 max-w-4xl mx-auto px-10'>
            <Header exclam='active'/>
            {/* <h1></h1>
            <p className='text-sm text-justify mt-5'>
            <b>Study Mate</b> is dedicated to fostering a collaborative learning environment where students can support one another and elevate their academic skills through peer tutoring. With the theme <b>"Learn Together, Grow Together"</b>. Study Mate emphasizes the power of shared knowledge and peer mentorship. Students can seek guidance from experienced peers and alumni, who, in turn, strengthen their understanding by teaching others. By offering flexible scheduling, <i>both in-person and virtual sessions</i>, and a  <b>supportive, judgment-free space</b>. Study Mate Sessions empowers students to succeed academically while building a culture of mutual growth and solidarity.
            </p>
            <Form /> */}
            <Footer exclam="active" />
        </main>
    );
}

export default About;
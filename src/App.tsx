import React from 'react';
import {Navbar} from './components/Navbar';
import {SectionContact} from './components/SectionContact';
import {SectionPortfolio} from './components/SectionPortfolio';
import {SectionEducation} from './components/SectionEducation';
import {SectionSkills} from './components/SectionSkills';
import {SectionAbout} from './components/SectionAbout';
import {SectionHome} from './components/SectionHome';

const App = () => {
    return (
        <>
            <Navbar/>
            <SectionHome/>
            <SectionAbout/>
            <SectionSkills/>
            <SectionEducation/>
            <SectionPortfolio/>
            <SectionContact/>
        </>
    );
};

export default App;
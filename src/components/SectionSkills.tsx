import React from 'react';
import html from '../images/technologies/html.png';
import css from '../images/technologies/css.png';
import js from '../images/technologies/js.png';
import react from '../images/technologies/react.png';
import typescript from '../images/technologies/typescript.png';
import git from '../images/technologies/git.png';
import sass from '../images/technologies/sass.png';

export const SectionSkills = () => {
    return (
        <section className="skills">

            <h1 className="heading"><span>my</span> skills</h1>

            <div className="box-container">

                <div className="box">
                    <img src={html} alt="image"/>
                    <h3>html</h3>
                </div>

                <div className="box">
                    <img src={css} alt="image"/>
                    <h3>css</h3>
                </div>

                <div className="box">
                    <img src={js} alt="image"/>
                    <h3>js</h3>
                </div>

                <div className="box">
                    <img src={react} alt="image"/>
                    <h3>react</h3>
                </div>

                <div className="box">
                    <img src={typescript} alt="image"/>
                    <h3>typescript</h3>
                </div>

                <div className="box">
                    <img src={git} alt="image"/>
                    <h3>git</h3>
                </div>

                <div className="box">
                    <img src={sass} alt="image"/>
                    <h3>sass</h3>
                </div>

            </div>

        </section>

    );
};


import React from 'react';
import user from '../images/user.jpg';

export const SectionHome = () => {
    return (
        <section className="home" id="home">

            <div className="image">
                <img src={user} alt="avatar"/>
            </div>

            <div className="content">
                <h3>hi, i am pavel</h3>
                <span>front-end developer</span>
                <p>I am a novice frontend developer from Moscow. When writing code, I mainly use React together with
                    Typescript
                    and Redux. Below you can see my works.</p>
                <a href="#about" className="btn">about me <i className="fas fa-user"></i></a>
            </div>

        </section>

    );
};


import React from 'react';

export const SectionAbout = () => {
    return (
        <section className="about" id="about">

            <h1 className="heading">
                about
                <span>me</span>
            </h1>
            <div className="row">
                <div className="info-container">
                    <h1>personal info</h1>
                    <div className="box-container">

                        <div className="box">
                            <h3><span>name : </span> pavel vasilev</h3>
                            <h3><span>age : </span> 32</h3>
                            <h3><span>email : </span> pv9998286620@yandex.ru</h3>
                            <h3><span>address : </span> moscow, russia</h3>
                        </div>

                        <div className="box">
                            <h3><span>freelance : </span> available</h3>
                            <h3><span>skill : </span> front-end developer</h3>
                            <h3><span>experience : </span> 2 years</h3>
                            <h3><span>language : </span> russian, english</h3>
                        </div>

                    </div>

                    <a href="#" className="btn"> download CV <i className="fas fa-download"></i> </a>
                </div>

                <div className="count-container">

                    <div className="box">
                        <h3>2+</h3>
                        <p>years of experience</p>
                    </div>

                    <div className="box">
                        <h3>5+</h3>
                        <p>completed courses</p>
                    </div>

                    <div className="box">
                        <h3>1300+</h3>
                        <p>hours of training</p>
                    </div>

                    <div className="box">
                        <h3>10+</h3>
                        <p>completed projects</p>
                    </div>

                </div>

            </div>

        </section>

    );
};


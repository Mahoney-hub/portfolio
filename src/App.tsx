import React from 'react';
import user from './images/user3.jpg';
import html from './images/technologies/html.png';
import css from './images/technologies/css.png';
import js from './images/technologies/js.png';
import react from './images/technologies/react.png';
import typescript from './images/technologies/typescript.png';
import git from './images/technologies/git.png';
import sass from './images/technologies/sass.png';
import budgetCalculator from './images/bg-portfolio/budget-calculator.jpg';
import orange from './images/bg-portfolio/orange.jpg';
import coffee from './images/bg-portfolio/coffee.jpg';
import telephone from './images/bg-portfolio/telephone.jpg';

const App = () => {
    return (
        <>
            {/*navbar section starts*/}

            <nav className="navbar">
                <a href="#home"><i className="fas fa-home"></i><span>home</span></a>
                <a href="#about"><i className="fas fa-user"></i><span>about</span></a>
                <a href="#portfolio"><i className="fas fa-briefcase"></i><span>portfolio</span></a>
                <a href="#contact"><i className="fas fa-address-book"></i><span>contact</span></a>
            </nav>

            {/*navbar section ends */}

            {/*home section starts */}

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

            {/*home section ends*/}

            {/*about section starts*/}

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

            {/*about section ends*/}

            {/*skill section starts*/}

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

            {/*skill section ends*/}

            {/*education section starts*/}

            <section className="education">

                <h1 className="heading"><span>my</span> education </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020.08 - 2020.11</span>
                        <h3>Nordic IT School</h3>
                        <p>COURSES:</p>
                        <p>КУРС «WEB-РАЗРАБОТКА»</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020.11 - 2021.05</span>
                        <h3>WebCademy</h3>
                        <p>COURSES:</p>
                        <p>Верстка сайтов HTML5 + CSS3</p>
                        <p>JavaScript frontend разработчик</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2021.05 - 2021.01</span>
                        <h3>ItGid</h3>
                        <p>COURSES:</p>
                        <p>JavaScript v.2.0</p>
                        <p>Методы массивов JavaScript</p>
                        <p>Функции в JavaScript 2021</p>
                        <p>ООП в JS</p>
                        <p>React. Lite Level</p>
                        <p>ReactJS</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2021.05 - 2021.01</span>
                        <h3>IT-incubator</h3>
                        <p>COURSES:</p>
                        <p>React</p>
                        <p>TypeScript</p>
                        <p>Redux</p>
                        <p>Redux-Toolkit</p>
                    </div>

                </div>

            </section>

            {/*education section ends*/}

            {/*portfolio section starts*/}

            <section className="portfolio" id="portfolio">

                <h1 className="heading"><span>my</span> work </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={budgetCalculator} alt="image"/>
                        <div className="content">
                            <h3>budget calculator</h3>
                            <p>Project budget calculator. Technologies that have been used: SCSS, React TS,
                                Redux-Toolkit</p>
                            <a href="https://Mahoney-hub.github.io/budget_calculator" target="_blank">view the
                                project</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={orange} alt="image"/>
                        <div className="content">
                            <h3>project 02</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, odit!</p>
                            <a href="#">read more</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={telephone} alt="image"/>
                        <div className="content">
                            <h3>project 03</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, odit!</p>
                            <a href="#">read more</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={coffee} alt="image"/>
                        <div className="content">
                            <h3>project 04</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, odit!</p>
                            <a href="#">read more</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={orange} alt="image"/>
                        <div className="content">
                            <h3>project 05</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, odit!</p>
                            <a href="#">read more</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={telephone} alt="image"/>
                        <div className="content">
                            <h3>project 06</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, odit!</p>
                            <a href="#">read more</a>
                        </div>
                    </div>

                </div>

                <a href="#" className="btn"> load more <i className="fas fa-redo"></i> </a>

            </section>

            {/*portfolio section ends*/}

            {/*contact section starts*/}

            <section className="contact" id="contact">

                <h1 className="heading">contact <span>me</span></h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolorum enim error id quia ut.</p>

                <div className="row">

                    <div className="info-container">

                        <h1>get in touch</h1>

                        <div className="box-container">

                            <div className="box">
                                <i className="fas fa-map"></i>
                                <div className="info">
                                    <h3>address :</h3>
                                    <p>moscow, russia</p>
                                </div>
                            </div>

                            <div className="box">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <h3>email :</h3>
                                    <p>pv9998286620@yandex.ru</p>
                                </div>
                            </div>

                            <div className="box">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <h3>number :</h3>
                                    <p>+7(999)82-86-620</p>
                                </div>
                            </div>

                        </div>

                        <div className="share">
                            <a href="#" className="fab fa-linkedin"></a>
                            <a href="#" target="_blank" className="fab fa-telegram"></a>
                            <a href="https://www.instagram.com/pavel_vas_ev/" target="_blank"
                               className="fab fa-instagram"></a>
                            <a href="https://www.facebook.com/profile.php?id=100062434354370" target="_blank"
                               className="fab fa-facebook-f"></a>
                        </div>

                    </div>

                    <form action="" className="form">

                        <div className="inputBox">
                            <input type="text" placeholder="your name"/>
                            <input type="number" placeholder="your number"/>
                        </div>

                        <div className="inputBox">
                            <input type="email" placeholder="your email"/>
                            <input type="text" placeholder="your subject"/>
                        </div>

                        <textarea placeholder="your message"/>

                        <input type="submit" value="send message" className="btn"/>
                    </form>

                </div>

            </section>

            {/*contact section ends*/}
        </>
    );
};

export default App;
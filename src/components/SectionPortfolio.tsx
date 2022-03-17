import React from 'react';
import budgetCalculator from '../images/bg-portfolio/budget-calculator.jpg';
import orange from '../images/bg-portfolio/orange.jpg';
import telephone from '../images/bg-portfolio/telephone.jpg';
import coffee from '../images/bg-portfolio/coffee.jpg';

export const SectionPortfolio = () => {
    return (
        <section className="portfolio" id="portfolio">

            <h1 className="heading"><span>my</span> work </h1>

            <div className="box-container">

                <div className="box">
                    <img src={budgetCalculator} alt="image"/>
                    <div className="content">
                        <h3>budget calculator</h3>
                        <p>Project budget calculator</p>
                        <p>Technologies: SCSS, React TS, Redux-Toolkit</p>
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

    );
};


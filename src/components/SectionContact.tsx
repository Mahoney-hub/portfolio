import React from 'react';

export const SectionContact = () => {
    return (
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

    );
};


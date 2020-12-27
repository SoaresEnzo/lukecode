import React from 'react';

import './styles.css'

import yoda from '../../assets/images/characters/yoda.png'

import separator from '../../assets/images/separator.svg'

import Animation from '../../components/Animation'
import CardCourse from '../../components/CardCourse'

import courseReact from '../../assets/images/courses/react-redux.jpg';
import coursePHP from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';


const Home = () => {
    return (
        <>

            <Animation />
            <div className="section-1">
                <div className="container">

                    <header className="header">
                        <h2>Luke code</h2>

                        <nav>

                            <button>
                                FAZER LOGIN
                            </button>

                            <button>
                                INSCREVA-SE
                            </button>

                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre da programação</h1>
                            <img src={separator} alt="" />
                            <p>
                                Dê o próximo passo para o seu futuro, <br /> que a força esteja com você.
                                </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda Star Wars" />
                        </section>
                    </main>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos Completos</h2>
                    <p>Na Luke Code, você tem acesso a 3 cursos gratuitos,basta se cadastrar na plataforma</p>
                    <section className="card-container">
                        <CardCourse image={courseReact} description="Desenvolvimento Front-End com React e Redux">
                            Desenvolvimento Front-end <br /> React e Redux
                       </CardCourse>
                        <CardCourse image={coursePHP} description="PHP 7 - Trabalhando com PSR's">
                            PHP 7 - Trabalhando com PSR's
                       </CardCourse>
                        <CardCourse image={courseFlutter} description="Desenvolvimento IOS e Android com Flutter">
                            Desenvolvimento IOS e Android <br /> com Flutter
                       </CardCourse>

                    </section>
                    <button>
                        Inscreva-se
                    </button>
                </div>
            </div>
            <div className="section-3">
                <div className="container">
                    <h2>O que oferecemos para você</h2>
                    <section className="categories-container">
                    <div className="category-card">
                        <div className="category-card-image">

                        </div>
                        <div className="category-card-content">
                            <h4>htrhtr</h4>
                            <p>trhrhtrh</p>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;

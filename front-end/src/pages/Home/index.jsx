import React from 'react';

import './styles.css'

import yoda from '../../assets/images/characters/yoda.png'

import separator from '../../assets/images/separator.svg'

import CardCategory from '../../components/CardCategory';
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
                <div className="box">

                    <header className="header">
                        <h2>Luke code</h2>

                        <nav>

                            <button>
                                FAZER LOGIN
                            </button>

                            <button>
                                INSCREVA-SE
                            </button>

                            <button className="btn-menu">
                                <i className="fas fa-bars" />
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
                <div className="box">
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
                <div className="box">
                    <h2>O que oferecemos para você</h2>
                    <section className="categories-container">
                        <CardCategory title="Back-end" courses="22" color="red" />
                        <CardCategory title="Banco de dados" courses="2" color="yellow" />
                        <CardCategory title="Segurança" courses="22" color="purple" />
                        <CardCategory title="Mobile" courses="18" color="blue" />
                        <CardCategory title="Front-end" courses="14" color="green" />
                        <CardCategory title="Cloud Computing" courses="2" color="orange" />
                    </section>
                </div>
            </div>
            <div className="section-4">
                <div className="box">
                    <h2>Depoimentos</h2>
                </div>
            </div>
            <footer>
                &copy; Luke Code - Alguns direitos reservados - {new Date().getFullYear()}
            </footer>
        </>
    )
}

export default Home;
//03:01:00
// https://zoom.us/rec/play/_T18JPmzvVOtaLnEXJ3A-650pogGRkWP6OxaRIm5O_SRM1PL0XdIlcGOcTW3yMAbim84-fK5ob096u3O.MpU6w31KDhrsS1PD
// uV+G+1f1
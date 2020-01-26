import React from 'react';
import './About.scss';
import AboutImg from '../files/pictures/about.jpg'


export const About = () => {
        return (
            <section id="about">
                <div className="container main-title-section">
                    <h2>STAJNIA DAR</h2>
                    <h3>To nic innego jak miejsce stworzone przez rodzinę dla innych rodzin.</h3>
                </div>

                <div className="information-content container">
                    <div className="describe">
                        <div>
                            Czy kiedyś marzyliście o tym by mieć własnego rumaka? 
                        </div>
                        <div>
                            My tak, ale dopiero po kilkunastu latach marzeń, kształcenia się w tym kierunku, 
                            zdobywania nowej wiedzy i umiejętności Pan Bóg stwierdził, że jesteśmy na to gotowi i... 
                            postawił na naszej drodze CUDOWNEGO człowieka, który szybko pomógł nam w realizacji marzeń 
                            przywożąc na nasze podwórko TAJGĘ, kilka miesięcy później Figę i rok później Czaplę. 
                            Uwierzycie? Nam było ciężko to pojąć ale... WIARA CZYNI CUDA.A Pan Bóg czasami
                            posługuje się innymi ludźmi dając nam różne <span>DARY</span> m.in. życie, zdrowie, 
                            rodzinę, mądrość, realizację marzeń... itp. u nas posłużył się <span>Panem Robertem</span>.
                        </div>

                        <div>
                            Od tamtej pory bogatsi o kolejne doświadczenia we współpracy z Dąbrówką i Fundacją Odkrywamy 
                            Talenty powoli rozwijamy nasze miejsce... naszą stajnię.
                            Mamy nadzieję, że nie będzie ona tylko miejscem jazdy konnej ale i 
                            miejscem na rozmowy, odpoczynek, świadectwem wiary i... może wspólnej modlitwy?
                        
                        </div>
                        <div>
                            Jesteśmy osobami pełnymi pasji i zaangażowania więc na pewno wspólnie będziemy się dobrze bawić!
                        </div>
                        <a href="#offer"><button className="btn-contact">ZAPOZNAJ SIĘ Z NASZĄ OFERTĄ</button></a>
                    </div>
                    <div className="picture-container">
                        <img src={AboutImg} alt="about" />
                    </div>
                    
                </div>
            </section>
        );
      }
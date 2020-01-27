import React from 'react';
import './AboutTrainer.scss';
import AboutTrainerImg from '../files/pictures/about_trainer2.jpg'


export const AboutTrainer = () => {
    return (
        <section id="about-trainer">
            <div className="container main-title-section">
                <h2>INSTRUKTOR</h2>
                <h3>Poznaj naszą instruktorkę.</h3>
            </div>
            <div className="information-content container">
                <div className="describe-trainer">
                    <div>
                        Odkąd pamiętam uwielbiam pracę zarówno z ludźmi jak i końmi, zawód jaki wykonuję sprawia mi
                        radość i satysfakcję- nie może być inaczej skoro robi się to, co się kocha :)
                    </div>
                    <div>
                        Pasją do koni zaraziłam się od mojej mamy już w dzieciństwie - od tamtej pory 
                        "przepadłam" w końskim świecie. 
                    </div>
                    <div>
                        Zaczęłam od zdobycia <span>Brązowej Odznaki Jeździeckiej</span>, 
                        później <span>Srebrnej Odznaki Jeździeckiej</span>, następnie szkoliłam się zdobywając doświadczenie
                        w zawodach, zajeźdżaniu młodych koni.
                    </div>

                    <div>
                        Oprócz uprawnień instruktorskich posiadam uprawnienia i certyfikaty oparte o doświadczenie:
                    </div>
                    <ul>
                        <li>Trenera Młodych Koni</li>
                        <li>Przodownika Turystyki Jeździeckiej</li> 
                        <li>Wychowawcy kolonijnego</li> 
                        <li>Certyfikaty ukończenia kursu lonżowania koni II i I stopnia</li> 
                        <li>Uprawnienia do wykonywania Imprintingu u koni</li>
                    </ul>
                    <div>
                        Interesuję się i szkolę zarówno w jeździectweie klasycznym jak i naturalnym. 
                        Jestem <span>inżynierem Hipologii i Jeździectwa</span> oraz 
                        <span> studentką Jeździectwa Naturalnego Bez Tajemnic</span>.
                    </div>
                    <div>
                        Serdecznie zapraszam do zapisów na jazdy!
                    </div>
                    {/* <button className="btn-contact">ZAPOZNAJ SIĘ Z NASZĄ OFERTĄ</button> */}
                    <span className="signature">
                        Justyna Rycerz
                    </span>
                </div>
                <div className="picture-container">
                    <img src={ AboutTrainerImg } alt="about" />
                </div>
            </div>
        </section>
    );
}
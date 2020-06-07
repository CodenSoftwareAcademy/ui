import React from 'react';
import './About.css';
import gen1 from '../media/gen11.png';
import gen2 from '../media/gen21.png';
import AboutUs from './AboutUs';
import AboutAdvantages from './AboutAdvantages';
import AboutOffering from './AboutOffering';

function About() {
    return(
        <div className="about">
            <AboutUs />

            <h3 id="advantage">Avantaje</h3>
            <AboutAdvantages />

            <h3>Cum arata o sedinta obisnuita de curs</h3>
            <div className="about-lesson">
            <div className="lesson">
            
                <div className="lesson-content">
                <h4>1. Recapitulare</h4>
                    <p>Fiecare sedinta incepe cu recapitularea conceptelor studiate in sedinta anterioare pentru a ne asigura
                        ca toti studentii au inteles conceptele predate si pentru a avea raspuns la intrebarile aparute dupa terminarea
                        sedintei precedente.
                    </p>
                <h4>2. Notiuni teoretice predate de instructor live</h4>
                    <p>Prima activitate noua in cadrul unei sedinte de curs este aceea de predare a notiunilor teoretice.
                        Conceptele sunt predate de catre instructor in cadrul unei sesiuni live, sesiune ce va fi inregistrata
                         si pusa la dispozitia studentilor pentru a o putea consulta de oricate ori este necesar, cat si pentru 
                         cazurile cand acestia nu pot asista la sesiunea live.
                    </p>

                <img src={gen2} alt="remote training" />
                </div>
            </div>
            <div className="about-lesson-img">
                <img src={gen1} alt="individual training" />

                <h4>3. Exersarea noilor concepte invatate</h4>
                    <p>Dupa predarea notiunilor teoretice, studentii vor pune in aplicare conceptele predate prin rezolvarea
                         unui set de exercitii. Dupa terminarea timpului alocat acestor exercitii, instructorul va prezenta 
                         rezolvarea acestora si va ajuta fiecare student in parte sa inteleaga metoda de rezolvare.
                    </p>
                <h4>4. Exersarea gandirii algoritmice</h4>
                    <p>Un programator creaza algoritmi. Pentru aceasta, are nevoie de o gandire logica si structurata. 
                        Intrucat acest mod de gandire este extrem de important in acest domeniu, este necesara alocarea
                        unui interval de timp in cadrul fiecarei sedinte pentru rezolvarea de probleme de algoritmica.
                        La finalul timpului alocat pentru acest tip de probleme, intructorul va prezenta rezolvarea 
                        problemelor si va explica fiecarui student in parte metoda de rezolvare.
                    </p>
            </div>
            </div>
            <AboutOffering />
        </div>
    )
}

export default About;
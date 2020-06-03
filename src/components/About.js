import React from 'react';
import gen1 from '../gen11.png';
import gen2 from '../gen21.png';

function About() {
    return(
        <div className="about">
            <div className="about-us">
                <p>Cursurile din cadrul Coden Software Academy sunt destinate persoanelor care isi doresc sa urmeze o cariera 
                in Web Development, celor care doresc sa isi perfectioneze cunostintele tehnice cat si companiile care doresc 
                intruirea angajatilor.</p>
                <p>Pentru a putea livra toate cunostintele necesare unui Junior Web Developer intr-un timp cat mai scurt,
                am dezvoltat un program condensat de numai 7 saptamani pentru Frontend Development si 12 saptamani pentru 
                Full Stack Development. Intrucat este vorba de un volum foarte mare de informatii noi, este recomandata si 
                alocarea unui timp individual de studiu in afara orelor de curs.</p>
                <p id="trainer">Cursurile sunt tinute de traineri certificati cu experienta atat in industrie cat si in mediul academic</p>
                <p>Cursurile se desfasoara exclusiv la distanta, fiecare sedinta avand loc pe o platforma de video conferinta 
                impreuna cu instructorul cursului respectiv. Avantajele acestui tip de colaborare este timpul economisit, 
                nefiind necesara deplasarea la sau de la sala de curs precum si inregistrarile fiecarei sedinte de curs si punerea la dispozitie 
                catre studenti a materialelor inregistrate pentru consultarea lor ulterioara.</p>
                <p>Puteti opta pentru cursul de <b>Full Stack Developer</b> care cuprinde doua module: Frontend si Backend sau pentru cursul <b>Frontend Developer</b> care cuprinde doar modulul de Frontend</p>
                <p>Tot ce aveti nevoie este un laptop sau calculator, o conexiune buna la internet si dorinta de a invata!</p>
            </div>

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
            <div className="offering">
                <h3>Ce iti oferim in cadrul cursului</h3>
                <div className="offering-content">
                    <div className="oc-1">
                        <ul>
                            <li>
                            Cum sa construiesti o aplicatie web adaptabila atat pentru desktop cat si pentru mobil
                            </li>
                            <li>
                            Iti vei dezvolta gandirea algoritmica pentru a putea dezvolta orice algoritm
                            </li>
                            <li>
                            Punem accentul pe dezvoltarea capacitatii studentului de a se descurca singur in rezolvarea problemelor
                            </li>
                            <li>
                            Cum sa obtii date de la un API si sa le afisezi in propria aplicatie web
                            </li>
                            <li>
                                Cum sa utilizezi un state manager
                            </li>
                        </ul>
                    
                    
                    
                    
                    </div>
                    <div className="oc-2">
                        <ul>
                            <li>
                                Cum sa proiectezi si sa creezi o baza de date
                            </li>
                            <li>
                                Cum sa dezvolti propriul API
                            </li>
                            <li>
                                Cum sa dezvolti propria aplicatie capabila sa comunice cu baza de date
                            </li>
                            <li>
                                Cum sa utilizezi tool-uri de versionare si metodologia de lucru Agile
                            </li>
                            <li>
                                Te ajutam sa iti creezi CV-ul si te pregatim pentru interviuri prin simulari
                            </li>
                        </ul>
                    
                    
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
import React from 'react';

const ABOUT_US_DATA = [
    {type: "normal", text: "Cursurile din cadrul Coden Software Academy sunt destinate persoanelor care isi doresc sa urmeze o cariera in Web Development, celor care doresc sa isi perfectioneze cunostintele tehnice cat si companiile care doresc intruirea angajatilor."},
    {type: "normal", text: "Pentru a putea livra toate cunostintele necesare unui Junior Web Developer intr-un timp cat mai scurt, am dezvoltat un program condensat de numai 7 saptamani pentru Frontend Development si 12 saptamani pentru Full Stack Development."},
    {type: "trainer", text: "Cursurile sunt tinute de traineri certificati cu experienta atat in industrie cat si in mediul academic"},
    {type: "normal", text: "Cursurile se desfasoara exclusiv la distanta, fiecare sedinta avand loc pe o platforma de video conferinta impreuna cu instructorul cursului respectiv. Avantajele acestui tip de colaborare este timpul economisit, nefiind necesara deplasarea la sau de la sala de curs precum si inregistrarile fiecarei sedinte de curs si punerea la dispozitie catre studenti a materialelor inregistrate pentru consultarea lor ulterioara."},
    {type: "bold", text: "Puteti opta pentru cursul de Full Stack Developer care cuprinde doua module: Frontend si Backend sau pentru cursul Frontend Developer care cuprinde doar modulul de Frontend"},
    {type: "normal", text: "Tot ce aveti nevoie este un laptop sau calculator, o conexiune buna la internet si dorinta de a invata!"}
]    

const DEV_TYPES = [
    "Full Stack Developer",
    "Frontend Developer"
]

function AboutUs() {
    return(
        <div className="about-us">
            {ABOUT_US_DATA.map((item, i) => {
                switch(item.type){
                    case "trainer":
                        return(
                            <p key={i} id={item.type}>
                                {item.text}
                            </p>
                        );
                    case "bold":
                        let firstPart = item.text.slice(0, item.text.indexOf(DEV_TYPES[0]));
                        let secondPart = item.text.slice(item.text.indexOf(DEV_TYPES[0])
                                        , item.text.indexOf(DEV_TYPES[0])
                                        + DEV_TYPES[0].length);
                        let thirdPart = item.text.slice(item.text.indexOf(DEV_TYPES[0])
                                        +DEV_TYPES[0].length
                                        , item.text.indexOf(DEV_TYPES[1]));
                        let fourthPart = item.text.slice(item.text.indexOf(DEV_TYPES[1])
                                        , item.text.indexOf(DEV_TYPES[1])
                                        + DEV_TYPES[1].length);
                        let fifthPart = item.text.slice(item.text.indexOf(DEV_TYPES[1])
                                        +DEV_TYPES[1].length
                                        , item.text.length);
                        return(
                            <p key={i}>
                                {firstPart}
                                <b>
                                    {secondPart}
                                </b>
                                {thirdPart}
                                <b>
                                    {fourthPart}
                                </b>
                                {fifthPart}
                            </p>

                        );
                    default:
                        return(
                            <p key={i}>
                                {item.text}
                            </p>
                        )
                }
            })}
        </div>
    )
}

export default AboutUs;
import React from 'react';
import bullet from '../media/bullet.png';

const ADVANTAGES_DATA = [
    "Ai posibilitatea de a incepe o cariera intr-unul dintre cele mai bine platite domenii de pe piata.",
    "Nu este nevoie sa ai cunostinte in IT pentru a incepe cursul. Tot ce ai nevoie este determinarea de a invata si exersa.",
    "Daca in primele doua saptamani consideri ca acest curs nu este ceea ce iti doresti, te poti retrage si vei primi integral suma platita.",
    "Vei folosi un stack modern de tehnologii precum React, Redux, Node, Express sau MongoDB.",
    "Vei dezvolta in cadrul cursului proiecte pe care le poti adauga in portofoliul personal si prezenta la interviurile de angajare.",
    "Vei avea parte de traineri cu experienta atat in predarea conceptelor tehnice cat si in aplicarea lor in industrie.",
    "Pe langa predarea notiunilor teoretice, trainerii te vor indruma cu sfaturi atat tehnice cat si non-tehnice legate de urmatorii pasi in cariera de Developer.",
    "Vei avea parte de exercitii algoritmice la fiecare sedinta pentru a-ti dezvolta gandirea analitica.",
    "Vei invata cum sa cauti informatii tehnice relevante atunci cand ajungi intr-un impas in dezvoltarea aplicatiei tale.",
    "Toate sedintele vor fi inregistrate si puse la dispozitia ta pentru a le putea consulta de cate ori consideri ca este nevoie.",
    "Te vom ajuta sa te pregatesti pentru interviuri, prin asistenta la crearea CV-ului precum si prin simularea unui interviu tehnic cu trainerii nostri.",
    "Dupa terminarea cursului vei putea programa o sedinta gratuita de consultanta cu trainerul tau pentru a te ajuta atat tehnic cat si cu sfaturi non-tehnice."
]

function AboutAdvantages() {
    return (
            <div className="about-advantages">
                <div className="advantage-list">
                    {ADVANTAGES_DATA.map((item, i) => (
                        <div key={i}>
                            <img src={bullet} alt='bullet'/>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default AboutAdvantages;
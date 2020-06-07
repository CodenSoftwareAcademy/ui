import React from 'react';

const OFFERING_DATA = [
    [
        "Cum sa construiesti o aplicatie web adaptabila atat pentru desktop cat si pentru mobil",
        "Iti vei dezvolta gandirea algoritmica pentru a putea dezvolta orice algoritm",
        "Punem accentul pe dezvoltarea capacitatii studentului de a se descurca singur in rezolvarea problemelor",
        "Cum sa obtii date de la un API si sa le afisezi in propria aplicatie web",
        "Cum sa utilizezi un state manager"
    ],
    [
        "Cum sa proiectezi si sa creezi o baza de date",
        "Cum sa dezvolti propriul API",
        "Cum sa dezvolti propria aplicatie capabila sa comunice cu baza de date",
        "Cum sa utilizezi tool-uri de versionare si metodologia de lucru Agile",
        "Te ajutam sa iti creezi CV-ul si te pregatim pentru interviuri prin simulari"
    ]
];
const OFFERING_HEAD = 'Ce iti oferim in cadrul cursului';

function AboutOffering() {
    return(
        <div className="offering">
            <h3>{OFFERING_HEAD}</h3>
            <div className="offering-content">
                <div className="oc-1">
                    <ul>
                        {OFFERING_DATA[0].map((item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="oc-2">
                    <ul>
                        {OFFERING_DATA[1].map((item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutOffering;
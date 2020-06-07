import React from 'react';
import './Apply.css';
import b1 from '../media/bullet11.png';
import b2 from '../media/bullet2.png';
import b3 from '../media/bullet31.png';
import ApplyForm from './ApplyForm';

const APPLY_STEPS = [
    "Completezi formularul de mai jos cu datele tale de contact si alegi cursul care ti se potriveste.",
    "Noi te sunam pentru a-ti detalia viziunea noastra si pentru a vedea daca este potrivita pentru tine.",
    "Felicitari, ai fost admis!",
    "Pentru a te pregati de inceperea cursului, iti vom pune la dispozitie un material pregatitor."
]
const APPLY_HEAD = "Aplica acum!";

class Apply extends React.Component {
    render() {
        return(
            <div className="apply-process">
                <div className="apply-steps">
                    <div>
                        <img src={b1} alt="b1"/>
                        <h4>
                            {APPLY_STEPS[0]}
                        </h4>
                    </div>
                    <div>
                        <img src={b2} alt="b2"/>
                        <h4>
                            {APPLY_STEPS[1]}
                        </h4>
                    </div>
                    <div>
                        <img src={b3} alt="b3"/>
                        <h4>
                            <span>{APPLY_STEPS[2]}<br/></span> {APPLY_STEPS[3]}
                        </h4>
                    </div>
                </div>
                <div className="apply-form">
                    <h2>{APPLY_HEAD}</h2>
                    <ApplyForm />
                </div>
            </div>
        )
    }
}

export default Apply;
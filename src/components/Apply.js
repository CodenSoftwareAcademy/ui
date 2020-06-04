import React from 'react';
import b1 from '../bullet11.png';
import b2 from '../bullet2.png';
import b3 from '../bullet31.png';
import ApplyForm from './ApplyForm';


class Apply extends React.Component {
    render() {
        return(
            <div className="apply-process">
                <div className="apply-steps">
                    <div>
                        <img src={b1} alt="b1"/>
                        <h3>
                        Completezi formularul de mai jos cu datele tale de contact si alegi cursul care ti se potriveste.
                    </h3>
                    </div>
                    <div>
                        <img src={b2} alt="b2"/>
                        <h3>
                        Noi te sunam pentru a-ti detalia viziunea noastra si pentru a vedea daca este potrivita pentru tine.
                    </h3>
                    </div>
                    <div>
                        <img src={b3} alt="b3"/>
                        <h3>
                        <span>Felicitari, ai fost admis!</span> Pentru a te pregati de inceperea cursului, iti vom pune la dispozitie un material pregatitor.
                    </h3>
                    </div>
                </div>
                <div className="apply-form">
                    <h2>Aplica acum!</h2>
                    <ApplyForm />
                </div>
            </div>
        )
    }
}

export default Apply;
import React from 'react';

const OFFERING_DATA = [
    [
        "How to build a web application adaptable for both desktop and mobile",
        "You will develop your algorithmic thinking in order to be able to develop any algorithm",
        "We focus on developing the student's ability to handle problems on their own",
        "How to get data from an API and display it in your own web application",
        "How to use a state manager"
    ],
    [
        "How to design and create a database",
        "How to develop your own API",
        "How to develop your own application capable of communicating with a database",
        "How to use versioning tools and Agile work methodology",
        "We help you create your CV and prepare for interviews through simulations"
    ]
];
const OFFERING_HEAD = 'What you will learn during the course';

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
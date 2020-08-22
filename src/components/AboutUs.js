import React from 'react';

const ABOUT_US_DATA = [
    {type: "normal", text: "The Coden Software Academy courses are intended for people who want to pursue a career in Web Development, for those who want to improve their technical knowledge and for companies who want to train their employees."},
    {type: "normal", text: "In order to be able to deliver all the necessary knowledge for a Junior Web Developer in the shortest time, we have developed a condensed program of only 7 weeks for Frontend Developer and 12 weeks for Full Stack Developer."},
    {type: "trainer", text: "The courses are held by certified trainers with experience in both industry and academia."},
    {type: "normal", text: "The courses take place exclusively remote, each session taking place on a video conferencing platform together with the instructor of the respective course. The advantages of this type of collaboration is the time saved, not being necessary anymore to travel to or from the classroom as well as the availability of the recorded sessions to students for later consultation."},
    {type: "bold", text: "You can apply for the Full Stack Developer course which includes two modules: Frontend and Backend or for the Frontend Developer course which includes only the Frontend module."},
    {type: "normal", text: "All you need is a laptop or computer, a good internet connection and the willingness to learn!"}
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
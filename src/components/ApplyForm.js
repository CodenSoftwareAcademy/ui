import React from 'react';
import {Form, Button} from 'react-bootstrap';

const SUCCESS_MSG = "Ai aplicat cu succes! Vei primit un email de confirmare.";
const FAIL_MSG = "Ceva nu a mers bine. Mai incearca o data!";
const SUBMIT_BTN = 'Submit';
const TABLE_DATA = [
  {
      name: "Full-Stack Javascript Developer - Romana",
      start: "01/09/2020",
      duration: "12 weeks",
      price: "4000 RON"
  },
  {
      name: "Frontend Developer - Romana",
      start: "01/09/2020",
      duration: "7 weeks",
      price: "2500 RON"
  },
  {
      name: "Full-Stack Javascript Developer - Romana",
      start: "05/01/2021",
      duration: "12 weeks",
      price: "4000 RON"
  },
  {
      name: "Full-Stack Javascript Developer - Engleza",
      start: "To be announced",
      duration: "12 weeks",
      price: "4000 RON"
  },
  {
      name: "Frontend Developer - Engleza",
      start: "To be announced",
      duration: "7 weeks",
      price: "2500 RON"
  },
];

const SOURCE_DATA = [
  'De unde ai aflat de noi?',
      'Social Media (Facebook, Instagram, etc.)',
      'Google',
      'Recomandare',
      'Alte Surse'
]

const COURSE_DEFAULT_OPTION = 'Selectati un curs';

const SOURCE_FRIEND = "Numele prietenului care ne-a recomandat";
const SOURCE_OTHER = "Numele sursei"

class ApplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

    render() {
      console.log(this.state)
        return (
          <Form>
            <Form.Group controlId="lastname">
              <Form.Control onChange={this.onChange} type="text" placeholder="Nume" />
            </Form.Group>
            <Form.Group controlId="firstname">
              <Form.Control onChange={this.onChange} type="text" placeholder="Prenume" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control onChange={this.onChange} type="email" placeholder="Adresa Email" />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control onChange={this.onChange} type="text" placeholder="Numar de telefon" />
            </Form.Group>
            <Form.Group controlId="course">
              <Form.Control onChange={this.onChange} as="select">
                <option>{COURSE_DEFAULT_OPTION}</option>
                {TABLE_DATA.map((item, i) => (
                  <option key={i}>{`${item.name} -> ${item.start}`}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Control onChange={this.onChange} as="textarea" rows="6" placeholder="Mesaj (optional)" />
            </Form.Group>
            <Form.Group controlId="source">
              <Form.Control onChange={this.onChange} as="select">
                {SOURCE_DATA.map((item,i) => (
                  <option key={i}>{item}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group onChange={this.onChange} className={this.state.source==SOURCE_DATA[SOURCE_DATA.length-2] || this.state.source==SOURCE_DATA[SOURCE_DATA.length-1] ? 'source-show' : 'source-hide'} controlId="source-msg">
                <Form.Control type="text" placeholder={this.state.source==SOURCE_DATA[SOURCE_DATA.length-2]? SOURCE_FRIEND : SOURCE_OTHER} />
            </Form.Group>
            <Button type="button">
              {SUBMIT_BTN}
            </Button>
            <Form.Label className={`submitForm ${this.state.submitForm}`}>
              {this.state.submitForm === "success"
              ? SUCCESS_MSG
              : FAIL_MSG}
            </Form.Label>
        </Form>
        )
    }
}

export default ApplyForm;
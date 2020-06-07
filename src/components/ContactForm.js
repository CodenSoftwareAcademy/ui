import React from 'react';
import {Form, Button} from 'react-bootstrap';

const SUCCESS_MSG = "Ai aplicat cu succes! Vei primit un email de confirmare.";
const FAIL_MSG = "Ceva nu a mers bine. Mai incearca o data!";
const SUBMIT_BTN = 'Submit';

class ContactForm extends React.Component {
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
                <Form.Group controlId="name">
                    <Form.Control onChange={this.onChange} type="text" placeholder="Nume si Prenume" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control onChange={this.onChange} type="email" placeholder="Adresa Email" />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Control onChange={this.onChange} type="text" placeholder="Numar de telefon" />
                </Form.Group>
    
                <Form.Group controlId="message">
                    <Form.Control onChange={this.onChange} as="textarea" rows="6" placeholder="Mesaj" />
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

export default ContactForm;
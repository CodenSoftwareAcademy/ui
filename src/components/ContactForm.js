import React from 'react';
import {Form, Button} from 'react-bootstrap';

const SUCCESS_MSG = "Your message has been sent successfully! You will receive an answer as soon as possible.";
const FAIL_MSG = "Something went wrong. Try again!";
const SUBMIT_BTN = 'Submit';
const SENDING = "Sending message...";
const URL = "https://csa-server.herokuapp.com/contact";
const AGREEMENT_MSG = "I have read and agree with ";
const AGREEMENT_LINK = "Privacy policy";
const AGREEMENT_REQ = 'Accept the privacy policy in order to continue';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sending: false,
        agreed: false,
        agreementNotChecked: true
      }
  }

  sendForm = () => {
    if(this.state.agreed){
        this.setState({sending: true, agreementNotChecked: true})
      fetch(URL,
        {
            method : 'POST',
            headers : new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        })
        .then( res => 
            res.ok 
            ? this.setState({submitForm: "success", sending: false})
            : this.setState({submitForm: "fail", sending: false})
        )
        .catch(err => this.setState({submitForm: "fail", sending: false}))
    } else {
        this.setState({agreementNotChecked: false})
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
                    <Form.Control onChange={this.onChange} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control onChange={this.onChange} type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Control onChange={this.onChange} type="text" placeholder="Phone number" />
                </Form.Group>
    
                <Form.Group controlId="message">
                    <Form.Control onChange={this.onChange} as="textarea" rows="6" placeholder="Message" />
                </Form.Group>
                
                <Form.Check 
                    type={'checkbox'}
                    id={`default-checkbox`}
                    checked={this.state.agreed}
                    onChange={() => this.setState({agreed: !this.state.agreed})}
                    label={<span>{AGREEMENT_MSG} <a href={process.env.PUBLIC_URL + '/privacy-policy.pdf'}>{AGREEMENT_LINK}</a></span>}
                />
            {!this.state.agreementNotChecked &&<span className="agreementNotChecked"> {AGREEMENT_REQ}</span>}
                <Button type="button" onClick={this.sendForm}>
                    {SUBMIT_BTN}
                </Button>
                    {this.state.sending ? <p style={{textAlign: 'center'}}>{SENDING}</p> : null}
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
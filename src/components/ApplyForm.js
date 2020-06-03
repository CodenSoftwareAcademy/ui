import React from 'react';
import {Form, Button} from 'react-bootstrap';

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
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control onChange={this.onChange} type="text" placeholder="Nume" />
            </Form.Group>
            <Form.Group controlId="firstname">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control onChange={this.onChange} type="text" placeholder="Prenume" />
            </Form.Group>
            <Form.Group controlId="email">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control onChange={this.onChange} type="email" placeholder="Adresa Email" />
            </Form.Group>
            <Form.Group controlId="phone">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control onChange={this.onChange} type="text" placeholder="Numar de telefon" />
            </Form.Group>
  <Form.Group controlId="course">
    {/* <Form.Label>Example select</Form.Label> */}
    <Form.Control onChange={this.onChange} as="select">
      <option>Selectati un curs</option>
      {TABLE_DATA.map((item, i) => (
        <option key={i}>{`${item.name} -> ${item.start}`}</option>
      ))}
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="message">
    {/* <Form.Label>Example textarea</Form.Label> */}
    <Form.Control onChange={this.onChange} as="textarea" rows="6" placeholder="Mesaj (optional)" />
  </Form.Group>
  <Form.Group controlId="source">
    {/* <Form.Label>Example select</Form.Label> */}
    <Form.Control onChange={this.onChange} as="select">
      <option>De unde ai aflat de noi?</option>
      <option>Social Media (Facebook, Instagram, etc.)</option>
      <option>Google</option>
      <option>Recomandare</option>
      <option>Alte Surse</option>
    </Form.Control>
  </Form.Group>
            <Form.Group onChange={this.onChange} className={this.state.source=="Recomandare" || this.state.source=='Alte Surse' ? 'source-show' : 'source-hide'} controlId="source-msg">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" placeholder={this.state.source=="Recomandare"? "Numele prietenului care ne-a recomandat": "Numele sursei"} />
            </Form.Group>
  <Button type="button">
    Submit
  </Button>
  <Form.Label className={`submitForm ${this.state.submitForm}`}>
      {this.state.submitForm === "success" ? 
      "Ai aplicat cu succes! Vei primit un email de confirmare.":
      "Ceva nu a mers bine. Mai incearca o data!"}
    </Form.Label>
</Form>
        )
    }
}

export default ApplyForm;
import React from 'react';
import {Button, Table} from 'react-bootstrap';

const TABLE_HEADER = [
    "Course",
    "Start date",
    "Durata",
    "Price",
    "Program"
];

const TABLE_DATA = [
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "01/09/2020",
        duration: "12 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850"
    },
    {
        name: "Frontend Developer - Romana",
        start: "01/09/2020",
        duration: "7 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "500"
    },
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "05/01/2021",
        duration: "12 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850"
    },
    {
        name: "Full-Stack Javascript Developer - Engleza",
        start: "To be announced",
        duration: "12 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "850"
    },
    {
        name: "Frontend Developer - Engleza",
        start: "To be announced",
        duration: "7 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "500"
    },
];

function Courses() {
    return(
        <Table responsive>
      <thead>
          <tr>
            {TABLE_HEADER.map((item,i) => (
                <th key={i}>
                    {item}
                </th>
            ))}
        </tr>
      </thead>
      <tbody>
          {TABLE_DATA.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                  <td>{item.start}</td>
                  <td>{item.duration}</td>
                  <td>{item.price} &euro;</td>
                  <td>{item.schedule[0]}<br/>{item.schedule[1]}<br/>{item.schedule[2]}</td>
                  {/* <td><Button variant="outline-dark"><a href="#apply">Aplica</a></Button></td> */}
              </tr>
          ))}
        {/* <tr>
          <td>Full-Stack Javascript Developer - Romana</td>
          <td>01/09/2020</td>
          <td>12 weeks</td>
          <td>4000 RON</td>
          <td><Button variant="outline-dark">Aplica</Button></td>
        </tr>
        <tr>
          <td>Frontend Developer - Romana</td>
          <td>01/09/2020</td>
          <td>7 weeks</td>
          <td>2500 RON</td>
          <td><Button variant="outline-dark">Aplica</Button></td>
        </tr>
        <tr>
          <td>Full-Stack Javascript Developer - Romana</td>
          <td>05/01/2021</td>
          <td>12 weeks</td>
          <td>4000 RON</td>
          <td><Button variant="outline-dark">Aplica</Button></td>
        </tr>
        <tr>
          <td>Full-Stack Javascript Developer - Engleza</td>
          <td>To be announced</td>
          <td>12 weeks</td>
          <td>4000 RON</td>
          <td><Button variant="outline-dark">Aplica</Button></td>
        </tr>
        <tr>
          <td>Frontend Developer - Engleza</td>
          <td>To be announced</td>
          <td>7 weeks</td>
          <td>2500 RON</td>
          <td><Button variant="outline-dark">Aplica</Button></td>
        </tr> */}
      </tbody>
    </Table>
    )
}

export default Courses;
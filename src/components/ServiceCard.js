import React from 'react'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ServiceCard(props) {
  const { name, desc, img, f1, f2, f3 } = props.card;
  return (
    <div className="col-md-6 col-lg-4 pb-4">
      <Card>
        <CardBody style={{padding: '2rem'}}>
          <CardTitle className="cardtitle"><img src={img} alt="shape" className="titleimg"/><strong>{'  ' + name}</strong></CardTitle>
          <CardSubtitle className="cardsubtitle">{desc}</CardSubtitle>
          <hr />
          <CardText>
            <p><strong>POPULAR FEATURES</strong></p>
            <p><img src="images/check.PNG" className="checkimg" alt="marked"/>{'  ' + f1}</p>
            <p><img src="images/check.PNG" className="checkimg" alt="marked"/>{'  ' + f2}</p>
            <p><img src="images/check.PNG" className="checkimg" alt="marked"/>{'  ' + f3}</p>
          </CardText>
          <Button style={{marginTop: 10, width: '100%', padding: 10, backgroundColor: '#FF7A59', border: 'none'}}>Get started</Button>
        </CardBody>
      </Card>
    </div>
  )
}

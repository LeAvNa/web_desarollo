import { Button, Form, Col, Row } from 'react-bootstrap';



function PrimerFormulario(personaNombre){

    function Click(){
        console.log(personaNombre);
    }
    
    return (
        <Row>
            <Col>
                <Form.Label>texto que quieres</Form.Label>
            </Col>
            <Col>
                <Form.Control type='text' value={personaNombre.personaNombre}></Form.Control>
            </Col>
            <Col>
                <Button variant="primary" onClick={Click()}>Primary</Button>{''}
            </Col>
        </Row>
    )

}

export default PrimerFormulario;

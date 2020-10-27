import React from 'react'

import {
    Container,
    Col,
    Row,
    Button,
    Input,
    Form
} from 'reactstrap'

export default function Profile (){
    return (
        <Container>
            <Col>
                <form>
                    <Input
                    className='mb-2'
                        placeholder='texto teste'
                        type='text'
                    />
                    <Input
                      placeholder='texto teste'
                      type='text'
                      />
                </form>
            </Col>
        </Container>
    )
}

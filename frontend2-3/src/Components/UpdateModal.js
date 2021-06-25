import React, {useState} from 'react'
import { useHistory} from 'react-router-dom';
import {Button} from './ArticleCard';
import {VscSave} from 'react-icons/vsc';
import styled from 'styled-components';
import { Input, Form } from 'antd';


const Container = styled.div`

position: fixed;
left: 50%;
transform: translate(-50%, 0);
width: 70%; 
padding: 4rem; 
border: 2px solid black; 
border-radius: 30px;
z-index: 1000;  
`


const UpdateModal = () => {
    const { TextArea } = Input;
    const {push} = useHistory()

    const modalFormat = {
        title: '',
        link:'',
        summary:''
    }

    const [modalContent, setModalContent] = useState(modalFormat)
    const {title, link, summary} = modalContent

    const handleChange = (event) => {
        setModalContent({...modalContent, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        push('/userdashboard')
    }
    return(

        <Container>
            <Form onSubmit={handleSubmit}>
                <h2>Enter Your Changes Below</h2>
                <Form.Item type="text" 
                name='title'
                placeholder='title'
                value={title}
                onChange={handleChange}
                >
                <input />
                </Form.Item>

                <Form.Item type="text" 
                name='link'
                placeholder='link'
                value={link}
                onChange={handleChange}>

                <input />
                </Form.Item>
                <TextArea type="text" 
                name='summary'
                placeholder='Something short & sweet?'
                value={summary}
                onChange={handleChange}
                autoSize={{ minRows: 5, maxRows: 7 }}
                >
                </TextArea>
                <br />
                <Button onClick={handleSubmit} primary><VscSave/> &nbsp; Save Changes</Button>
        </Form>

        </Container>
    )
}
export default UpdateModal 


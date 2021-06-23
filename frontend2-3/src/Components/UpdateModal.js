import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import {Button} from './ArticleCard';
import {VscSave} from 'react-icons/vsc';
import styled from 'styled-components';
import { Input } from 'antd';

const Container = styled.div`

position: fixed;
left: 50%;
transform: translate(-50%, 0);
width: 70%; 
padding: 4rem; 
border: 2px solid black; 
border-radius: 30px; 
`

const JazzyInput = styled.input`

width: 40%; 
padding: 1em;
border-radius: 30px; 
outline: none; 
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
            <form onSubmit={handleSubmit}>
                <h2>Enter Your Changes Below</h2>
                <JazzyInput type="text" 
                name='title'
                placeholder='title'
                value={title}
                onChange={handleChange}
                />
                <br />
                <br />
                <JazzyInput type="text" 
                name='link'
                placeholder='link'
                value={link}
                onChange={handleChange}/>
                <br />
                <br />
                <TextArea type="text" 
                name='summary'
                placeholder='Something short & sweet?'
                value={summary}
                onChange={handleChange}
                autoSize={{ minRows: 5, maxRows: 7 }}
                >
                </TextArea>
                <br />
                <Button primary><VscSave/> &nbsp; Save Changes</Button>
        </form>

        </Container>
    )
}
export default UpdateModal 


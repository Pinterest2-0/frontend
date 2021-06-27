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
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

const UpdateModal = ({setIsVisible, editModal, setEditModal, setGlobalArticles}) => {
    const { TextArea } = Input;

    // const modalFormat = {
    //     title: '',
    //     link:'',
    //     summary:''
    // }

    const [modalContent, setModalContent] = useState(modalFormat)
    const {title, link, description} = editModal

    const handleChange = (event) => {
        setEditModal({...editModal, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axiosWithAuth().put(`/articles/${editModal.article_id}`, editModal)
        .then(res => {
            console.log(res)
            setIsVisible(false);
        })
        .catch(err => {
            console.log("handleSubmit:UpdateModal:Not working: ", err)
            setIsVisible(false);
        })
    }

    const handleExit= () => {
        setIsVisible(false);
    }
    return(

        <Container>
            <Form {...layout} onSubmit={handleSubmit}>
                <h2>Enter Your Changes Below</h2>
                <Form.Item type="text" 
                name='title'
                label='Title'
                value={title}
                onChange={handleChange}
                >
                <input />
                </Form.Item>

                <Form.Item type="text" 
                name='link'
                label='Link'
                value={link}
                onChange={handleChange}>

                <input />
                </Form.Item>
                <TextArea type="text" 
                name='summary'
                placeholder='Something short & sweet?'
                value={description}
                onChange={handleChange}
                autoSize={{ minRows: 5, maxRows: 7 }}
                >
                </TextArea>
                <br />
                <Button onClick={handleSubmit} primary><VscSave/> &nbsp; Save Changes</Button>
                <Button onClick={handleExit} primary > Nevermind!</Button>
        </Form>

        </Container>
    )
}
export default UpdateModal 


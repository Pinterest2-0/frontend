import React, {useState} from 'react'
import { useHistory} from 'react-router-dom';
import {Button} from './ArticleCard';
import {VscSave} from 'react-icons/vsc';
import styled from 'styled-components';
import { Input, Form } from 'antd';


// const Container = styled.div`

// position: fixed;
// left: 50%;
// transform: translate(-50%, 0);
// width: 70%; 
// padding: 4rem; 
// border: 2px solid black; 
// border-radius: 30px;
// z-index: 1000;  
// `
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

const UpdateModal = ({setIsVisible, editModal}) => {
    const { TextArea } = Input;
console.log("Testing for editModal: ",editModal)
    const modalFormat = {
        title: '',
        link:'',
        description:''
    }

    const [modalContent, setModalContent] = useState(modalFormat)
    const {title, link, description} = modalContent

    const handleChange = (event) => {
        setModalContent({...modalContent, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsVisible(false);
    }
    return (

        <div>
            <Form {...layout} onSubmit={handleSubmit}>
                <h2>Enter Your Changes Below</h2>
                <input type="text" 
                name='title'
                label='Title'
                value={editModal.title}
                onChange={handleChange}
                />

                <input type="text" 
                name='link'
                label='Link'
                value={editModal.link}
                onChange={handleChange}/>

                <TextArea type="text" 
                name='summary'
                placeholder='Something short & sweet?'
                value={editModal.description}
                onChange={handleChange}
                autoSize={{ minRows: 5, maxRows: 7 }}
                >
                </TextArea>
                <br />
                <Button onClick={handleSubmit} primary><VscSave/> &nbsp; Save Changes</Button>
        </Form>

        </div>
    )
}
export default UpdateModal 


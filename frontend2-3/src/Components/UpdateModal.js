import React, {useState} from 'react'
import {useParams} from 'react-router-dom';



const UpdateModal = () => {


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

    return(

        <>
            <form>
                <input type="text" 
                name='title'
                placeholder='title'
                value={title}
                onChange={handleChange}
                />
                <br />
                <input type="text" 
                name='link'
                placeholder='link'
                value={link}
                onChange={handleChange}/>
                <br />
                <textarea type="text" 
                name='summary'
                placeholder='Something short & sweet?'
                value={summary}
                >
                </textarea>
                <br />
                <button>Save Changes</button>
        </form>

        </>
    )
}
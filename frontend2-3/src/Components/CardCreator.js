import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from './ArticleCard';

// Not exported until Component can be used. 
const CardCreator = () => { 

    const { push } = useHistory()

    const newCardStandard= {
    title: '',
    category:'',
    link: '',
    description:''
    }

    const [newCard, setNewCard] = useState(newCardStandard)

const {title, category, link, description } = newCard

const handleChange = (event) => {
    setNewCard({...newCard, [event.target.name]:event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://pintereachunit4.herokuapp.com/api/articles', newCard) 
    .then(res =>{
    console.log("Successful Article Post: ",res)
    console.log(newCard);
    push('/userdashboard')
    })
    .catch(err =>{
    console.log("Article Post went wrong: ", err)
    })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="ModalContainer">
                <input type="text" 
                name='title'
                placeholder='title'
                value={title}
                onChange={handleChange}
                />
                <br />
                <input type="text" 
                name='category'
                placeholder='category'
                value={category}
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
                name='description'
                placeholder='Something short & sweet?'
                value={description}
                onChange={handleChange}>
                </textarea>
                <br />
                <Button primary >Submit!</Button>
            </div>
        </form>
        </div>
    )
}

export default CardCreator
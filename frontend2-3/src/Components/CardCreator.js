import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { axiosWithAuth } from '../Utils/AxiosWithAuth';

// Not exported until Component can be used. 
const CardCreator = () => { 

    const { push } = useHistory()

    const newCardStandard= {
    title: '',
    category:'',
    link: '',
    summary:''
    }

    const [newCard, setNewCard] = useState(newCardStandard)

const {title, category, link, summary } = newCard

const handleChange = (event) => {
    setNewCard({...newCard, [event.target.name]:event.target.value})
}

const handleSubmit = (event) => {
event.preventDefault()
axiosWithAuth().post('articles', newCard) 
.then(res =>{
console.log("Successful Article Post: ",res)
push('/userdashboard')
})
.catch(err =>{
console.log("Article Post went wrong: ", err)
})
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
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
                name='summary'
                placeholder='Something short & sweet?'
                value={summary}
                onChange={handleChange}>
                </textarea>
                <br />
                <button>Submit!</button>
            </div>
        </form>
        </div>
    )
}

export default CardCreator 
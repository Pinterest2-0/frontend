import React from 'react'; 
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'
//import {MdEdit} from 'react-icons/md';
//import {RiArchiveDrawerLine} from 'react-icons/ri';
//import {TiDelete} from 'react-icons/ti';


export const Button = styled.button`
background: ${props => props.primary ? "skyblue" : "white"};

font-size: 1em; 
margin: 1em; 
padding: .25em 1em; 
border: 2px solid  deepskyblue; 
border-radius: 3px; 

`

const Card = styled.div`
margin-left: 300px; 
margin-right: 300px;
}
`

//Archive prototype <a href="mailto:john@demosite.com?subject=Test%20email&cc=test@gmail.com&body=This is my body text">Send feedback</a>
// const Div = styled.div`
// background: ${props => props.primary ? ""}
// `


const ArticleCard = (props) => {
const {title, category, link, description} = props.article
// const {first_name, last_name, email,avatar} = props.article

const {push} = useHistory();
const handleModal = () => {
push('/update')
}
    return(
        <Card className="CardContainer">
            
            {/* <img src={avatar} alt="" /> */}
                    <p className='title'>Title: {title}</p>
                    <p>Category: {category}</p>
                    <a  className='READMORE' href={link}>Read More</a>
                    <p>Summary: {description}</p>
                    <div>
                    <Button className="primarybtn" primary onClick={handleModal}>{/*<MdEdit/>*/} Edit</Button>
                    <Button className="primarybtn" primary>{/*<RiArchiveDrawerLine/>*/}Archive</Button>
                    <Button className="primarybtn" primary>{/*<TiDelete/>*/}Delete</Button>
                    </div>
                
        </Card>
    )
}

export default ArticleCard 
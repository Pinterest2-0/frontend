import React from 'react'; 
import styled from 'styled-components'
import {MdEdit} from 'react-icons/md';
import {RiArchiveDrawerLine} from 'react-icons/ri';
import {TiDelete} from 'react-icons/ti';
const Button = styled.button`
background: ${props => props.primary ? "skyblue" : "white"};

font-size: 1em; 
margin: 1em; 
padding: .25em 1em; 
border: 2px solid  deepskyblue; 
border-radius: 3px; 

`

const Card = styled.div`
border-left: 2px solid deepskyblue; 
margin: 0 auto; 
}
`
// const Div = styled.div`
// background: ${props => props.primary ? ""}
// `


const ArticleCard = (props) => {
const {title, category, link, description} = props.article
// const {first_name, last_name, email,avatar} = props.article
    return(
        <Card className="CardContainer">
            
            {/* <img src={avatar} alt="" /> */}
                    <p>Title: {title}</p>
                    <p>Category: {category}</p>
                    <a href={link}>Read More</a>
                    <p>Summary: {description}</p>
                    <Button className="primarybtn"primary><MdEdit/> Edit</Button>
                    <Button className="primarybtn" primary><RiArchiveDrawerLine/>Archive</Button>
                    <Button className="primarybtn" primary><TiDelete/>Delete</Button>
                    {/* <img src={avatar} alt='profile pic'></img>
                    <p>{first_name}</p>
                    <a href={last_name}>Read More</a>
                    <p>{email}</p> */}
                    {/* <button>Edit</button>
                    <button>Archive</button> */}
        </Card>
    )
}

export default ArticleCard 
import React from 'react'; 

const ArticleCard = (props) => {
console.log("props:ArticleCard: ", props)
const {first_name, last_name, email, avatar} = props.article
    return(
        <div className="CardContainer">
            
            <img src={avatar} alt="" />
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                    <p>{email}</p>
                    
        </div>
    )
}

export default ArticleCard 
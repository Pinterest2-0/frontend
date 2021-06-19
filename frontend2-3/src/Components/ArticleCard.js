import React from 'react'; 

const ArticleCard = (props) => {
const {title, category, link, description} = props.article
    return(
        <div className="CardContainer">
            
            {/* <img src={avatar} alt="" /> */}
                    <p>{title}</p>
                    <p>{category}</p>
                    <a href={link}>Read More</a>
                    <p>{description}</p>
                    <button>Edit</button>
                    <button>Archive</button>
        </div>
    )
}

export default ArticleCard 
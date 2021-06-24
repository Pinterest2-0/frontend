import React, {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'; 
import axios from 'axios'
// import styled from 'styled-components';



const Dashboard = () => { 
// Dashboard will display current saved articles and give the user the ability to create, delete, and update current articles. 
// Maybe Archiving an article would be better than deleting? Never truly delete, but archive. This would be a separate route and a page of Archived articles. 

const articleStore = []

const [articles, setArticles] = useState(articleStore)
// 'https://reqres.in/api/users'
useEffect(() => { 
    axios.get('https://pintereachunit4.herokuapp.com/api/articles')
    .then(res => {
    // setArticles(res.data.data)
    setArticles(res.data)
})
    .catch(err => {console.log(err)})
},[])


    return(
        <div class="Dashboard" >
            <h1 id='dashboardTitle'>My Articles</h1>

            <section class="CardDashboard">

            
            {articles.map((article) => {
                return(
                <ArticleCard article={article} key={article.id}/>
                )
            })}
            </section>
        </div>
    )

}

export default Dashboard 
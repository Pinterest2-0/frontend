import React, {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'; 
import axios from 'axios'


const Dashboard = () => { 
// Dashboard will display current saved articles and give the user the ability to create, delete, and update current articles. 

const articleStore = []

const [articles, setArticles] = useState(articleStore)

useEffect(() => { 
    axios.get('https://reqres.in/api/users')
    .then(res => {
    setArticles(res.data.data)
})
    .catch(err => {console.log(err)})
},[])

    return(
        <div>
            <h1>Dashboard Test</h1>
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
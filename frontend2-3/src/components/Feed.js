import React from 'react';

export default function Feed() {
    const feedArticleStore = []

    const [feedArticles, setFeedArticles] = useState(feedArticleStore)
    
    useEffect(() => { 
        axios.get('https://pintereachunit4.herokuapp.com/api/articles')
        .then(res => {
        setFeedArticles(res.data.data)
    })
        .catch(err => {console.log(err)})
    },[])

    
        return(
            <div>
                <h1>Example Articles</h1>
    
                <section class="CardDashboard">
    
                
                {feedArticles.map((article) => {
                    return(
                    <ArticleCard article={article} key={article.id}/>
                    )
                })}
                </section>
            </div>
        )
}
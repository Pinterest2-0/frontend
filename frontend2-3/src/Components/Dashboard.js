import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Dashboard = () => { 
// Dashboard will display current saved articles and give the user the ability to create, delete, and update current articles. 

const articleStore = []

const [articles, setArticles] = useState(articleStore)

useEffect(() => { 
    axios.get('https://reqres.in/api/users')
    .then(res => {console.log('Success/Data:',res.data)

})
    .catch(err => {console.log(err)})
})
    return(
        <div>

        </div>
    )

}

export default Dashboard 
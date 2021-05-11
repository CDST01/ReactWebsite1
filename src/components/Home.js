import '../styles/Home.css'
import {Banner} from '../components/Banner'
import {useState, useEffect} from 'react'


const BannerStyle = {
   backgroundImage: "url(banner.jpg)",
   backgroundSize: "cover",
   backgroundPosition: "center",
   minHeight: "50vh",
   color: "white"
}

export function Home( props ) {
// store articles
const [articles, setArticles]= useState([])   
   
   
   
   useEffect( () => {
      if( articles.length === 0) {
         props.items().then( (data) => {
            setArticles (data)
         })
      }
   })
   props.items().then( (articles) => {
      console.log(articles)
   })

   const ArticleView = (props) => {
      return(
         <div className="article">
            <h3>{props.article.title}</h3>
            <p>{props.article.author}</p>
            </div>
            )
   }
   
const ArticlesList = (props) => {
   if(articles) {
      const Collection = articles.map( (article) => {
         return <ArticleView article={article} />
      }) 
   return Collection
   }
   else {
      return( <p>Sorry no Articles!</p>)
   }

}


   return(
      <main className="home">
   <Banner text="Welcome" style={BannerStyle} />
   <h1>Home</h1>
   <ArticlesList/>
   </main> 

   )
}

export default Home
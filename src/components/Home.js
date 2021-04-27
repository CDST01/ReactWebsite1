import '../styles/Home.css'
import {Banner} from '../components/Banner'


const BannerStyle = {
   backgroundImage: "url(banner.jpg)",
   backgroundSize: "cover",
   backgroundPosition: "center",
   minHeight: "50vh",
   color: "white"
}

export function Home( props ) {
   return(
      <main className="home">
   <Banner text="Welcome" style={BannerStyle} />
   <h1>Home</h1>
   </main> 

   )
}

export default Home
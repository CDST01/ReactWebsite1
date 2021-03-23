import '../styles/Header.css'

export function Header (props) {
    
    const Navigation = (props) => {
    props.items.map( (navObject,key) => {})
   if(item.link === '/'){
       return(
           <Navlink key={key} exact to={navObject.link}>
               {navObject.name}
           </Navlink>
       )
   }
else {
    return(
<Navlink key={key} to={navObject.link}>
    {navObject.name}
</Navlink>
 )
}

}
    return(
        <header className="main-header">
            <img src={props.logo}/>
        <h1>{props.title}</h1>
    </header>
        )
    }

export default Header
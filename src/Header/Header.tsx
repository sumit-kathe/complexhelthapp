import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {

    // navlink ke andar hame ek fiture milta he konsa rout openn he currently 
         // status.isactive  or status.ispending


         const tabs=[{
          
          name:"HOME" ,
          path:"/" },
          
          { name:"MAIN" , 
          
          path:"/show" },
          
          {name:"USER" ,
          
          path:"/user"},
          
          {name:"CONTACT_US" ,
        
        path:"/contact"} 
      
      ]

         const  realtab = tabs.map((ele:any)=>{

          return(

          <li>
            <NavLink className={(status)=>{

              return status.isActive ? "active-class" : ""

            }} to={ele.path} > {ele.name} </NavLink>

        
        </li>


         )})

    return (
      <div>   
<ul>
  
    {realtab}

        <li>
           {/* <NavLink className={(status)=>{
           
          return status.isActive ? "active-classs" :""

           }
        }
           
           
           to='/show'> Main </NavLink>    */}

          {/* <NavLink className={({isActive})=>{
           
           return isActive ? "active-class" :""
 
            }
         }
            
            
            to='/show'> Main </NavLink>    */}



        </li>

</ul>
      
      </div>
    )
};

export default Header;
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    
        
              <div >
                <ul>
                  <li>
                  <Link to="/"><button>Home</button></Link>
                  </li>
                  <li>
                  <Link to="/Characters"><button>Characters</button></Link>
                  </li>
                  <li>
                  <Link to="/Houses"><button>Houses</button></Link>
                  </li>
                </ul>
              </div>
    </div>
  )
}

export default Navbar
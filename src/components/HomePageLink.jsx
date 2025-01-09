
import { NavLink } from 'react-router-dom'

function HomePageLink() {
  return (
    <NavLink to='/' activeClassName='active'>
            <div>home</div>
    </NavLink>

  )
}

export default HomePageLink
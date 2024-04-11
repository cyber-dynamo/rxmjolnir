import NavBar from './navbar.js'
import Footer from './footer.js'
import {useRouter} from 'next/router.js'

 const Layout=({ children })=> {
  const router = useRouter()
  if (router.pathname != "/esupply" && router.pathname != "/adapt" &&router.pathname != "/form")
  return (
      <div className='background'>
        <NavBar/>
        {children}
        <Footer/>
        </div>

  )
  else{
    return(
      <div>
      {children}
      </div>
    )
  }
}
export default Layout;
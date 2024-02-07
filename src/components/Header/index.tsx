import banner from '../../assets/banner.jpg'
import logo from '../../assets/logo.svg'
import { Banner } from './styles'

export function Header(){
      return(
            <>
                  <Banner>
                        <img src={banner} alt="" className='background' />
                        <img src={logo} alt="Logo Github Blog" className='logo'/>
                  </Banner>
            </>
      )
}
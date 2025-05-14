import logo1 from '../../assets/logo/logo1.webp'
import logo2 from '../../assets/logo/logo2.webp'
import logo3 from '../../assets/logo/logo3.webp'
import logo4 from '../../assets/logo/logo4.webp'

export const LogoOne = () => {
    return (
        <img src={logo1} alt="logo one" />
    )
}

export const LogoTwo = () => {
    return (
        <img src={logo2} alt="logo two" />
    )
}

export const LogoThree = () => {
    return (
        <img src={logo3} alt="logo three" />
    )
}

export const LogoFour = () => {
    return (
        <img src={logo4} alt="logo four" 
        style={{borderRadius: "50%", height:"100px", width:"150px", marginLeft:"-20px" }}
        />
    )
}
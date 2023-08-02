import { Link } from 'react-scroll'
import { styled } from 'styled-components'

const Logo = () => {
  return (
    <LogoComponent>
        <Link to='hero'>Chirp.</Link>
    </LogoComponent>
  )
}

const LogoComponent = styled.div `
    a {
        font-size: 1.6rem;
        font-weight: 700;
        font-style: italic;
        color: var(--btnColor);
    }

@media only screen and (max-width:600px) {
    a {
        font-size: 1.3rem;
    }
}

`



export default Logo
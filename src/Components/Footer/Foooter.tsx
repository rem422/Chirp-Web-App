import { styled } from "styled-components"
import Logo from "../Logo/Logo"
import { Link } from 'react-scroll'
import { FaTwitter } from 'react-icons/fa'

const Foooter = () => {
  return (
    <FooterSection>
        <div className="container">
            <div className="footer_wrapper">
                <Logo />
                <ul className="footer_links">
                    <li className="footer_link">
                        <Link to=""><FaTwitter size={25} /></Link>
                    </li>
                    <li className="footer_link">
                        <Link to="">Privacy Policy</Link>
                    </li>
                    <li className="footer_link">
                        <Link to="">Terms of Use</Link>
                    </li>
                </ul>
            </div>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    background-color: var(--btnHoverColor);

    .footer_wrapper {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer_links {
        display: inline-flex;
        align-items: center;
    }

    .footer_links .footer_link {
        font-size: 1.2rem;
        margin-right: 1.4rem;
        transition: var(--transition);
    }

    .footer_links .footer_link:hover {
        color: var(--white);
    }

    @media only screen and (max-width:600px) {
        .footer_wrapper {
            display: block;
        }

        .footer_links {
            margin-top: 1rem;
            display: inline-flex;
            align-items: center;
        }
    }

    @media only screen and (max-width:390px) {
        .footer_links {
            display: inline-block;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            gap: 1rem;
        }

        .footer_links .footer_link {
            font-size: 1rem;
            margin-right: 0;
            margin-top: .6rem;
        }
    }
`

export default Foooter
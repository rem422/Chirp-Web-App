import { styled } from 'styled-components'
import { Link } from 'react-scroll'
import{ FaTwitter } from 'react-icons/fa'

interface Props {
    text: string,
    clicked?: () => void;
}

const Button = ({text, clicked}: Props) => {
  return (
    <ButtonComponent>
        <Link to='' onClick={clicked}>
            <FaTwitter size={25} />
            {text}
        </Link>
    </ButtonComponent>
  )
}

const ButtonComponent = styled.div`
    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 700;
        color: var(--white);
        background: var(--btnColor);
        padding: .6rem 1rem;
        border: 2px solid var(--btnColor);
        border-radius: 6px;
        width: 100%;
        transition: var(--transition);

        &:hover {
            background: transparent;
            color: var(--btnColor);
        }
    }


    @media only screen and (max-width:768px) {
    a {
        gap: .4rem;
    }
    }
`

export default Button
import { styled } from 'styled-components'
import { Link } from 'react-scroll'
import twitterLogo from '../../assets/Twitter (Blue).svg'
import likeImg from '../../assets/Like.svg'

interface Props {
    userImg : string,
    userName : string,
    userHandle : string,
    text : string,
    date : string
    likes : string
}

const Card = ({userImg, userName, userHandle, text, date, likes} : Props) => {
  return (
    <TestimonialsCard>
        <div className="card_wrapper">
            <div className="user_info">
                <div className="user_details">
                    <div className="img_wrapper">
                        <img src={userImg} alt="img" />
                    </div>
                    <div className="user_name">
                        <h3>{userName}</h3>
                        <p>{userHandle}</p>
                    </div>
                </div>
                    <Link to='' className='twitter_link'>
                        <img src= {twitterLogo} alt="" />
                    </Link>
            </div>
            <p className="card_text">{text}</p>
            <div className="card_info">
                <Link to='' className='likes'>
                    <img src={likeImg} alt="img" />
                    {likes}
                </Link>
                <p className="date">{date}</p>
            </div>
        </div>
    </TestimonialsCard>
  )
}

const TestimonialsCard = styled.div`
    .card_wrapper {
        background-color: var(--white);
        border-radius: 8px;
        width: 100%;
        max-width: 350px;
        padding: 1rem 2rem;
    }

    .user_info  {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .3rem;
        margin-bottom: 1rem;
    }

    .user_details {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }

    .user_details .img_wrapper {
        width: 60px;
    }

    .user_details .user_name {
        display: inline-flex;
        flex-direction: column;
        align-items: start;
    }

    .card_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 1rem;
    }

    .card_info a {
        display: flex;
        align-items: center;
        gap: .3rem;
        color: var(--textColor);
    }

    .card_info a img {
        max-width: 20px;
    }

    @media only screen and (max-width:600px) {
        .card_wrapper {
            max-width: 100%;
        }
    }

    @media only screen and (max-width:340px) {
    .user_info .twitter_link {
        display: none;
    }
    }

`

export default Card
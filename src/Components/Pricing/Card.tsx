import { styled } from 'styled-components'
import Button from '../Button/Button'
// import CheckmarkImg from '../../assets/Checkmark.svg'

const Card = () => {
  return (
    <PricingCard>
        <div className="card_wrapper">
            <div className="subscription">
                <p>Monthly</p>
                <h1>$9<span>/mo</span></h1>
            </div>
            <hr />
            <ul className="subscription_info_list">
                <li className="list">
                    Unlimited* scheduled tweets and threads.
                </li>
                <li className="list">
                    Schedule up to 3 weeks in advance.
                </li>
                <li className="list">
                    Real-time audience analytics tracking upto 5k followers.
                </li>
            </ul>
            <hr />
            <Button
                text='Start Trial with Twitter'
            />
        </div>
    </PricingCard>
  )
}

const PricingCard = styled.div`
    .card_wrapper {
        background-color: var(--headerBg);
        border: 1px solid orange;
        border-radius: 8px;
        width: 100%;
        max-width: 500px;
        padding: 2rem;
    }
    hr {
        margin: 1.6rem 0;
    }

    .subscription {
        margin-bottom: 1.6rem;
        p {
            font-size: 1.6rem;
        }

        h1{
            font-size: 2.4rem;
            font-weight: 700;
            span {
                font-size: 1.2rem;
                font-weight: 500;
                color: var(--textColor);
            }
        }
    }

    .subscription_info_list .list {
        list-style: disc;
    }

    .subscription_info_list .list {
        margin: 1rem 0;
    }
`

export default Card
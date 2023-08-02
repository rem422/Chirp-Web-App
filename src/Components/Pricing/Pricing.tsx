import { styled } from 'styled-components'
import Card from './Card'

const Pricing = () => {
  return (
    <PriceSection id='pricing'>
        <div className="container">
            <div className="pricing_wrapper">
                <div className="pricing_header">
                    <h1 className="pricing_title">One simple price plan.</h1>
                    <p className="pricing_text">Start growing your Twitter account by analyzingyour follower's patterns</p>
                </div>
                <div className="pricing_card_wrapper">
                    <Card />
                </div>
            </div>
        </div>
    </PriceSection>
  )
}

const PriceSection = styled.section`
    .pricing_wrapper {
        padding: 3rem 0;
    }

    .pricing_header {
        text-align: center;
        h1 {
            font-size: 2.3rem;
            margin-bottom: 1rem;
        }
    }

    .pricing_card_wrapper {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default Pricing
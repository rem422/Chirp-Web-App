import { styled } from "styled-components"
import Card from './Card'
import Avatar1 from '../../assets/userAvatar09.svg'
import Avatar2 from '../../assets/userAvatar07.svg'
import Avatar3 from '../../assets/userAvatar02.svg'

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
        <div className="container">
            <div className="testimonials_wrapper">
                <h1 className="testimonials_title">What our customers say</h1>
                <div className="cards_wrapper">
                    <Card 
                        userImg={Avatar1}
                        userName="Sara May"
                        userHandle="@sara_may"
                        text="I just tried out @chirp and it's amazing, love all the analytics I can see."
                        date="March 2, 2021"
                        likes="2"
                    />
                    <Card 
                        userImg={Avatar2}
                        userName="Jack Scott"
                        userHandle="@jackscott_"
                        text="I initially started using Chirp to support the co-founder as I personaly knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game."
                        date="March 2, 2021"
                        likes="32"
                    />
                    <Card 
                        userImg={Avatar3}
                        userName="Jessica May"
                        userHandle="@jmay98"
                        text="Absolutely love everything about Chirp, from thhe design to how everything works smoothly."
                        date="March 2, 2021"
                        likes="221"
                    />
                </div>
            </div>
        </div>
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
    background-color: var(--btnHoverColor);

    .testimonials_wrapper {
        padding: 5rem 0;
    }

    .testimonials_title {
        font-size: 2.3rem;
        text-align: center;
    }

    .cards_wrapper {
        padding-top: 3rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }




`

export default Testimonials
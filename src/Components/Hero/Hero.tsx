import { styled } from "styled-components"
import Button from "../Button/Button"
import { Link } from 'react-scroll'
import { BsArrowRight } from 'react-icons/bs'
import Avator_1 from '../../assets/userAvatar01.svg'
import Avator_2 from '../../assets/userAvatar02.svg'
import Avator_3 from '../../assets/userAvatar03.svg'
import Avator_4 from '../../assets/userAvatar04.svg'
import Avator_5 from '../../assets/userAvatar05.svg'
import Avator_6 from '../../assets/userAvatar06.svg'
import Avator_7 from '../../assets/userAvatar07.svg'
import Avator_8 from '../../assets/userAvatar08.svg'
import Avator_9 from '../../assets/userAvatar09.svg'
import heroImg from '../../assets/Hero Image (Desktop View).png'


const Hero = () => {
  return (
    <HeroSection id="hero">
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_left">
                    <h1 className="hero_left-title">
                        Twitter analytics taken to a whole new level.
                    </h1>
                    <p className="hero_left-text">
                        Chirp is a suite of Twitter analytics that will help you better understand your audience, which tweet they like, and most importantly, when they are the active on Twitter.
                    </p>
                    <div className="hero_left-btns">
                        <Button text="Sign in with Twitter" />
                        <Link to='' className="hero_left-btn">
                            Learn more
                            <BsArrowRight size={25} />
                        </Link>
                    </div>
                    <div className="hero_left-avatars">
                        <span className="avatar">
                            <img src={Avator_9} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_8} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_7} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_6} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_5} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_4} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_3} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_2} alt="avator" />
                        </span>
                        <span className="avatar">
                            <img src={Avator_1} alt="avator" />
                        </span>
                    </div>
                    <p className="hero_left-text2">
                        Join <span>195</span> others who have analyzed their followers and scheduled <span>1342</span> tweets!
                    </p>
                </div>
                <div className="hero_right">
                    <div className="hero_right-img-wrapper">
                        <img src={heroImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </HeroSection>
  )
}

const HeroSection =styled.div`
    margin: 5rem 0;
    background: var(--headerBg);

    .hero_wrapper {
        display: flex;
        align-items: center;
        gap: 3rem;
        padding: 5rem 0;
    }

    .hero_left {
        max-width: 700px;
    }

    .hero_left .hero_left-title {
        font-size: 4rem;
        line-height: 5rem;
    }

    .hero_left .hero_left-text {
        font-size: 1.2rem;
        margin:1.5rem 0;
    }

    .hero_left .hero_left-btns {
        display: inline-flex;
        align-items: center;
    }

    .hero_left .hero_left-btn {
        display: inline-flex;
        align-items: center;
        gap: .6rem;
        margin-left: 2rem;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--btnColor);
        transition: var(--transition);
    }

    .hero_left .hero_left-btn:hover {
        color: var(--btnHoverColor);
    }

    .hero_left .hero_left-avatars{
        display: flex;
        align-items: center;
        margin: 2rem 0;
    }

    .hero_left .hero_left-avatars .avatar {
        max-width: 80px;
        overflow: hidden;
    }

    .hero_left .hero_left-avatars .avatar:not(:first-child) {
        margin-left: -20px;
    }

    .hero_left .hero_left-text2 {
        font-size: 1.2rem;
        max-width: 600px;
        span {
            color: var(--btnColor);
            font-weight: 700;
        }
    }

    .hero_right .hero_right-img-wrapper {
        max-width: 500px;
    }

@media only screen and (max-width:960px) {
    .hero_wrapper {
        flex-direction: column-reverse;
    }

    .hero_left .hero_left-title {
        font-size: 3.5rem;
        line-height: 4rem;
    }

    .hero_right .hero_right-img-wrapper {
        max-width: 100%;
    }
}

@media only screen and (max-width:600px) {
    .hero_wrapper {
        text-align: center;
        padding: 3rem 0;
    }

    .hero_left {
        max-width: 100%;
    }

    .hero_left .hero_left-title {
        font-size: 2.8rem;
        line-height: 3rem;
    }

    .hero_left .hero_left-btns {
        flex-direction: column;
    }

    .hero_left .hero_left-btn {
        margin-left: 0;
    }

    .hero_left .hero_left-avatars{
        margin: 2rem;
    }
}

@media only screen and (max-width: 375px) {
    .hero_left .hero_left-title {
        font-size: 2rem;
        line-height: 3rem;
    }
}
`

export default Hero
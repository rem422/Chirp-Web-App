import { styled } from 'styled-components'
import Card from './Card'
import graphImg from '../../assets/graph.png'
import smileyImg from '../../assets/smiley.png'
import newspaperImg from '../../assets/newspaper.png'
import sunImg from '../../assets/sun.png'

const Features = () => {
  return (
    <FeaturesSection id='features'>
        <div className="container">
            <div className="features_wrapper">
                <h2 className="features_title">Features that help you Tweet smarter.</h2>
                <div className="cards_wrapper">
                    <Card 
                      image = {graphImg}
                      title = 'Analytics'
                      text = 'We constantly mnitor your audience as it grows so you can Tweet when your followers are most likely to be online and ready to engage with your content.'
                    />
                    <Card 
                      image = {smileyImg}
                      title = 'Smart Analyzer'
                      text = 'Chirp automatically recognizes your followers most active times and automattically sends you notifications if you are missing out on an opportunity.'
                    />
                    <Card 
                      image = {newspaperImg}
                      title = 'Scheduled Your Tweets'
                      text = 'Qualiity tweets drive tons or engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.'
                    />
                    <Card 
                      image = {sunImg}
                      title = 'Dark Mode'
                      text = 'Friendly on the eyes, no matter what time you writeyour Tweets. All colors are chosen to make sure your eyes are at ease at all times.'
                    />
                </div>
            </div>
        </div>
    </FeaturesSection>
  )
}

const FeaturesSection = styled.section`
    .features_title {
      font-size: 2.2rem;
      max-width: 450px;
    }

    .cards_wrapper {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    @media only screen and (max-width:768px) {
      .cards_wrapper {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 100%;
        gap: 1rem;
      }
    }

    @media only screen and (max-width:600px) {
      .features_title {
        font-size: 1.8rem;
        max-width: 100%;
        text-align: center;
      }
    }
`

export default Features
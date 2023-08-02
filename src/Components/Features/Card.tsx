import { styled } from "styled-components"

interface Props {
  image : string,
  title : string,
  text : string
}

const Card = ({image, title, text} : Props) => {
  return (
    <FeaturesCard>
      <div className="card_wrapper">
        <div className="card_img">
          <img src={image} alt="img" />
        </div>
        <h4 className="card_title">{title}</h4>
        <p className="card_text">{text}</p>
      </div>
    </FeaturesCard>
  )
}

const FeaturesCard = styled.div`
  .card_wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid var(--textColor);
    padding: 1rem 2.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--box-shadow);
    }
  }

  .card_img {
    max-width: 50px;
  }

  .card_title {
    padding: .6rem 0;
  }

  @media only screen and (max-width:768px) {
    .card_wrapper {
      padding: 1rem 1rem;
    }
  }
`

export default Card
import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) => {

    if(alter_ego === characters) return (<></>);

    return <p>{characters}</p>;

}

export const HeroCard = ({id, superhero, publisher, alter_ego,first_appearance, characters, }) => {

    const heroeImage = `https://i.pinimg.com/originals/f1/0c/23/f10c236aa8d4007addf6e6051f4524ab.jpg`;

    // const charactersByHero = (<p>{characters}</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={heroeImage} className="card-img" alt={superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                            {/* {
                                ( alter_ego !==characters) && charactersByHero
                            } */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>See more</Link>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

import { IPokemonDetails } from '../../types/Pokemon/Pokemons';
import './Card.css';

interface ICardProps extends IPokemonDetails {
  onClick?: () => void;
}

const Card: React.FC<ICardProps> = ({ name, sprites, stats, onClick }: ICardProps) => {
  const handleClick = () => (onClick ? onClick() : null);
  return (
    <div className="pokemon-card" onClick={handleClick}>
      <h3>{name.toLocaleUpperCase()}</h3>
      <img src={sprites.front_default} alt="Pokemon" className="pokemon-card_img" />
      <div className="pokemon-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <span className="stat-name">{stat.stat.name}:</span>
            <span className="stat-value">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

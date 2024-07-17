import IPokemonDetails from '../../types/Pokemon/PokemonDetails';
import './Card.css';

const Card: React.FC<IPokemonDetails> = ({
  name,
  sprites,
  stats,
  onClose,
}: IPokemonDetails) => {
  const handleClose = () => onClose ? onClose() : null
  return (
    <div className="pokemon-card">
      <div className="close-button" onClick={handleClose}>x</div>
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

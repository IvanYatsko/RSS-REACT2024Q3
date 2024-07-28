import ICardProps from '../../types/cardProps';
import './card.css';

const Card: React.FC<ICardProps> = ({
  name,
  sprites,
  stats,
  onClick,
  onSelect,
  selected,
}: ICardProps) => {
  const handleClick = () => (onClick ? onClick() : null);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelect) {
      onSelect(event.target.checked);
    }
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={selected}
          onClick={e => e.stopPropagation()}
          onChange={handleCheckboxChange}
        />
      </div>
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

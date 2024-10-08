type CardProps = {
  src: string;
  alt: string;
  about: string;
};

const Card = ({ src, alt, about }: CardProps) => {
  return (
    <div className="tooltip">
      <img className="card" src={src} alt={alt} />
      <span className="tooltip-text">{about}</span>
    </div>
  );
};

export default Card;

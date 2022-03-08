import iconShare from '../assets/images/icon-share.svg';

type CardProps = {
  cardImage: string;
  header: string;
  paragraph: string;
  avatarImage: string;
  personName: string;
  date: string;
};

const Card = ({
  cardImage,
  header,
  paragraph,
  avatarImage,
  personName,
  date,
}: CardProps) => {
  return (
    <article className='w-80'>
      <div className='bg-drawers bg-cover h-52' />
      <div>
        <h1>{header}</h1>
        <p>{paragraph}</p>
      </div>
      <div>
        <img src={avatarImage} alt='A woman with brown hair, she is smiling' />
        <h2>{personName}</h2>
        <p>{date}</p>
        <img src={iconShare} alt='An arrow pointing to the right' />
      </div>
    </article>
  );
};

export default Card;

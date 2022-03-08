import { useState } from 'react';
import IconShare from './IconShare';
import SpeechBubbleIcon from './SpeechBubbleIcon';

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
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <article className='relative bg-white rounded-lg grid grid-cols-[328px] drop-shadow md:grid-cols-[325px_480px] md:h-[21rem]'>
      <picture>
        <img
          className='object-cover w-full h-52 rounded-tl-lg rounded-tr-lg md:h-full md:rounded-tr-none md:rounded-bl-lg'
          src={cardImage}
          alt='Green drawer with a vase and two frames on top'
        />
      </picture>
      <section className='w-64 mt-8 justify-self-center md:w-96'>
        <header>
          <h1 className='text-lg font-bold text-very-dark-grayish-blue'>
            {header}
          </h1>
          <p className='text-desaturated-dark-blue mt-4 mb-10 md:mb-6'>
            {paragraph}
          </p>
        </header>
        <section className='grid grid-cols-[1fr_3fr_1fr] items-center mb-6'>
          <img
            className='h-12 rounded-full'
            src={avatarImage}
            alt='A woman with brown hair, she is smiling'
          />
          <header className='flex flex-col ml-3 md:ml-[-0.5rem]'>
            <h2 className='text-very-dark-grayish-blue text-sm font-bold leading-7'>
              {personName}
            </h2>
            <p className='text-grayish-blue text-sm'>{date}</p>
          </header>
          <div
            onClick={handleClick}
            className={`justify-self-end ${
              isClicked ? 'bg-very-dark-grayish-blue' : 'bg-light-grayish-blue'
            } rounded-full p-[0.55rem] cursor-pointer`}
          >
            <IconShare color={`${isClicked ? '#fff' : '#6E8098'}`} />
          </div>
        </section>
      </section>
      {isClicked && (
        <SpeechBubbleIcon className='translate-y-[-5.85rem] translate-x-[1.75rem] md:translate-y-[-6.75rem] md:translate-x-[3.7rem] absolute right-[0] bottom-[0]' />
      )}
    </article>
  );
};

export default Card;

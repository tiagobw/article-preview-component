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
    <article className='bg-white rounded-lg grid grid-cols-[328px] drop-shadow'>
      <picture>
        <img
          className='object-cover w-full h-52 rounded-tl-lg rounded-tr-lg'
          src={cardImage}
          alt='Green drawer with a vase and two frames on top'
        />
      </picture>
      <section className='w-64 mt-8 justify-self-center'>
        <header>
          <h1 className='text-lg font-bold text-very-dark-grayish-blue'>
            {header}
          </h1>
          <p className='text-desaturated-dark-blue mt-4 mb-10'>{paragraph}</p>
        </header>
        <section className='grid grid-cols-[1fr_3fr_1fr] items-center mb-6'>
          <img
            className='h-12 rounded-full'
            src={avatarImage}
            alt='A woman with brown hair, she is smiling'
          />
          <header className='flex flex-col ml-3'>
            <h2 className='text-very-dark-grayish-blue text-sm font-bold'>
              {personName}
            </h2>
            <p className='text-grayish-blue text-sm'>{date}</p>
          </header>
          <picture className='justify-self-end bg-light-grayish-blue rounded-full p-2'>
            <img className='h-4 w-4' src={iconShare} alt='An arrow pointing to the right' />
          </picture>
        </section>
      </section>
    </article>
  );
};

export default Card;

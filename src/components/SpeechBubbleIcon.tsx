import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';

type SpeechBubbleIconProps = {
  className?: string;
};

const SpeechBubbleIcon = ({ className }: SpeechBubbleIconProps) => {
  return (
    <div
      className={`${className} z-[10] flex flex-col justify-center items-center`}
    >
      <div className='h-[55px] w-[165px] md:w-[250px] rounded-2xl bg-very-dark-grayish-blue flex justify-center items-center text-white'>
        <p className='hidden md:block text-sm text-grayish-blue tracking-[0.3rem]'>SHARE</p>
        <a href='#'>
          <img className='ml-4' src={iconFacebook} alt='Facebook icon' />
        </a>
        <a href='#'>
          <img className='ml-4' src={iconTwitter} alt='Twitter icon' />
        </a>
        <a href='#'>
          <img className='ml-4 mr-4 md:mr-0' src={iconPinterest} alt='Pinterest icon' />
        </a>
      </div>
      <div className='z-[-1] w-8 h-8 bg-very-dark-grayish-blue rotate-45 translate-y-2 mt-[-2rem]' />
    </div>
  );
};

export default SpeechBubbleIcon;

import IconShare from './IconShare';

type ShareButtonProps = {
  handleClick: () => void;
  isClicked: boolean;
};

const ShareButton = ({ handleClick, isClicked }: ShareButtonProps) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        isClicked ? 'bg-very-dark-grayish-blue' : 'bg-light-grayish-blue'
      } rounded-full p-[0.55rem] cursor-pointer`}
    >
      <IconShare color={`${isClicked ? '#fff' : '#6E8098'}`} />
    </div>
  );
};

export default ShareButton;

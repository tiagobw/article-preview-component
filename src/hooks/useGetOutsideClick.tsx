import { useEffect } from 'react';

export const useGetOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void,
  isClicked: boolean,
) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isClicked && ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback, isClicked]);
};

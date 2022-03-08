import cardImage from './assets/images/drawers.jpg';
import avatarImage from './assets/images/avatar-michelle.jpg';

import Card from './components/Card';

const cardInformation = {
  cardImage,
  header:
    'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
  paragraph:
    'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
  avatarImage,
  personName: 'Michelle Appleton',
  date: '28 Jun 2020',
};

function App() {
  return (
    <main className='flex justify-center items-center h-screen bg-light-grayish-blue'>
      <Card {...cardInformation} />
    </main>
  );
}

export default App;

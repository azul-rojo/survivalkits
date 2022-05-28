import { CarouselProps } from './components/Carousel';
import logo from './logo.svg';

export const foodKit: CarouselProps = {
  title: 'How to make a Food Kit',
  cards: [
    {
      heading: 'Get Wet',
      imageSrc: logo,
      text: 'Fill a supernatural bottle with filtered water until it reaches the white line.'
    },
    {
      heading: 'Join Forces',
      imageSrc: logo,
      text: 'Pour the entire vial of concetrate into its conesting supernatural bottle.'
    },
    {
      heading: 'Embrace Nature',
      imageSrc: logo,
      text: 'Rotate the nozzle, spritz, take a deep breath and begin your cleaning ritual.'
    }
  ]
};
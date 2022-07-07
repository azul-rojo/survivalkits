import { CarouselProps } from '../components/Carousel';
import logo from '../assets/logo.svg';

import bandage_1 from '../assets/bandage-01.svg';
import bandage from '../assets/bandage-02.svg';
import bottle from '../assets/water-bottle-01.svg';
import peanut from '../assets/peanut-02.svg';
import ramen from '../assets/ramen-01.svg';
import sock from '../assets/sock-02.svg';
import spork from '../assets/spoon-02.svg';
import toothbrush from '../assets/toothbrush-02.svg';
import toothpaste from '../assets/toothpaste-02.svg';
import pillow from '../assets/pillow-01.svg';
import glove from '../assets/glove-01.svg';
import square from '../assets/square-01.svg';


export const foodKit: CarouselProps = {
  title: 'How to make a Food Kit',
  cards: [
    {
      heading: 'Peanut Butter',
      imageSrc: peanut,
      text: 'Add a plastic jar of peanut butter.'
    },
    {
      heading: 'Snack Puddings',
      imageSrc: logo,
      text: 'Add 2 snack puddings.'
    },
    {
      heading: 'Ramen Noodles',
      imageSrc: ramen,
      text: 'Add 2 packages of ramen noodles'
    },
    {
      heading: 'Bottle of Gatorade',
      imageSrc: bottle,
      text: 'Add 1 plastic bottle of gaterade.'
    },
    {
      heading: 'Spork',
      imageSrc: spork,
      text: 'Add a spork.'
    },
    {
      heading: 'Ziploc Storage Bag',
      imageSrc: logo,
      text: 'Add 1 gallon ziplock storage bag.'
    },
  ]
};

export const shelterKit: CarouselProps = {
  title: 'How to make a Shelter Kit',
  cards: [
    {
      heading: 'Mylar Blanket',
      imageSrc: pillow,
      text: 'Add 1 mylar emergency blanket.'
    },    {
      heading: 'Pair of Socks',
      imageSrc: sock,
      text: 'Add a pair of socks.'
    },
    {
      heading: 'Watch Cap',
      imageSrc: logo,
      text: 'Add 1 watch  cap.'
    },
    {
      heading: 'Pair of Gloves',
      imageSrc: glove,
      text: 'Add 1 pair of gloves for colder weather.'
    },
    {
      heading: 'Waterproof Tarp',
      imageSrc: square,
      text: 'Add 1 waterproof tarp.'
    },
    {
      heading: 'Ziplock Storage Bag',
      imageSrc: logo,
      text: 'Add 1 gallon ziplock storage bag.'
    },
  ]
};

export const firstAidKit: CarouselProps = {
  title: 'How to make a First Aid Kit',
  cards: [
    {
      heading: 'Regular Band-Aids',
      imageSrc: bandage,
      text: 'Add 5 regular band-aids.'
    },    {
      heading: '2x2 Gauze Bandages',
      imageSrc: bandage_1,
      text: 'Add 2 2x2 gauze bandages.'
    },
    {
      heading: 'Antibacterial Wipes',
      imageSrc: logo,
      text: 'Add 5 antibacterial wipes.'
    },
    {
      heading: 'Lip Balm',
      imageSrc: logo,
      text: 'Add 1 lip balm.'
    },
    {
      heading: 'Moleskin Sheet',
      imageSrc: logo,
      text: 'Add 1 sheet of moleskin sheet.'
    },
    {
      heading: 'Ziplock Storage Bag',
      imageSrc: logo,
      text: 'Add 1 gallon ziplock storage bag.'
    }
  ]
};

export const hygieneKit: CarouselProps = {
  title: 'How to make a Hygiene Kit',
  cards: [
    {
      heading: 'Soap',
      imageSrc: logo,
      text: 'Add 1 soap.'
    },
    {
      heading: 'Shampoo',
      imageSrc: logo,
      text: 'Add 1 shampoo.'
    },
    {
      heading: 'Tooth Brush',
      imageSrc: toothbrush,
      text: 'Add 1 tooth brush.'
    },
    {
      heading: 'Toothpaste',
      imageSrc: toothpaste,
      text: 'Add 1 toothpaste.'
    },
    {
      heading: 'Toilet Paper Pack',
      imageSrc: logo,
      text: 'Add 1 toilet paper pack.'
    },
    {
      heading: 'Stick Deodorant',
      imageSrc: logo,
      text: 'Add 1 stick of deodorant.'
    },
    {
      heading: 'Wash Cloth',
      imageSrc: logo,
      text: 'Add 1 wash cloth.'
    },
    {
      heading: 'Disposable Razor',
      imageSrc: logo,
      text: 'Add 1 disposable razor.'
    },
    {
      heading: 'Ziplock Storage Bag',
      imageSrc: logo,
      text: 'Add 1 gallon ziplock storage bag.'
    }
  ]
};

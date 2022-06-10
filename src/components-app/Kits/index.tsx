import Carousel, { CarouselProps } from "../../components/Carousel";
import Section from "../../components/Section";

interface KitsProps {
  carouselProps: CarouselProps;
  id: string;
}

const Kits = ({carouselProps, id}: KitsProps) => {
  return <Section id={id}>
    <Carousel {...carouselProps}/>
  </Section>
};

export default Kits
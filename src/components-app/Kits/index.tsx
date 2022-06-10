import Carousel, { CarouselProps } from "../../components/Carousel";
import Section from "../../components/Section";

const Kits = (props: CarouselProps) => {
  return <Section>
    <Carousel {...props}/>
  </Section>
};

export default Kits
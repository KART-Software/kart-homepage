import { Carousel } from "@mantine/carousel";
import { Image, createStyles } from "@mantine/core";

type Props = {
  images: string[];
};

const useStyles = createStyles({
  Carousel: {
    width: "100%",
    maxWidth: 790,
  },
});

export const MainCarousel = ({ images }: Props) => {
  const { classes } = useStyles();
  return (
    <Carousel className={classes.Carousel} withIndicators>
      {images.map((imageUrl, index) => (
        <Carousel.Slide key={index}>
          <Image src={imageUrl} alt={""} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

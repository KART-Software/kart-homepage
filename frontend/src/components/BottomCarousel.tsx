import { Image } from "@mantine/core"
import { Carousel } from "@mantine/carousel"

type Props = {
  images: string[]
}

export const BottomCarousel = ({ images }: Props) => {
  return (
    <Carousel
      withIndicators
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      height={200}
    >
      {images.map((imageUrl, index) => (
        <Carousel.Slide key={index}>
          <Image src={imageUrl} alt="" />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

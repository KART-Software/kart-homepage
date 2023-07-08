import { Carousel } from "@mantine/carousel"
import { Image, createStyles } from "@mantine/core"

type Props = {
  images: string[]
}

const useStyles = createStyles({
  Carousel: {
    width: "100%",
  },
})

export const MainCarousel = ({ images }: Props) => {
  const { classes } = useStyles()
  return (
    <Carousel className={classes.Carousel} withIndicators>
      {images.map((imageUrl, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={imageUrl}
            alt={""}
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

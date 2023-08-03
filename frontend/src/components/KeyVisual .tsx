import { Box, createStyles, Image, Overlay, Text } from "@mantine/core"

const useStyles = createStyles({
  Visual: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: 600,
  },
  TextBox: {
    top: 0,
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    position: "absolute",
    color: "#FFFFFF",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  Title: {
    fontSize: 40,
  },
  SubTitle: {
    fontSize: 24,
  },
})

type Props = {
  title: string
  subTitle: string
  imageUrl: string
}

export const KeyVisual = ({ title, subTitle, imageUrl }: Props) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.Visual}>
      <Image src={imageUrl} alt="" />
      <Box className={classes.TextBox}>
        <Box>
          <Text className={classes.Title}>{title}</Text>
          <Text className={classes.SubTitle}>{subTitle}</Text>
        </Box>
      </Box>
    </Box>
  )
}

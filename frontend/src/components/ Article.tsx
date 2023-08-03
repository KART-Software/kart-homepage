import { Box, Text, Image, createStyles } from "@mantine/core"

const useStyles = createStyles({
  Container: {
    gap: 30,
    display: "grid",
  },
  Title: {
    color: "#124387",
    fontSize: 24,
    fontWeight: "bold",
  },
})

type Props = {
  title: string
  imageUrl: string
  children: React.ReactNode
  float: "left" | "right"
}

export const Article = ({ title, imageUrl, children, float }: Props) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.Container}>
      <Text className={classes.Title}>{title}</Text>
      <Box>
        <Image
          src={imageUrl}
          width={300}
          height={200}
          alt=""
          style={{
            float: float,
            marginRight: float === "left" ? 30 : 0,
            marginLeft: float === "right" ? 30 : 0,
          }}
        />
        <Text>{children} </Text>
      </Box>
    </Box>
  )
}

import { Box, Text, Title, createStyles, SimpleGrid } from "@mantine/core"

type Props = {
  title: string
  text: string
}

const useStyles = createStyles({
  Title: {
    fontSize: 25,
    color: "#124387",
    textAlign: "center",
  },
  Text: {
    fontSize: 18,
  },
})
export const TopBio = ({ title, text }: Props) => {
  const { classes } = useStyles()
  return (
    <Box>
      <Title className={classes.Title}>{title}</Title>
      <Text>{text}</Text>
      <SimpleGrid cols={2}></SimpleGrid>
    </Box>
  )
}

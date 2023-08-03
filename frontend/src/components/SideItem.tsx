import { Box, createStyles, Text, Image, List, Anchor } from "@mantine/core"

const useStyles = createStyles({
  Container: {
    gap: 20,
    display: "grid",
  },
  Title: {
    color: "#124387",
    fontSize: 20,
    fontWeight: "bold",
  },
})

export type ListItem = {
  label: string
  href: string
}

type Props = {
  title: string
  imageUrl?: string
  items: Array<ListItem>
}
export const SideItem = ({ title, imageUrl, items }: Props) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.Container}>
      <Text className={classes.Title}>Recent achievements</Text>
      <Box className={classes.Container}>
        {imageUrl && <Image src={imageUrl} alt="" />}
        <List listStyleType="disc">
          {items.map((item, index) => (
            <List.Item key={index}>
              <Anchor href={item.href}>{item.label}</Anchor>
            </List.Item>
          ))}
        </List>
      </Box>
    </Box>
  )
}

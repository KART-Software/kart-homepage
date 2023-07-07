import {
  Box,
  Text,
  Title,
  createStyles,
  SimpleGrid,
  Footer,
  Flex,
  Anchor,
  Button,
} from "@mantine/core"
import Link from "next/link"
const useStyles = createStyles({
  Footer: {
    backgroundColor: "#124387",
    padding: "60px 0 40px",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  Text: {
    color: "#ffffff",
  },
})

export const DefaultFooter = () => {
  const { classes } = useStyles()
  return (
    <Footer className={classes.Footer} height={"auto"}>
      <Text className={classes.Text}>
        Copyright 2016-2017
        <Anchor className={classes.Text} href="/about">
          Kyoto University Formula Project KART.
        </Anchor>
        All Rights Reserved.
      </Text>
      <Flex gap={4} mb={14}>
        <Anchor href="https://twitter.com/kart_official">Twitter</Anchor>
        <Anchor href="https://m.facebook.com/KART.official">Facebook</Anchor>
      </Flex>
    </Footer>
  )
}

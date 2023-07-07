import {
  Anchor,
  Image,
  Flex,
  Header,
  createStyles,
  List,
  Box,
  Accordion,
  Burger,
} from "@mantine/core";
import { DefaultHeaderLink } from "./DefaultHeaderLink";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles({
  Header: {
    backgroundColor: "#124387",
    width: "100%",
    paddingRight: 15,
    padding: "27px 15px",
  },
  HeaderContents: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  List: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  Item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Point: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
  },
});

type Props = { state: number };

export const SPHeader = ({ state }: Props) => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Header className={classes.Header} height={"auto"}>
      <Box className={classes.HeaderContents}>
        <Anchor href="/">
          <Image src={"/images/kart_logo.png"} alt={""} />
        </Anchor>
        <Burger opened={opened} onClick={toggle} color="#fff" size="md" />
      </Box>
      <Box hidden={!opened}>
        <List className={classes.List}>
          <List.Item>
            <DefaultHeaderLink
              state={1}
              currentState={state}
              text="HOME"
              href="/"
            />
          </List.Item>
          <List.Item>
            <DefaultHeaderLink
              state={2}
              currentState={state}
              text="ABOUT"
              href="/about"
            />
          </List.Item>
          <List.Item>
            <DefaultHeaderLink
              state={3}
              currentState={state}
              text="SPONSOR"
              href="/sponsor"
            />
          </List.Item>
          <List.Item>
            <DefaultHeaderLink
              state={4}
              currentState={state}
              text="THE CAR"
              href="/thecar"
            />
          </List.Item>
          <List.Item>
            <DefaultHeaderLink
              state={5}
              currentState={state}
              text="CONTACT"
              href="/contact"
            />
          </List.Item>
          <List.Item>
            <DefaultHeaderLink
              state={6}
              currentState={state}
              text="PRIVATE"
              href="/private"
            />
          </List.Item>
        </List>
      </Box>
    </Header>
  );
};

import {
  Anchor,
  Image,
  Flex,
  Header,
  createStyles,
  List,
  Box,
} from "@mantine/core";
import { DefaultHeaderLink } from "./DefaultHeaderLink";

const useStyles = createStyles({
  Header: {
    backgroundColor: "#124387",
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 15,
    padding: "27px 15px",
  },
  List: {
    display: "flex",
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

export const DefaultHeader = ({ state }: Props) => {
  const { classes } = useStyles();
  return (
    <Header className={classes.Header} height={"auto"}>
      <Anchor href="/">
        <Image src={"/images/kart_logo.png"} alt={""} />
      </Anchor>
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
    </Header>
  );
};

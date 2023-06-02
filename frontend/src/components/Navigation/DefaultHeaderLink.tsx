import { ClassNames } from "@emotion/react";
import { Anchor, Box, createStyles } from "@mantine/core";

const useStyles = createStyles({
  LinkContainer: {
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
  Link: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 25,
  },
});

type Props = {
  state: number;
  text: string;
  currentState: number;
  href: string;
};

export const DefaultHeaderLink = ({
  state,
  text,
  currentState,
  href,
}: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.LinkContainer}>
      <Box
        className={classes.Point}
        sx={{ opacity: currentState == state ? 1 : 0 }}
      />
      <Anchor
        className={classes.Link}
        sx={{ opacity: currentState == state ? 1 : 0.7 }}
        href={href}
      >
        {text}
      </Anchor>
    </Box>
  );
};

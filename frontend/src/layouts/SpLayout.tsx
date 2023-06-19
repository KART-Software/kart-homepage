import { Box } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SpLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 500,
          maxWidth: 500,
        }}
      >
        {children}
      </div>
    </div>
  );
};

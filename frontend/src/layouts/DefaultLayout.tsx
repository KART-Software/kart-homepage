import { DefaultHeader } from "@/components/Navigation/DefaultHeader";
import { Box } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        maxWidth: 1370,
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

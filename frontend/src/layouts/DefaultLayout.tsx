import { DefaultHeader } from "@/components/Navigations/DefaultHeader"
import { Box } from "@mantine/core"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
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
          maxWidth: 1370,
        }}
      >
        {children}
      </div>
    </div>
  )
}

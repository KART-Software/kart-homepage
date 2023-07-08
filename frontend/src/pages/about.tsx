import { DefaultFooter } from "@/components/Navigations/DefaultFooter"
import { DefaultHeader } from "@/components/Navigations/DefaultHeader"
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { Box } from "@mantine/core"

export default function About() {
  return (
    <DefaultLayout>
      <DefaultHeader state={2} />
      <Box
        px={200}
        py={18}
        sx={{
          gap: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
      <DefaultFooter />
    </DefaultLayout>
  )
}

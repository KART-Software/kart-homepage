import { SPHeader } from "@/components/Navigations/SPHeader"
import { useViewportSize } from "@mantine/hooks"
import { SpLayout } from "@/layouts/SpLayout"
import { DefaultHeader } from "@/components/Navigations/DefaultHeader"
import { Box } from "@mantine/core"
import { MainCarousel } from "@/components/MainCarousel"
import { TopBio } from "@/components/Bios/TopBio"
import { DefaultFooter } from "@/components/Navigations/DefaultFooter"
import { BottomCarousel } from "@/components/BottomCarousel"
import { SponsorLink } from "@/components/Navigations/SponsorLink"
import { DefaultLayout } from "@/layouts/DefaultLayout"

export default function Home() {
  const { width } = useViewportSize()

  const carouselImages = [
    "/images/top1.jpg",
    "/images/top2.jpg",
    "/images/top3.jpg",
  ]

  const bottomCarouselImages = [
    "/images/bottom1.jpg",
    "/images/bottom2.jpg",
    "/images/bottom3.jpg",
    "/images/bottom4.jpg",
    "/images/bottom5.jpg",
    "/images/bottom6.jpg",
  ]

  if (width <= 500) {
    return (
      <SpLayout>
        <SPHeader state={1} />
      </SpLayout>
    )
  }

  return (
    <DefaultLayout>
      <DefaultHeader state={1} />
      <Box
        px={200}
        py={18}
        sx={{
          gap: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainCarousel images={carouselImages} />
        <TopBio
          title="Welcome to Kyoto University Formula Project KART"
          text="We are a team of students at Kyoto University, who design, build and
        race a formula-style car. We develop our car to win the Formula Student
        competisions. Not only racing it, we also manage the project in terms of
        scheme, finance, and human affairs. We are keen to recruit new members,
        and partners who cooperate with us to achieve our goal."
        />
        <SponsorLink href="/sponsor" />

        <TopBio
          title="RECENT ACTIVITIES"
          text="第17回全日本学生フォーミュラ大会 2019年8月26日～30日 (2019.11.15 updated)"
        />
        <BottomCarousel images={bottomCarouselImages} />
      </Box>

      <DefaultFooter />
    </DefaultLayout>
  )
}

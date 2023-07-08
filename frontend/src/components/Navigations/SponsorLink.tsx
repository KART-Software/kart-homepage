import { Anchor, Box, Image, createStyles } from "@mantine/core"
type Props = {
  href: string
}
const useStyles = createStyles({})
export const SponsorLink = ({ href }: Props) => {
  const { classes } = useStyles()

  return (
    <Anchor href={href}>
      <Image src="/images/intro_sponsors.png" alt="" />
    </Anchor>
  )
}

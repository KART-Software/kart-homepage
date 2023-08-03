import { Article } from "@/components/ Article"
import { KeyVisual } from "@/components/KeyVisual "
import { DefaultFooter } from "@/components/Navigations/DefaultFooter"
import { DefaultHeader } from "@/components/Navigations/DefaultHeader"
import { SideItem } from "@/components/SideItem"
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { Box, createStyles } from "@mantine/core"

const useStyles = createStyles({
  Container: { display: "flex", gap: 30 },
  ArticleContainer: {
    flex: 2,
  },
  SideItemContainer: {
    flex: 1,
  },
})

export default function About() {
  const { classes } = useStyles()
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
      >
        <KeyVisual
          title={"ABOUT US"}
          subTitle={"KART our team and Student Formula cometition we attend."}
          imageUrl={"/images/teamphoto.jpg"}
        />
        <Box className={classes.Container}>
          <Box className={classes.ArticleContainer}>
            <Article
              title="StudentFormula"
              float="left"
              imageUrl="/images/groupPhoto.jpeg"
            >
              学生フォーミュラ大会は，フォーミュラカーの製作を通して，学生が実際のものづくりの現場で行われるマーケティング，企画，設計，製造，コスト管理などの活動を行うことによってその能力を競う大会です．これらの活動を通して得られる経験は，教室の中だけでは会得できない大きな財産となります．大会では動的審査5競技（アクセラレーション，スキッドパッド，オートクロス，エンデュランス，燃費）と静的審査3競技（デザイン・コスト・プレゼンテーション）の計8競技の総合得点で競う形となっています．
              <br />
              この大会は，1981年にものづくりの実践的な教育活動の一環としてアメリカで始まりました．たった4校の参加から始まった大会は，今ではアメリカだけで3つの大会が開催され，世界中から延べ250校を超える大学が参加する大規模なものとなっています．また，アメリカでの大会に加え，イギリス，オーストラリア，イタリア，ブラジル，ドイツなどでも大会が開催され，国際的なものになってきています．日本では，2003年に第1回大会が開催され，今年度（2018年度）で第16回目の大会を迎えます．第11回大会より日本大会もFormulaSAEシリーズに加入し，国際大会として位置づけられてからは，国際大会化に伴い海外からの参加校が増加し，大会のレベルは格段に高まりました．大会規模も拡大を続けており，2019年度の第17回大会では海外チームも含め107校が参戦し，表彰台の頂点を競い合いました．
            </Article>
            <Article title="KART" imageUrl="/images/KART.jpg" float="right">
              私たちの活動は，いずれ日本を支えていくことになる学生が，レーシングチームという組織の中で座学では学ぶことの出来ない幅広い経験を積み，ものづくりの面白さと厳しさを味わいながらその能力を養うとともに，人間的にも成長していくことを目的としています．活動では，車両の設計，製作のみならず渉外，広報，会計処理，チームマネジメントに至る全ての業務を学生自らの手で行います．その過程で直面する様々な問題を克服しながら，設計や工作機械に関する技術を習得し，設計から製造までの考え方や過程を学びます．さらに，メンバー間で折衝すること，責任を持って担当部署を勤め上げること，知識を自分のものにし決断力や実行力をつけることは，組織で活動してゆく上で必須のものであり，この経験はエンジニアを目指す私達にとって必ず有意義なものとなるはずです．
            </Article>
          </Box>
          <Box className={classes.SideItemContainer}>
            <SideItem
              title="Recent achievements"
              imageUrl="/images/award.jpg"
              items={[{ label: "1st prize over all (2013)", href: "" }]}
            />
            <SideItem
              title="Department"
              items={[{ label: "Chassis", href: "" }]}
            />
          </Box>
        </Box>
      </Box>
      <DefaultFooter />
    </DefaultLayout>
  )
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { SPHeader } from "@/components/Navigation/SPHeader";
import { useViewportSize } from "@mantine/hooks";
import { SpLayout } from "@/layouts/SpLayout";
import { DefaultHeader } from "@/components/Navigation/DefaultHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { height, width } = useViewportSize();

  if (width <= 500) {
    return (
      <SpLayout>
        <SPHeader state={1} />
      </SpLayout>
    );
  }

  return (
    <DefaultLayout>
      <DefaultHeader state={1} />
    </DefaultLayout>
  );
}

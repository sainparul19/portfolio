import Head from "next/head";
import HomePage from "../comps/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}

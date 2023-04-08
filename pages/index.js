import Dashboard from "@/components/Dashboard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Dashboard />
    </>
  );
}

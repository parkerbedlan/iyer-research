import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home" message="The Iyer Lab">
      {[...Array(1000)].map((_, i) => (
        <p key={i}>This is the Home Page.</p>
      ))}
    </Layout>
  );
};

export default HomePage;

import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const TeamPage: NextPage = () => {
  return (
    <Layout title="Team" background="cell3" message="Meet the Team">
      <UnderConstruction />
    </Layout>
  );
};

export default TeamPage;

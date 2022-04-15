import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const PublicationsPage: NextPage = () => {
  return (
    <Layout title="Publications" background="cell4" message="Publications">
      <UnderConstruction />
    </Layout>
  );
};

export default PublicationsPage;

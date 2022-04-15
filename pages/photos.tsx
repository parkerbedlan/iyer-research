import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const PhotosPage: NextPage = () => {
  return (
    <Layout title="Photos" background="cell5" message="Lab Photos">
      <UnderConstruction />
    </Layout>
  );
};

export default PhotosPage;

import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { PersonDisplay } from "./team";

const AlumniPage: NextPage = () => {
  return (
    <Layout
      title="Alumni"
      background="/photos/iyer-teams-tab.png"
      message="Team Alumni Showcase"
    >
      <PersonDisplay
        imageSide="right"
        name="Amy Smith"
        blurb="Amy is a junior Biochemistry major with a minor in Business Administration. She is from Wentzville, Missouri and plans on going to medical school after graduation and becoming a forensic pathologist. She loves toasted ravioli and wants to visit Italy someday."
        imgUrl="/photos/portraits/amy-smith.jpg"
      />
      <PersonDisplay
        imageSide="left"
        name="Danita Mathew"
        blurb="Danita  is a sophomore Biochemistry major with minors in Neuroscience and Spanish. She is from Garland, Texas and plans on attending medical school as an M.D./Ph.D. candidate. She loves singing and attempting to cook!"
        imgUrl="/photos/portraits/danita-mathew.jpg"
        mobileImgMargin="100vw"
      />
      <PersonDisplay
        imageSide="right"
        name="Mary Bergwell"
        blurb="Mary is a junior Biology major with minors in Spanish and Chemistry. She is from Overland Park, Kansas and hopes to pursue an MD/PhD program in microbiology or neuroscience. She loves Game of Thrones seasons 1-7, playing Sims 4, and finding the best coffee in town."
        imgUrl="/photos/portraits/mary-bergwell.jpg"
      />
    </Layout>
  );
};

export default AlumniPage;

import { Image } from "@mantine/core";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Layout } from "../components/Layout";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";

const TeamPage: NextPage = () => {
  return (
    <Layout title="Team" background="cell3" message="Meet the Team">
      <PersonDisplay
        imageSide="right"
        name="Dr. Jyoti Iyer"
        blurb="Dr. Iyer received her PhD in Cancer Biology at the University of Nebraska Medical Center where she studied the process of spindle assembly using Xenopus egg extracts and human cell lines. She pursued her postdoctoral training at the NIH where she utilized C. elegans to study the molecular mechanisms of centrosome duplication. Dr. Iyer is originally from Thane, a city near Mumbai in India. She loves watching movies and listening to music."
        imgUrl="/photos/portraits/jyoti-iyer.jpg"
      />
      <PersonDisplay
        imageSide="left"
        name="Amy Smith"
        blurb="Amy is a junior Biochemistry major with a minor in Business Administration. She is from Wentzville, Missouri and plans on going to medical school after graduation and becoming a forensic pathologist. She loves toasted ravioli and wants to visit Italy someday."
        imgUrl="/photos/portraits/amy-smith.jpg"
      />
      <PersonDisplay
        imageSide="right"
        name="Mary Bergwell"
        blurb="Mary is a junior Biology major with minors in Spanish and Chemistry. She is from Overland Park, Kansas and hopes to pursue an MD/PhD program in microbiology or neuroscience. She loves Game of Thrones seasons 1-7, playing Sims 4, and finding the best coffee in town."
        imgUrl="/photos/portraits/mary-bergwell.jpg"
      />
      <PersonDisplay
        imageSide="left"
        name="Danita Mathew"
        blurb="Danita  is a sophomore Biochemistry major with minors in Neuroscience and Spanish. She is from Garland, Texas and plans on attending medical school as an M.D./Ph.D. candidate. She loves singing and attempting to cook!"
        imgUrl="/photos/portraits/danita-mathew.jpg"
      />
      <PersonDisplay
        imageSide="right"
        name="Ellie Smith"
        blurb="Ellie is a sophomore biochemistry major. Her goal following graduation is to earn a PhD in biochemistry to pursue a career in research. When she's not working in the lab, Ellie enjoys baking and volunteering at animal rescues."
        imgUrl="/photos/portraits/ellie-smith.jpg"
        mobileImgMargin="18rem"
      />
    </Layout>
  );
};

const PersonDisplay: React.FC<{
  imageSide?: "left" | "right";
  name: string;
  blurb: string | ReactNode;
  imgUrl: string;
  mobileImgMargin?: string;
}> = ({ imageSide = "left", blurb, imgUrl, name, mobileImgMargin }) => {
  const image = (
    <Image
      src={imgUrl}
      alt={name}
      className="mx-4 md:min-w-[300px] absolute md:relative z-10"
    />
  );
  const isSmallScreen = useIsSmallScreen();
  return (
    <>
      <div className="flex space-around items-start p-10">
        {imageSide === "left" && image}
        <div
          className={`bg-gray-700 text-white py-2 px-4 w-50 z-20`}
          style={{ marginTop: isSmallScreen ? mobileImgMargin || "14rem" : 0 }}
        >
          <h1 className="text-4xl font-semibold mb-4">{name}</h1>
          <p className="text-lg">{blurb}</p>
        </div>
        {imageSide === "right" && image}
      </div>
    </>
  );
};

export default TeamPage;

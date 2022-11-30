import { Image } from "@mantine/core";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { PageDisplay } from ".";
import { Layout } from "../components/Layout";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";

const TeamPage: NextPage = () => {
  return (
    <Layout
      title="Team"
      background="/photos/iyer-teams-tab.png"
      message="Meet the Team"
    >
      <PersonDisplay
        imageSide="right"
        name="Dr. Jyoti Iyer"
        blurb="Dr. Iyer received her PhD in Cancer Biology at the University of Nebraska Medical Center where she studied the process of spindle assembly using Xenopus egg extracts and human cell lines. She pursued her postdoctoral training at the NIH where she utilized C. elegans to study the molecular mechanisms of centrosome duplication. Dr. Iyer is originally from Thane, a city near Mumbai in India. She loves watching movies and listening to music."
        imgUrl="/photos/portraits/jyoti-iyer.jpg"
        mobileImgMargin="75vw"
      />
      <PersonDisplay
        imageSide="left"
        name="Ellie Smith"
        blurb="Ellie is a sophomore biochemistry major. Her goal following graduation is to earn a PhD in biochemistry to pursue a career in research. When she's not working in the lab, Ellie enjoys baking and volunteering at animal rescues."
        imgUrl="/photos/portraits/ellie-smith.jpg"
        mobileImgMargin="90vw"
      />
      <PersonDisplay
        imageSide="right"
        name="Ramon Duran"
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
        pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
        justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
        Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
        Vivamus bibendum massa at mi dignissim, in congue tellus tempus."
        imgUrl="https://placekitten.com/300/300"
      />
      <PersonDisplay
        imageSide="left"
        name="Carter Dierlam"
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
        pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
        justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
        Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
        Vivamus bibendum massa at mi dignissim, in congue tellus tempus."
        imgUrl="/photos/portraits/carter-dierlam.png"
        mobileImgMargin="16rem"
      />
      <PersonDisplay
        imageSide="right"
        name="Erin Haastrup"
        blurb="Erin received a Bachelor of Science in Microbiology at the University of Oklahoma. She is a research technician for the Iyer Lab and plans on pursuing a PhD in the future. She enjoys gardening and talking about her cat, Blue."
        imgUrl="/photos/portraits/erin-haastrup.jpg"
      />
      <PersonDisplay
        imageSide="left"
        name="Peter Nunan"
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
        pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
        justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
        Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
        Vivamus bibendum massa at mi dignissim, in congue tellus tempus."
        imgUrl="https://placekitten.com/400"
      />
      {/* <Divider /> */}
      <PageDisplay
        bigText="Meet the alumni!"
        buttonText="Alumni"
        buttonHref="/alumni"
        bgUrl="/photos/1-cropped.jpeg"
      />
    </Layout>
  );
};

export const PersonDisplay: React.FC<{
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
      className="mx-4 min-w-[300px] max-w-[80vw] md:max-w-[40vw] absolute sm:relative z-10"
    />
  );
  const isSmallScreen = useIsSmallScreen();
  return (
    <>
      <div className="flex space-around items-start p-10">
        {imageSide === "left" && image}
        <div
          className={`bg-gray-700 text-white py-2 px-4 w-50 z-20`}
          style={{ marginTop: isSmallScreen ? mobileImgMargin || "50vw" : 0 }}
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

import { Image } from "@mantine/core";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Layout } from "../components/Layout";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";
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
      />
      <PersonDisplay
        imageSide="right"
        name="Mary Bergwell"
        blurb="Mary is a junior Biology major with minors in Spanish and Chemistry. She is from Overland Park, Kansas and hopes to pursue an MD/PhD program in microbiology or neuroscience. She loves Game of Thrones seasons 1-7, playing Sims 4, and finding the best coffee in town."
        imgUrl="/photos/portraits/mary-bergwell.jpg"
      />
      <PersonDisplay
        imageSide="left"
        name="Katherine Lastname"
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
        pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
        justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
        Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
        Vivamus bibendum massa at mi dignissim, in congue tellus tempus."
        imgUrl="https://placekitten.com/303/303"
      />
      <PersonDisplay
        imageSide="right"
        name="Becky Lastname"
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
        pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
        justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
        Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
        Vivamus bibendum massa at mi dignissim, in congue tellus tempus."
        imgUrl="https://placekitten.com/304/304"
      />
    </Layout>
  );
};

export default AlumniPage;

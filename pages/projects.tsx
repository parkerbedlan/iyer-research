import { Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Divider } from ".";
import { Layout } from "../components/Layout";

const ProjectsPage: NextPage = () => {
  return (
    <Layout
      title="Projects"
      background="/photos/iyer-projects-preview.png"
      message="Our Projects"
    >
      <Divider />
      {/* <ProjectDisplay
        bigText="Microcephaly Project"
        smallText="Primary microcephaly is a debilitating neurological disorder. Babies
        that are born with this disease have smaller brains and display severe
        intellectual disability. Using molecular biology techniques such as
        CRISPR and imaging using spinning disk confocal microscopy, we are
        investigating the role of genetic mutations in centrosome formation and
        their relationship to microcephaly."
        tinyText="Photo by Amy Smith"
        bgUrl="/photos/microcephaly.jpg"
      /> */}
      {/* <Divider /> */}
      <ProjectDisplay
        bigText="CHD-1 Project"
        smallText={
          <>
            Our laboratory is trying to understand the role of the chromatin
            remodeling protein CHD-1 in C. <i>elegans</i>.
          </>
        }
        tinyText="Photo by Holly Lakin"
        bgUrl="/photos/chd-1.jpg"
        bgFixed
      />
      <Divider />
      <ProjectDisplay
        bigText="Investigating the Molecular Mechanisms of Centrosome Duplication"
        smallText={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rutrum ante vel consequat ultrices. Vivamus non odio sed arcu
            pulvinar aliquam. Aliquam id justo ante. Nulla rhoncus fermentum
            justo in luctus. Praesent porttitor lorem vitae aliquam interdum.
            Etiam sed volutpat quam. Duis blandit vitae ligula vitae imperdiet.
            Vivamus bibendum massa at mi dignissim, in congue tellus tempus.
            Aenean ac tortor vel tellus bibendum lobortis. Quisque fermentum
            purus id urna tincidunt efficitur. Etiam vel dictum elit.
            Pellentesque rhoncus nunc in ipsum molestie pharetra. Integer lacus
            leo, aliquet sit amet laoreet non, varius sit amet nibh.
          </>
        }
        tinyText="Photo by Holly Lakin"
        bgUrl="/photos/iyer-home-tab.png"
        bgFixed
      />
      <Divider />
      {/* <ProjectDisplay
        bigText="Drug Screening Project"
        smallText={
          <>
            We are using <i>Caenorhabditis elegans</i>, a roundworm, to
            investigate the toxicity of novel drugs and analyze their effects in
            a whole organism. Current toxicity screenings are being done with
            TU100.
          </>
        }
        tinyText="Photo by Holly Lakin"
        bgUrl="/photos/drug-screening.jpg"
        bgFixed
      /> */}
    </Layout>
  );
};

const ProjectDisplay: React.FC<{
  bigText: string;
  smallText: string | ReactNode;
  tinyText?: string;
  bgUrl: string;
  bgFixed?: boolean;
}> = ({ bgFixed, bgUrl, bigText, smallText, tinyText }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover p-10 bg-top h-[48rem]`}
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundAttachment: bgFixed ? "fixed" : "unset",
      }}
    >
      <div className="flex justify-center items-center bg-goodgray p-10">
        <h1 className="text-4xl font-semibold text-white">{bigText}</h1>
      </div>
      <p className="mt-8 bg-goodgray text-white text-lg py-2 px-4">
        {smallText}
      </p>
      {tinyText && (
        <p className="mt-8 bg-goodgray text-white py-2 px-4 text-xs">
          {tinyText}
        </p>
      )}
    </div>
  );
};

export default ProjectsPage;

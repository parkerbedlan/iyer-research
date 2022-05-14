import { Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Divider } from ".";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const PublicationsPage: NextPage = () => {
  return (
    <Layout
      title="Publications"
      background="/photos/iyer-publications-tab.png"
      message="Publications"
    >
      <Divider />
      <PublicationDisplay
        bigText="Generation of sas-6::ha by CRISPR/Cas9 editing"
        smallText={
          <>
            Authors: Mary Bergwell* , Amy Smith*, Holly Lakin, Rebecca Slay and
            Jyoti Iyer
            <br />* Equal contribution
          </>
        }
        tinyText="Photo by Dr. Iyer"
        btnHref="https://www.micropublication.org/media/2019/08/micropub.biology.000141.pdf"
        background="/photos/2.jpg"
      />
      <Divider />
      <PublicationDisplay
        bigText="CRISPR/Cas9 Editing of the C. elegans rbm-3.2 Gene using the dpy-10 Co-CRISPR Screening Marker and Assembled Ribonucleoprotein Complexes"
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
        tinyText="Photo by Firstname Lastname"
        btnHref="https://www.google.com/"
        background="/photos/3.png"
      />
      <Divider />
      <PublicationDisplay
        bigText="The retromer complex regulates C. elegans development and mammalian ciliogenesis"
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
        tinyText="Photo by Firstname Lastname"
        btnHref="https://www.google.com/"
        background="/photos/4.jpg"
      />
      <Divider />
      <PublicationDisplay
        bigText="The chromatin remodeling protein CHD-1 and the EFL-1/DPL-1 transcription factor cooperatively down regulate CDK-2 to control SAS-6 levels and centriole number"
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
        tinyText="Photo by Firstname Lastname"
        btnHref="https://www.google.com/"
        background="/photos/5.jpg"
      />
    </Layout>
  );
};

const PublicationDisplay: React.FC<{
  bigText: string;
  smallText: string | ReactNode;
  tinyText?: string | ReactNode;
  btnHref?: string;
  background: string;
}> = ({ bigText, smallText, tinyText, btnHref, background }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover bg-center p-10 bg-top h-[48rem]`}
      style={{
        backgroundImage: `url('${background}')`,
        backgroundAttachment: true ? "fixed" : "unset",
      }}
    >
      <div className="flex justify-center items-center bg-goodgray p-10">
        <h1 className="text-4xl font-semibold text-white">{bigText}</h1>
      </div>
      <p className="mt-8 bg-goodgray text-white text-lg py-2 px-4">
        {smallText}
      </p>
      {btnHref && (
        <a target="_blank" rel="noreferrer" href={btnHref} className="mt-8">
          <Button
            variant="default"
            color="dark"
            className="bg-goodgray"
            size="lg"
          >
            View Publication Here
          </Button>
        </a>
      )}

      <p className="mt-8 bg-goodgray text-white py-2 px-4 text-xs">
        {tinyText}
      </p>
    </div>
  );
};

export default PublicationsPage;

import { Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { NextPage } from "next";
import { ReactNode } from "react";
import { Divider } from ".";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const PublicationsPage: NextPage = () => {
  return (
    <Layout title="Publications" background="cell4" message="Publications">
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
      />
    </Layout>
  );
};

const PublicationDisplay: React.FC<{
  bigText: string;
  smallText: string | ReactNode;
  tinyText?: string | ReactNode;
  btnHref?: string;
}> = ({ bigText, smallText, tinyText, btnHref }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover p-10 bg-top h-[48rem]`}
      style={{
        backgroundImage: `url('${"/photos/2.jpg"}')`,
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

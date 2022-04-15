import { Footer as MantineFooter } from "@mantine/core";
import React, { ReactNode } from "react";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <MantineFooter height="100%">
      <div className="bg-gray-200">
        <div className="h-12 py-10 px-2">
          <h3 className="text-lg text-center ">
            Contact Dr. Iyer with any questions or to join the team.
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-around flex-wrap pt-10 pb-8 w-full max-w-3xl text-center">
            <Section title="Email" body="jgi2708@utulsa.edu" />
            <Section title="Phone" body="918-631-2070" />
            <Section
              title="Location"
              body={
                <p>
                  Keplinger Hall <br /> Room M227
                </p>
              }
            />
          </div>
        </div>
      </div>
    </MantineFooter>
  );
};

const Section: React.FC<{ title: string; body: string | ReactNode }> = ({
  title,
  body,
}) => {
  return (
    <div className="w-full md:w-fit my-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <h4 className="text-lg">{body}</h4>
    </div>
  );
};

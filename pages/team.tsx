import { Image } from "@mantine/core";
import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { UnderConstruction } from "../components/UnderConstruction";

const TeamPage: NextPage = () => {
  return (
    <Layout title="Team" background="cell3" message="Meet the Team">
      <PersonDisplay />
    </Layout>
  );
};

const PersonDisplay: React.FC<{}> = () => {
  return (
    <>
      <div className="flex space-around m-10">
        <p className="mt-8 bg-gray-700 text-white text-lg py-2 px-4 w-5">
          Amy is a junior Biochemistry major with a minor in Business
          Administration. She is from Wentzville, Missouri and plans on going to
          medical school after graduation and becoming a forensic pathologist.
          She loves toasted ravioli and wants to visit Italy someday.
        </p>
        <Image
          src="/photos/portraits/amy-smith.jpg"
          alt="Amy Smith"
          width="24rem"
        />
      </div>
    </>
  );
};

export default TeamPage;

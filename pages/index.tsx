import { Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";

const HomePage: NextPage = () => {
  const isSmallScreen = useIsSmallScreen();
  return (
    <Layout title="Home" message="The Iyer Lab">
      <Divider />
      <PageDisplay
        bigText="Check out our projects!"
        buttonText="Projects"
        buttonHref="/projects"
        backgroundUrl="/photos/9.jpg"
        bgFixed={!isSmallScreen}
      />
      <Divider />
      <PageDisplay
        bigText="Meet the team!"
        buttonText="Team"
        buttonHref="/team"
        backgroundUrl="/photos/1-cropped.jpeg"
      />
      <Divider />
      <PageDisplay
        bigText="Read our publications!"
        buttonText="Publications"
        buttonHref="/publications"
        backgroundUrl="/photos/2.jpg"
        bgFixed
      />
      <Divider />
      <PageDisplay
        bigText="Browse our photo gallery!"
        buttonText="Photos"
        buttonHref="/photos"
        backgroundUrl="/photos/13.jpg"
        bgFixed
      />
    </Layout>
  );
};

const Divider = () => <div className="h-20 bg-transparent" />;

const PageDisplay: React.FC<{
  bigText: string;
  buttonText: string;
  buttonHref: string;
  backgroundUrl: string;
  bgFixed?: boolean;
}> = ({ bigText, buttonText, buttonHref, backgroundUrl, bgFixed }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover p-10 bg-top`}
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundAttachment: bgFixed ? "fixed" : "unset",
      }}
    >
      <div className="flex justify-center items-center bg-gray-600/50 p-10">
        <h1 className="text-4xl font-semibold text-white">{bigText}</h1>
      </div>
      <NextLink href={buttonHref}>
        <Button variant="default" color="dark" className="mt-8 bg-gray-600/50">
          {buttonText}
        </Button>
      </NextLink>
    </div>
  );
};

export default HomePage;

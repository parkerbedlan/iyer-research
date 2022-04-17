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
        bgUrl="/photos/9.jpg"
        bgFixed={!isSmallScreen}
      />
      <Divider />
      <PageDisplay
        bigText="Meet the team!"
        buttonText="Team"
        buttonHref="/team"
        bgUrl="/photos/1-cropped.jpeg"
      />
      <Divider />
      <PageDisplay
        bigText="Read our publications!"
        buttonText="Publications"
        buttonHref="/publications"
        bgUrl="/photos/2.jpg"
        bgFixed
      />
      <Divider />
      <PageDisplay
        bigText="Browse our photo gallery!"
        buttonText="Photos"
        buttonHref="/photos"
        bgUrl="/photos/13.jpg"
        bgFixed
      />
    </Layout>
  );
};

export const Divider = () => <div className="h-20 bg-transparent" />;

const PageDisplay: React.FC<{
  bigText: string;
  buttonText: string;
  buttonHref: string;
  bgUrl: string;
  bgFixed?: boolean;
}> = ({ bigText, buttonText, buttonHref, bgUrl, bgFixed }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover p-10 bg-top`}
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundAttachment: bgFixed ? "fixed" : "unset",
      }}
    >
      <div className="flex justify-center items-center bg-goodgray p-10">
        <h1 className="text-4xl font-semibold text-white">{bigText}</h1>
      </div>
      <NextLink href={buttonHref} className="mt-8">
        <Button
          variant="default"
          color="dark"
          className="bg-goodgray"
          size="lg"
        >
          {buttonText}
        </Button>
      </NextLink>
    </div>
  );
};

export default HomePage;

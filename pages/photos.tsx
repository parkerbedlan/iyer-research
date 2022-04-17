import { ActionIcon, Button, Image, Modal } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight } from "tabler-icons-react";
import { Layout } from "../components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fs = await import("fs");

  const urls = fs
    .readdirSync("./public/photos")
    .filter((file) => file.includes(".") && !file.includes("cropped"))
    .map((file) => "/photos/" + file);

  return { props: { imgUrls: urls } };
};

const PhotosPage: NextPage<{ imgUrls: string[] }> = ({ imgUrls }) => {
  return (
    <Layout title="Photos" background="cell5" message="Lab Photos">
      <Gallery imgUrls={imgUrls} />
    </Layout>
  );
};

// lg:h-48 lg:w-48 xl:h-60 xl:w-60

const Gallery: React.FC<{ imgUrls: string[] }> = ({ imgUrls }) => {
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 place-content-center max-w-[100vw] gap-[1vw] p-[1vw]">
        {imgUrls.map((url, i) => (
          <div
            key={url}
            onClick={() => {
              setModalIndex(i);
              setModalOpened(true);
            }}
            className={`bg-cover bg-center h-[45vw] w-[45vw] md:h-[18vw] md:w-[18vw] hover:cursor-pointer`}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        {/* <div className="flex items-center justify-center min-h-fit min-w-fit"> */}
        {/* <ChevronLeft /> */}
        <Image
          src={imgUrls[modalIndex]}
          alt="current image"
          className="flex-grow"
        />
        {/* <ChevronRight /> */}
        {/* </div> */}
      </Modal>
    </>
  );
};

export default PhotosPage;

import { Image, Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import { Layout } from "../components/Layout";

// https://medium.com/@boris.poehland.business/next-js-api-routes-how-to-read-files-from-directory-compatible-with-vercel-5fb5837694b9
export const getServerSideProps: GetServerSideProps = async (context) => {
  const urls = await fetch(
    process.env.NEXT_PUBLIC_URL + "/api/getPhotoUrls"
  ).then((res) => res.json());

  return { props: { imgUrls: urls } };
};

const PhotosPage: NextPage<{ imgUrls: string[] }> = ({ imgUrls }) => {
  return (
    <Layout title="Photos" background="cell5" message="Lab Photos">
      <Gallery imgUrls={imgUrls} />
    </Layout>
  );
};

const Gallery: React.FC<{ imgUrls: string[] }> = ({ imgUrls }) => {
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  const realHover = useMediaQuery("(hover: hover)");

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
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        withCloseButton={false}
      >
        <div
          className={`absolute left-0 bottom-0 z-50 w-1/2 h-full hover:cursor-pointer opacity-0 focus:opactiy-0 bg-black flex justify-center items-center ${
            realHover && "hover:opacity-50"
          }`}
          onClick={() =>
            setModalIndex((modalIndex - 1 + imgUrls.length) % imgUrls.length)
          }
        >
          <ChevronLeft size="50%" />
        </div>
        <div
          className={`absolute right-0 bottom-0 z-50 w-1/2 h-full hover:cursor-pointer opacity-0 focus:opactiy-0 bg-black flex justify-center items-center ${
            realHover && "hover:opacity-50"
          }`}
          onClick={() =>
            setModalIndex((modalIndex + 1 + imgUrls.length) % imgUrls.length)
          }
        >
          <ChevronRight size="50%" />
        </div>
        <Image
          src={imgUrls[modalIndex]}
          alt="current image"
          className="flex-grow select-none"
        />
      </Modal>
    </>
  );
};

export default PhotosPage;

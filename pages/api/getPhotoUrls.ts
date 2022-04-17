import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

type Data = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dirRelativeToPublicFolder = "photos";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const urls = fs
    .readdirSync(dir)
    .filter((file) => file.includes(".") && !file.includes("cropped"))
    .map((file) => "/photos/" + file);

  res.status(200).json(urls);
}

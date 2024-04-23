import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const uploadThing = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};
export const ourFileRouter: FileRouter = {
  serverImage: uploadThing({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      // Logic for upload completion
    }),
  messageFile: uploadThing(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      // Logic for upload completion
    }),
};

export type OurFileRouter = typeof ourFileRouter;

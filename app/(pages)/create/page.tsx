"use client";
import { FC, useState, useCallback } from "react";
import { useCreatePost, useLogin, useProfiles } from "@lens-protocol/react-web";
import Uploader from "../../components/Uploader"; // Adjust the path as necessary
import { useAccount } from "wagmi";
import Button from "../../components/Button";
import { image, MetadataLicenseType } from "@lens-protocol/metadata";
import { MediaImageMimeType } from "@lens-protocol/metadata";

const CreatePage: FC = () => {
  const { address, isConnected } = useAccount();
  const { execute: login, data: loginData } = useLogin();
  const {
    execute: createPost,
    loading: creatingPost,
    error: createPostError,
  } = useCreatePost();
  const { data: ownedProfiles } = useProfiles({
    where: { ownedBy: [address || ""] },
  });

  const handleCreatePost = useCallback(
    async (imageUri: string) => {
      // Check for login
      if (!loginData && ownedProfiles && ownedProfiles.length > 0) {
        await login({
          address: address || "",
          profileId: ownedProfiles[0].id,
        });
      }

      if (loginData) {
        // Here, format your image metadata
        const metadata = image({
          title: "Touch grass",
          image: {
            item: imageUri, // The actual URI of the image
            type: MediaImageMimeType.PNG,
            altTag: "Me touching grass",
            license: MetadataLicenseType.CCO, // Adjust the MIME type accordingly
            // Additional fields like `attributes`, `altTag`, etc., as needed
          },
        });

        // Create the post on Lens with the formatted metadata
        const postResult = await createPost({
          metadata, // Pass the formatted metadata object
        });

        if (postResult.isFailure()) {
          console.error(
            "Failed to create post on Lens:",
            postResult.error.message
          );
          return;
        }

        console.log("Post created on Lens:", postResult.value);
      } else {
        console.error("Login required to create a post on Lens.");
      }
    },
    [loginData, login, address, ownedProfiles, createPost]
  );

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Create a Post</h1>
      {!isConnected && (
        <Button onClick={() => alert("Please connect your wallet first.")}>
          Connect Wallet
        </Button>
      )}
      {!loginData && isConnected && (
        <Button
          onClick={() => {
            if (ownedProfiles?.length > 0) {
              login({
                address: address || "",
                profileId: ownedProfiles[0].id,
              });
            } else {
              alert("No Lens profile found.");
            }
          }}
        >
          Login with Lens
        </Button>
      )}
      <Uploader
        gasless={true}
        showImageView={true}
        showReceiptView={true}
        onSuccess={(uri) => {
          console.log("Uploaded content URI:", uri);
          handleCreatePost(uri); // Automatically attempt to create a post after successful upload
        }}
      />
      {createPostError && (
        <div className="text-red-500">Error: {createPostError.message}</div>
      )}
    </div>
  );
};

export default CreatePage;

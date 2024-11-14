import { useContext } from "react";
import { MetadataContext } from "../context/MetadataContext";

const useMetadata = (page) => {
  const { defaultMetadata, metadata } = useContext(MetadataContext);
  return metadata[page] || defaultMetadata;
};

export default useMetadata;

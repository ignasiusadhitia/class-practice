import React from "react";
import useMetadata from "../hooks/useMetadata";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SeoComponent = ({ page }) => {
  const { title, description, keywords, schema } = useMetadata(page);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

SeoComponent.propTypes = {
  page: PropTypes.string,
};

export default SeoComponent;

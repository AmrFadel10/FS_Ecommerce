import { Helmet } from "react-helmet";

const MetaTags = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title} | Mega E-commerce</title>
    </Helmet>
  );
};

export default MetaTags;

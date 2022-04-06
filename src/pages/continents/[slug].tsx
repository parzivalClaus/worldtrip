import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { IContinent } from "../../interfaces/continents";
import { Banner } from "./components/Banner";
import { Cities } from "./components/Cities";
import { Description } from "./components/Description";

interface ContinentProps {
  continent: IContinent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box>
      <Banner image={continent.content.imageUrl} name={continent.name} />
      <Description content={continent.content} />
      <Cities cities={continent.content.cities} />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ["/continents/europa", "/continents/asia"],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`http://localhost:8000/continents?slug=${slug}`);

  const continent: IContinent = await res.json();

  return {
    props: {
      continent: continent[0],
    },
  };
};

import { Box, Heading } from "@chakra-ui/react";
import { ICity } from "../../../../interfaces/continents";
import { CitiesGrid } from "./components/CitiesGrid";

interface CitiesProps {
  cities: ICity[];
}

export const Cities = ({ cities }: CitiesProps) => {
  return (
    <Box
      maxWidth="1240px"
      margin="auto"
      marginTop={["2rem", "2rem", "5rem"]}
      marginBottom={["2rem", "2rem", "5rem"]}
      paddingX={["1rem", "2rem", "2rem", "2rem", "0"]}
    >
      <Heading fontWeight="500" fontSize={["1.5rem", "1.5rem", "2.25rem"]}>
        Cidades + 100
      </Heading>
      <CitiesGrid cities={cities} />
    </Box>
  );
};

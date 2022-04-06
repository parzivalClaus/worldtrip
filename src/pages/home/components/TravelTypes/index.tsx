import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import { TravelItem } from "./components/TravelItem";

export const TravelTypes = () => {
  return (
    <Box>
      <SimpleGrid
        templateColumns={[
          "repeat(2, auto)",
          "repeat(2, auto)",
          "repeat(3, auto)",
          "repeat(5, 1fr)",
        ]}
        gap={["1.68rem", "1.68rem", "1.68rem", "4", "16"]}
        width="100%"
        maxWidth="1240px"
        marginX="auto"
        marginTop={["2.25rem", "2.25rem", "2.25rem", "24"]}
      >
        <TravelItem alt="Cocktail" src="/cocktail.png" text="vida noturna" />
        <TravelItem alt="Surf" src="/surf.png" text="praia" />
        <TravelItem alt="Building" src="/building.png" text="moderno" />
        <TravelItem alt="Museum" src="/museum.png" text="clássico" />
        <TravelItem alt="Earth" src="/earth.png" text="e mais..." />
      </SimpleGrid>
    </Box>
  );
};

import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelItemProps {
  src: string;
  alt: string;
  text: string;
}

export const TravelItem = ({ src, alt, text }: TravelItemProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={["row", "row", "column"]}
      alignItems="center"
      justifyContent="center"
      paddingX={["1rem", "2rem", "0"]}
    >
      <Image src={isWideVersion ? src : "/elipse.png"} alt={alt} />
      <Text
        fontWeight="600"
        marginTop={["0", "0", "24px"]}
        marginLeft={["0.5rem", "0.5rem", "0"]}
        fontSize={["md", "md", "lg", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  );
};

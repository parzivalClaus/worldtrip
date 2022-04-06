import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Flex, Text } from "@chakra-ui/react";
import { SwiperItem } from "./components/SwiperItem";
import { useEffect, useState } from "react";
import { IContinent } from "../../../../interfaces/continents";

export const SwiperContinents = () => {
  const [continents, setContinents] = useState<IContinent[]>([]);

  const getContinents = async () => {
    try {
      const continents: IContinent[] = await fetch(
        "http://localhost:8000/continents"
      ).then((response) => response.json());

      if (continents) {
        setContinents(continents);
      }
    } catch (error) {
      console.error("Não foi possível realizar a busca de continentes na API.");
    }
  };

  useEffect(() => {
    getContinents();
  }, []);

  if (!!continents && !!continents.length) {
    return (
      <Flex
        width="100%"
        maxWidth="1240px"
        marginX="auto"
        marginTop="52px"
        marginBottom="40px"
      >
        <Swiper
          cssMode={true}
          className="mySwiper"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {continents.map((continent) => (
            <SwiperSlide key={continent.id}>
              <SwiperItem
                name={continent.name}
                description={continent.description}
                backgroundImage={continent.imageUrl}
                link={continent.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    );
  } else {
    return (
      <Flex
        width="100%"
        justifyContent="center"
        maxWidth="1240px"
        marginX="auto"
        marginTop="52px"
        marginBottom="40px"
      >
        <Text fontSize="lg">Não há nenhum slide disponível.</Text>
      </Flex>
    );
  }
};

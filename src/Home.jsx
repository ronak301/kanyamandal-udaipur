import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { isEmpty, map } from "lodash";
import React from "react";

import m2 from "./assets/music/2.mpeg";
import m8 from "./assets/music/8.mpeg";
import m10 from "./assets/music/10.mpeg";
import m11 from "./assets/music/11.mpeg";
import { CheckIcon, CheckCircleIcon } from "@chakra-ui/icons";

const ALL_SONGS = [
  {
    id: "2",
    song: m2,
  },
  {
    id: "8",
    song: m8,
  },
  {
    id: "10",
    song: m10,
  },
  {
    id: "11",
    song: m11,
  },
];

export const Destinations = [
  {
    id: "1",
    name: "Kantaliya",
    left: 0,
    top: 20,
  },
  {
    id: "2",
    name: "Muha Chota",
    left: 140,
    top: 40,
  },
  {
    id: "3",
    name: "Badi Rawliya",
    left: 860,
    top: 0,
  },
  {
    id: "4",
    name: "Royat",
    left: 640,
    top: 60,
  },
  {
    id: "5",
    name: "Bidasar",
    left: 480,
    top: 10,
  },
  {
    id: "6",
    name: "Jaipur",
    left: "60%",
    top: 4,
  },
  {
    id: "7",
    name: "Ujjain",
    left: "70%",
    top: "80%",
  },
  {
    id: "8",
    name: "Chaapar",
    left: 300,
    top: 200,
  },
  {
    id: "9",
    name: "Laadnoo",
    left: 160,
    top: 12,
  },
  {
    id: "10",
    name: "Tamkor",
    left: 10,
    top: 300,
  },
  {
    id: "11",
    name: "SardarShahar",
    left: 660,
    top: 28,
  },
];

export const ALL_MUNI = [
  {
    id: "1",
    label: "Acharya Bhikshu",
    image: require("./assets/a1.jpeg"),
  },
  {
    id: "2",
    label: "Acharya Bharmal",
    image: require("./assets/a2.jpeg"),
  },
  {
    id: "3",
    label: "Acharya Raichand",
    image: require("./assets/a3.jpeg"),
  },
  {
    id: "4",
    label: "Acharya Jeetmal",
    image: require("./assets/a4.jpeg"),
  },
  {
    id: "5",
    label: "Acharya Magaraj",
    image: require("./assets/a5.jpeg"),
  },
  {
    id: "6",
    label: "Acharya Manaklal",
    image: require("./assets/a6.jpeg"),
  },
  {
    id: "7",
    label: "Acharya Dalchand",
    image: require("./assets/a7.jpeg"),
  },
  {
    id: "8",
    label: "Acharya Kaluram",
    image: require("./assets/a8.jpeg"),
  },
  {
    id: "9",
    label: "Acharya Tulsi",
    image: require("./assets/a9.jpeg"),
  },
  {
    id: "10",
    label: "Acharya Mahapragya",
    image: require("./assets/a10.jpeg"),
  },
  {
    id: "11",
    label: "Acharya Mahashraman",
    image: require("./assets/a11.jpeg"),
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedDestination, setSelectedDestination] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [selectedSong, setSelectedSong] = React.useState(null);

  const audio = new Audio(ALL_SONGS[0]?.song);

  console.log({ selectedImage, selectedSong, selectedDestination });

  React.useEffect(() => {
    setSelectedDestination(null);
    setSelectedImage(null);
  }, [isCorrect]);

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
    isOpen,
  } = useDisclosure({ defaultIsOpen: false });

  console.log("selectedImage", selectedImage);

  const onClickImage = (muni) => {
    if (selectedImage === muni.id) {
      setSelectedImage(null);
    } else setSelectedImage(muni?.id);
  };

  const onClickDestination = (dest) => {
    if (selectedDestination === dest.id) {
      setSelectedDestination(null);
    } else setSelectedDestination(dest?.id);
  };

  const enabledSubmitButton =
    !isEmpty(selectedImage) && !isEmpty(selectedDestination);
  return (
    <Box
      w="100%"
      h="100%"
      d="flex"
      flex={1}
      display="flex"
      paddingLeft={16}
      paddingRight={16}
      backgroundColor="#E1F8FF">
      {isVisible ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {isCorrect ? (
              <ModalHeader>
                <CheckCircleIcon w={4} h={4} color="green.500" mr={2} />
                Great! Your Answer is Correct.
              </ModalHeader>
            ) : (
              <ModalHeader>Sorry your answer is wrong!</ModalHeader>
            )}
            <ModalBody>
              <Text>Thanks for participating!</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
      <Box flexDirection={"column"} w="100%" h="100%">
        <Box
          w="100%"
          h={100}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Box>
            <Image
              objectFit="cover"
              src={require("./assets/logo.jpeg")}
              w={20}
              h={"100%"}
              mb={8}
              mt={8}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            ml={32}>
            <Text fontWeight={"600"} fontSize={22}>
              Connect The Correct
            </Text>
            <Image
              objectFit="cover"
              src={require("./assets/music.jpg")}
              w={200}
              h={10}
              mb={4}
            />
          </Box>
          <Box>
            <Button
              variant={"outline"}
              mr={4}
              onClick={() => {
                if (selectedSong?.audio.paused) {
                  selectedSong?.audio.play();
                } else selectedSong?.audio.pause();
              }}
              colorScheme="blue">
              Pause / Play
            </Button>
            <Button
              onClick={() => {
                selectedSong?.audio?.pause();
                var randNum = Math.floor(Math.random() * 4) + 1;
                console.log({ randNum });
                audio.setAttribute("src", ALL_SONGS[randNum - 1]?.song);
                audio.play();
                setSelectedSong({ id: ALL_SONGS[randNum - 1]?.id, audio });
              }}
              colorScheme="blue">
              Play Random Song
            </Button>
          </Box>
        </Box>
        <Box position={"relative"}>
          <Image
            objectFit="cover"
            src={require("./assets/map.jpeg")}
            w="100%"
            h="55vh"
            mb={4}
          />
          <Box
            position={"absolute"}
            left={0}
            right={0}
            top={0}
            bottom={0}
            backgroundColor={"rgba(0,0,0,0.5)"}>
            {map(Destinations, (destination) => {
              const isSelected = destination?.id === selectedDestination;
              return (
                <Box
                  position={"absolute"}
                  display={"flex"}
                  onClick={() => {
                    onClickDestination(destination);
                  }}
                  borderColor={"black"}
                  borderWidth={2}
                  justifyContent={"center"}
                  w={20}
                  h={20}
                  left={destination.left}
                  top={destination.top}
                  borderRadius={999}
                  backgroundColor={"#E5FFDE"}
                  alignItems={"center"}>
                  <Text fontSize={10} fontWeight={"600"}>
                    {destination?.name}
                  </Text>
                  {isSelected ? (
                    <Box
                      position={"absolute"}
                      left={0}
                      right={0}
                      top={0}
                      bottom={0}
                      backgroundColor={"rgba(0,0,0,0.6)"}
                      borderRadius={999}
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}>
                      <CheckIcon w={8} h={8} color="black" />
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          display={"flex"}
          flex={1}
          mb={4}>
          {map(ALL_MUNI, (muni) => {
            const isSelected = muni.id === selectedImage;
            return (
              <Box
                position={"relative"}
                onClick={() => {
                  onClickImage(muni);
                }}
                mr={4}
                w={"7%"}
                p={4}
                borderColor={"#e3e3e3"}
                borderWidth={1}
                borderRadius={16}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                backgroundColor={"white"}
                justifyContent={"flex-end"}>
                <Image
                  src={muni?.image}
                  borderRadius="full"
                  boxSize="80px"
                  mb={4}
                />
                <Text
                  h={12}
                  textAlign={"center"}
                  fontSize={14}
                  fontWeight={"600"}>
                  {muni?.label}
                </Text>
                {isSelected ? (
                  <Box
                    position={"absolute"}
                    left={0}
                    right={0}
                    top={0}
                    bottom={0}
                    backgroundColor={"rgba(0,0,0,0.6)"}
                    borderRadius={16}
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}>
                    <CheckIcon w={8} h={8} color="black" />
                  </Box>
                ) : null}
              </Box>
            );
          })}
        </Box>
        <Box display="flex" justifyContent={"center"}>
          <Button
            marginBottom={2}
            isDisabled={!enabledSubmitButton}
            alignSelf={"center"}
            onClick={() => {
              if (
                selectedDestination === selectedImage &&
                selectedSong.id === selectedImage
              ) {
                setIsCorrect(true);

                selectedSong?.audio?.pause();

                setSelectedImage(null);
                setSelectedDestination(null);
                setSelectedSong(null);
              } else {
                setIsCorrect(false);
                selectedSong?.audio?.pause();

                setSelectedImage(null);
                setSelectedDestination(null);
                setSelectedSong(null);
              }
              onOpen();
            }}
            colorScheme="blue">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

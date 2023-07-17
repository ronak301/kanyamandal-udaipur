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
import sample from "./assets/sample.mp3";
import { CheckIcon, CheckCircleIcon } from "@chakra-ui/icons";

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
    left: 360,
    top: 90,
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
    top: 200,
  },
  {
    id: "6",
    name: "Jaipur",
    left: "70%",
    top: 10,
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
    top: 260,
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
    left: 10,
    top: 40,
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
    id: "9",
    label: "Acharya Mahapragya",
    image: require("./assets/a10.jpeg"),
  },
  {
    id: "9",
    label: "Acharya Mahashraman",
    image: require("./assets/a11.jpeg"),
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedDestination, setSelectedDestination] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(false);

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

  const sampleSong = new Audio(sample);

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
      w="100vw"
      h="100vh"
      d="flex"
      flex={1}
      bg="#f3f3f3"
      display="flex"
      paddingLeft={32}
      backgroundColor="#E1F8FF"
      paddingRight={32}>
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
      <Box flexDirection={"column"}>
        <Box
          w="100%"
          h={"12%"}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Box></Box>
          <Box>
            <Text fontWeight={"600"} fontSize={22}>
              Connect The Correct
            </Text>
          </Box>
          <Box>
            <Button
              onClick={() => {
                sampleSong?.play();
              }}
              colorScheme="blue">
              Play Next Song
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
                      <CheckIcon w={8} h={8} color="green.500" />
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
                w={120}
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
                  boxSize="100px"
                  mb={4}
                />
                <Text
                  h={12}
                  textAlign={"center"}
                  fontSize={16}
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
                    <CheckIcon w={8} h={8} color="green.500" />
                  </Box>
                ) : null}
              </Box>
            );
          })}
        </Box>
        <Box display="flex" justifyContent={"center"}>
          <Button
            isDisabled={!enabledSubmitButton}
            alignSelf={"center"}
            onClick={() => {
              if (selectedDestination === selectedImage) {
                setIsCorrect(true);
              } else {
                setIsCorrect(false);
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

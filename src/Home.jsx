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

import m1 from "./assets/music/1.mpeg";
import m2 from "./assets/music/2.mpeg";
import m3 from "./assets/music/3.mpeg";
import m4 from "./assets/music/4.mpeg";
import m5 from "./assets/music/5.mpeg";
import m6 from "./assets/music/6.mpeg";
import m7 from "./assets/music/7.mpeg";
import m8 from "./assets/music/8.mpeg";
import m9 from "./assets/music/9.mpeg";
import m10 from "./assets/music/10.mpeg";
import m11 from "./assets/music/11.mpeg";

import m1_1 from "./assets/music/1_1.mpeg";
import m2_1 from "./assets/music/2_1.mpeg";
import m8_1 from "./assets/music/8_1.mpeg";

import { CheckCircleIcon } from "@chakra-ui/icons";

const ALL_SONGS = [
  {
    id: "1",
    song: m1,
  },
  {
    id: "2",
    song: m2,
  },
  {
    id: "3",
    song: m3,
  },
  {
    id: "4",
    song: m4,
  },
  {
    id: "5",
    song: m5,
  },
  {
    id: "6",
    song: m6,
  },
  {
    id: "7",
    song: m7,
  },
  {
    id: "8",
    song: m8,
  },
  {
    id: "9",
    song: m9,
  },
  {
    id: "10",
    song: m10,
  },
  {
    id: "11",
    song: m11,
  },
  {
    id: "1",
    song: m1_1,
  },
  {
    id: "2",
    song: m2_1,
  },
  {
    id: "8",
    song: m8_1,
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
    top: 8,
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
    label: "Acharya Jeetmal", // jayacharya ji
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
  const timerRef = React.useRef(null);

  // The state for our timer
  const [timer, setTimer] = React.useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:15");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (timerRef.current) clearInterval(timerRef.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    timerRef.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 15);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  const startTimerForSong = () => {
    clearTimer(getDeadTime());
  };

  const audio = new Audio(ALL_SONGS[0]?.song);

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
          h={140}
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
            <Text fontWeight={"600"} fontSize={22} mt={8}>
              Terapanth Kanyamandal Udaipur Presents
            </Text>
            <Text fontWeight={"600"} fontSize={22}>
              Connect The Correct
            </Text>
            <Image
              objectFit="cover"
              src={require("./assets/music.jpg")}
              w={200}
              h={10}
              mt={0}
              mb={4}
            />
          </Box>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            {!selectedSong ? null : <Text mr={8}>{timer}</Text>}
            <Button
              onClick={() => {
                selectedSong?.audio?.pause();
                var randNum = Math.floor(Math.random() * 14) + 1;
                console.log({ randNum });
                audio.setAttribute("src", ALL_SONGS[randNum - 1]?.song);
                audio.play();
                startTimerForSong();
                setTimeout(() => {
                  audio?.pause();
                }, 15000);
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
          <Box position={"absolute"} left={0} right={0} top={0} bottom={0}>
            {map(Destinations, (destination) => {
              const isSelected = destination?.id === selectedDestination;
              return (
                <Box
                  position={"absolute"}
                  display={"flex"}
                  onClick={() => {
                    onClickDestination(destination);
                  }}
                  justifyContent={"center"}
                  w={20}
                  h={20}
                  left={destination.left}
                  top={destination.top}
                  alignItems={"center"}>
                  <Text fontSize={18} fontWeight="800">
                    {destination?.name}
                  </Text>
                  {isSelected ? (
                    <Box
                      position={"absolute"}
                      left={0}
                      right={0}
                      top={0}
                      bottom={0}
                      backgroundColor={"rgba(0,0,0,0.3)"}
                      borderRadius={999}
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}></Box>
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
                <Image src={muni?.image} borderRadius="full" boxSize="80px" />
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
                    justifyContent={"center"}></Box>
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

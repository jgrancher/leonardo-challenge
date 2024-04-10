import {
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import type { Anime } from "@/lib/types";
import { pad } from "@/lib/utils";

interface AnimeModalProps {
  anime: Anime;
  isOpen: boolean;
  onClose: () => void;
}

export const AnimeModal = ({ anime, isOpen, onClose }: AnimeModalProps) => {
  const { title, description, episodes, startDate, endDate, status } = anime;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      size={{ base: "xs", lg: "2xl" }}
    >
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent>
        <ModalHeader padding={{ base: 4, lg: 8 }}>
          <VStack>
            <Text as="h1" fontSize="xl" fontWeight="bold">
              {title.english}
            </Text>
            <Text fontSize="xs">🇯🇵 {title.romaji}</Text>
          </VStack>
        </ModalHeader>
        <ModalCloseButton top={{ base: 4, lg: 8 }} right={{ base: 4, lg: 8 }} />
        <ModalBody paddingX={{ base: 4, lg: 8 }} paddingY={0}>
          <VStack alignItems="start" gap={4}>
            <List>
              {status === "RELEASING" ? (
                <ListItem fontSize="xs">Ongoing release</ListItem>
              ) : (
                <>
                  <ListItem fontSize="xs">
                    {episodes} episode{episodes > 1 ? "s" : ""}
                  </ListItem>
                  <ListItem fontSize="xs">
                    {pad(startDate.day)}/{pad(startDate.month)}/{startDate.year}{" "}
                    - {pad(endDate.day)}/{pad(endDate.month)}/{endDate.year}
                  </ListItem>
                </>
              )}
            </List>
            <Text dangerouslySetInnerHTML={{ __html: description }} />
          </VStack>
        </ModalBody>
        <ModalFooter padding={{ base: 4, lg: 8 }}>
          <Button colorScheme="purple" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

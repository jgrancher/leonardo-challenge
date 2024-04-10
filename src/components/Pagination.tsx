import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  disabled?: boolean;
}

export const Pagination = ({ currentPage, disabled }: PaginationProps) => {
  return (
    <Flex
      as="aside"
      alignItems="center"
      justifyContent="center"
      gap={{ base: 2, lg: 4 }}
      paddingBottom={{ base: 4, lg: 8 }}
    >
      <Button
        as={Link}
        colorScheme="purple"
        href={`/?page=${Math.max(1, currentPage - 1)}`}
        isDisabled={disabled || currentPage <= 1}
        leftIcon={<ArrowBackIcon />}
      >
        Previous
      </Button>
      <Button
        as={Link}
        colorScheme="purple"
        href={`/?page=${currentPage + 1}`}
        isDisabled={disabled}
        rightIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    </Flex>
  );
};

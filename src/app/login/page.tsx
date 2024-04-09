"use client";

import { useFormState } from "react-dom";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { SubmitButton } from "@/components/SubmitButton";
import { authenticate } from "./actions";

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <VStack
        alignItems="flex-start"
        padding={{ base: 4, lg: 8 }}
        spacing={{ base: 4, lg: 8 }}
      >
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Your username</FormLabel>
          <Input name="username" placeholder="Username" />
          <FormHelperText>e.g. &quot;superdev&quot;</FormHelperText>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Your job title</FormLabel>
          <Input name="title" placeholder="Job title" />
          <FormHelperText>e.g. &quot;Front End Developer&quot;</FormHelperText>
        </FormControl>
        {/* In theory, I'd put this here. But right now this is not used (never erroring)...  */}
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        <SubmitButton />
      </VStack>
    </form>
  );
}

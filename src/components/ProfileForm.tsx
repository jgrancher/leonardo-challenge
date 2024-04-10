"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  type ToastId,
  VStack,
  useToast,
} from "@chakra-ui/react";

import { authenticate } from "@/app/login/actions";
import { SubmitButton } from "@/components/SubmitButton";

interface ProfileFormProps {
  profile?: { username: string; title: string };
  buttonLabel?: string;
  successMessage?: string;
}

export const ProfileForm = ({
  profile,
  buttonLabel,
  successMessage,
}: ProfileFormProps) => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();
  const router = useRouter();
  const [error, dispatch] = useFormState(authenticate, undefined);

  // On success (as defined in the `authenticate` action), redirect to the homepage.
  if (error === false && !toastIdRef.current) {
    toastIdRef.current = toast({
      title: successMessage,
      status: "success",
      duration: 4000,
    });
    router.push("/");
    return null;
  }

  return (
    <form action={dispatch}>
      <VStack
        alignItems="flex-start"
        padding={{ base: 4, lg: 8 }}
        spacing={{ base: 4, lg: 8 }}
      >
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Your username</FormLabel>
          <Input
            name="username"
            placeholder="Username"
            defaultValue={profile?.username}
          />
          <FormHelperText>e.g. &quot;sasuke_uchiha&quot;</FormHelperText>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Your job title</FormLabel>
          <Input
            name="title"
            placeholder="Job title"
            defaultValue={profile?.title}
          />
          <FormHelperText>e.g. &quot;Rogue Ninja&quot;</FormHelperText>
        </FormControl>
        {/* In theory, I'd put this here. But right now this is not used (never erroring)...  */}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <SubmitButton>{buttonLabel}</SubmitButton>
      </VStack>
    </form>
  );
};

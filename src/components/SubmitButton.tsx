"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  children?: React.ReactNode;
}

export function SubmitButton({ children = "Login" }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button
      colorScheme="purple"
      aria-disabled={pending}
      isLoading={pending}
      loadingText="Loading"
      onClick={handleClick}
      type="submit"
    >
      {children}
    </Button>
  );
}

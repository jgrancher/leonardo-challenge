import { cookies } from "next/headers";
import { Flex, Text } from "@chakra-ui/react";

import { ProfileForm } from "@/components/ProfileForm";
import { COOKIE_KEY } from "@/lib/constants";

export default function ProfilePage() {
  // Read the profile from the cookies (because we're in a RSC!)
  const profileCookie = cookies().get(COOKIE_KEY)?.value as string | undefined;
  const profile: { username: string; title: string } = profileCookie
    ? JSON.parse(profileCookie)
    : { username: "dear user", title: "N/A" };

  return (
    <>
      <Flex
        as="header"
        flexDirection="column"
        gap={2}
        paddingX={{ base: 4, lg: 8 }}
        paddingTop={{ base: 4, lg: 8 }}
      >
        <Text as="h1" fontWeight="bold">
          Welcome, {profile.username} ({profile.title}).
        </Text>
        <Text fontSize="xs">
          If you want to change your profile information, please use the form
          below.
        </Text>
      </Flex>
      <ProfileForm
        profile={profile}
        buttonLabel="Update profile"
        successMessage="Successfully updated your profile"
      />
    </>
  );
}

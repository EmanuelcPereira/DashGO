import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Emanuel Pereira</Text>
          <Text color="gray.300" fontSize="small">
            emanuelcdpr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Emanuel Pereira"
        src="https://github.com/EmanuelcPereira.png"
      />
    </Flex>
  )
}
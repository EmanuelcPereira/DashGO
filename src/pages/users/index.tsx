import { Box, Flex, Heading, Icon, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from '../../components/Sidebar/index';

export default function userList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
            </Button>
            </Link>
          </Flex>

          <Table colorscheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Emanuel Pereira</Text>
                    <Text fontSize="sm" color="gray.300">emanuelcdpr@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de Abril, 2021</Td>}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

const Users = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>#</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Username</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th scope="row">1</Th>
        <Td>Mark</Td>
        <Td>Otto</Td>
        <Td>@mdo</Td>
      </Tr>
      <Tr>
        <Th scope="row">2</Th>
        <Td>Jacob</Td>
        <Td>Thornton</Td>
        <Td>@fat</Td>
      </Tr>
      <Tr>
        <Th scope="row">3</Th>
        <Td>Larry</Td>
        <Td>the Bird</Td>
        <Td>@twitter</Td>
      </Tr>
    </Tbody>
  </Table>
);

export default Users;

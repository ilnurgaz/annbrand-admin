// components/Orders/OrdersList.tsx
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
  DeleteButton,
} from 'react-admin'

export const OrdersList = () => {
  const handleRowClick = () => 'show'

  return (
    <List>
    <Datagrid rowClick={handleRowClick}>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="status" />
      <DateField source="createdAt" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
  )
}

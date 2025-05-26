import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
} from 'react-admin'

const OrdersEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="email" disabled />
      <SelectInput
        source="status"
        choices={[
          { id: 'new', name: 'New' },
          { id: 'processing', name: 'Processing' },
          { id: 'canceled', name: 'Canceled' },
          { id: 'completed', name: 'Completed' },
        ]}
      />
    </SimpleForm>
  </Edit>
)

export default OrdersEdit

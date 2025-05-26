// components/Orders/OrdersShow.tsx
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    ArrayField,
    SimpleList,
    TopToolbar,
    EditButton,
    DeleteButton,
  } from 'react-admin'
  
  const OrdersShow = () => (
    <Show
      actions={
        <TopToolbar>
          <EditButton />
          <DeleteButton />
        </TopToolbar>
      }
    >
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="status" />
        <TextField source="address" />
        <DateField source="createdAt" />
        <ArrayField source="products">
          <SimpleList
            primaryText={(record) => `Product Name: ${record.productName}`}
            secondaryText={(record) =>
              `Qty: ${record.quantity}, Size: ${record.size}, Price: ${record.price}`
            }
          />
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  )
  
  export default OrdersShow
  
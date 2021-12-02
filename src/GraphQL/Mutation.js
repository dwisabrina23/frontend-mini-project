import {gql} from "@apollo/client"

//insert
export const insertOrder = gql `
mutation createOrder($email: String, $address: String, $nama: String, $notes: String, $phone: String = "", $service_id: Int, $user_id: Int) {
    insert_order(objects: {address: $address, email: $email, nama: $nama, notes: $notes, phone: $phone, service_id: $service_id, user_id: $user_id}) {
      returning {
        address
        created_at
        email
        id
        nama
        notes
        phone
        service {
          title
        }
      }
    }
  }
`
//automate insert to request status


//admin Update Delete
//accept order -> $id order
export const acceptOrder = gql`
mutation AcceptOrder($id: Int) {
    update_order(where: {id: {_eq: $id}}, _set: {status: "accepted"}) {
      affected_rows
    }
  }
`

//cancel order -> $id (admin, user)
export const cancelOrder = gql`
mutation CancelOrder($id: Int) {
    update_order(where: {id: {_eq: $id}}, _set: {status: "canceled"}) {
      affected_rows
    }
  }
`

//delete order
export const deleteOrder = gql`
mutation DeleteOrder($id: Int) {
    delete_order(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`






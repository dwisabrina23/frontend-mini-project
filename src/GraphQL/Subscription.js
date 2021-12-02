import {gql} from '@apollo/client';

export const subsOrderUser = gql`
subscription SubscribeOrder($id: Int) {
    order(where: {user_id: {_eq: $id}}, order_by: {created_at: desc}) {
      service {
        title
      }
      email
      nama
      phone
      status
      created_at
      address
    }
  }
  `
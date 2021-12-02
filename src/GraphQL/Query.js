import {gql} from '@apollo/client';

export const getPackageData = gql`
query GetPackage {
  service(where: {type: {_eq: "package"}}) {
    id
    photo
    price
    title
    description
  }
}
`

export const getByGenreData = gql`
query GetByGenre {
  service(where: {type: {_eq: "genre"}}) {
    id
    photo
    price
    title
    description
  }
}`

//admin
export const getRequestOrder = gql`
query GetRequest {
  order(where: {status: {_eq: "request"}}) {
    id
    nama
    notes
    phone
    email
    created_at
    address
    status
    user_id
    service {
      title
    }
  }
}
`
export const getAcceptedOrder = gql`
query GetAccOrder {
  order(where: {status: {_eq: "accepted"}}) {
    address
    created_at
    email
    id
    nama
    notes
    phone
    status
    service {
      title
    }
  }
}
`

export const getCanceledOrder = gql`
query getCancelOrder {
  order(where: {status: {_eq: "canceled"}}) {
    address
    created_at
    email
    id
    nama
    notes
    phone
    status
    service {
      title
    }
  }
}
`

export const getTestimoni = gql`
query GetTestimoni {
  testimoni(limit: 10) {
    created_at
    message
    id
    photo
    project
    user_testimoni {
      nama
    }
  }
}`


// export const getRequestProject = gql`
// query getRequestProject {
//     project(where: {status: {_eq: false}}) {
//       id
//       status
//       updated_at
//       order_id
//       user_id
//       order {
//         address
//         service_id
//       }
//     }
//   }
// `
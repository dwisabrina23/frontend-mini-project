import {gql} from '@apollo/client';

export const getRequestProject = gql`
query getRequestProject {
    project(where: {status: {_eq: false}}) {
      id
      status
      updated_at
      order_id
      user_id
      order {
        address
        service_id
      }
    }
  }
`
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
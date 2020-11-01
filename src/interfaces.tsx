export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface IPosts {
  post: string
  body: string
  userId: number
  id: number
  title: string
}

export interface IComments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IUseParams {
  id: string
}

export interface PropsId {
  id: number
}

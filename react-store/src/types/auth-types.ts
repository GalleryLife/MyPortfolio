export interface IAuthLogInState {
  name: string
  phone: number
  email: string
  password: string | number | symbol
}

export interface IAuthLogOutState {
  email: string
  password: string | number | symbol
}

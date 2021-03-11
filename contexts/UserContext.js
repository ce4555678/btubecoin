import { createContext } from 'react'

const UserContext = createContext({auth: false, user: ""})

export default UserContext
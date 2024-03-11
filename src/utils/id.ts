import { nanoid, customAlphabet } from 'nanoid'

export const createGameID = customAlphabet(
  '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  6
)

export const createUserID = () => nanoid()
export const createNominationID = () => nanoid(8)

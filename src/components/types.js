export type Board = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
}

export type Note = {
  message: string,
  boardId: number,
  createdAt: string,
  updatedAt: string,
  id: number,
  done: boolean,
}

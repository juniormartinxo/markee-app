export type Status = 'editing' | 'saving' | 'saved'

export type FileList = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonsFilesStyled,
} from './list-files-styled'

type fileListType = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

const filesList: fileListType[] = [
  {
    id: '1',
    name: 'README.md',
    content: '/',
    active: true,
    status: 'editing',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '/',
    active: false,
    status: 'editing',
  },
  {
    id: '3',
    name: 'LICENSE.md',
    content: '/',
    active: false,
    status: 'editing',
  },
  {
    id: '4',
    name: 'Links.md',
    content: '/',
    active: false,
    status: 'editing',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: '/',
    active: false,
    status: 'editing',
  },
]

function ListFiles () {
  return (
    <ListFilesStyled>
      {filesList.map((file) => (
        <ItemFiles
          key={file.id}
          fileId={file.id}
          fileLink={file.content}
          fileName={file.name}
        />
      ))}
    </ListFilesStyled>
  )
}

type ItemFilesProps = {
  fileId: string
  fileLink: string
  fileName: string
}

function ItemFiles ({ fileId, fileLink, fileName }: ItemFilesProps) {
  return (
    <ItemFilesStyled key={fileId}>
      <LinkFiles fileLink={fileLink} fileName={fileName} />
      <ButtonsFilesStyled>x</ButtonsFilesStyled>
    </ItemFilesStyled>
  )
}

type LinkFilesProps = {
  fileLink: string
  fileName: string
}
function LinkFiles ({ fileLink, fileName }: LinkFilesProps) {
  return (
    <LinkFilesStyled href={fileLink}>
      <IcoFile />
      {fileName}
    </LinkFilesStyled>
  )
}

function IcoFile () {
  return (
    <span>
      <img src="../../public/file-ico.png" alt="" />
    </span>
  )
}

export { ListFiles }

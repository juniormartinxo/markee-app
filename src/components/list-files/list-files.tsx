import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonsFilesStyled,
} from './list-files-styled'
import { IcoImage } from 'components/ico-image'

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
    status: 'saved',
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
    status: 'saved',
  },
  {
    id: '4',
    name: 'Links.md',
    content: '/',
    active: false,
    status: 'saved',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: '/',
    active: false,
    status: 'saving',
  },
]

function ListFiles() {
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

function ItemFiles({ fileId, fileLink, fileName }: ItemFilesProps) {
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
function LinkFiles({ fileLink, fileName }: LinkFilesProps) {
  return (
    <LinkFilesStyled href={fileLink}>
      <IcoImage pathImage="ico-file.png" />
      {fileName}
    </LinkFilesStyled>
  )
}

export { ListFiles }

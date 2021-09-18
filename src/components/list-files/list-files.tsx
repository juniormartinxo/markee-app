import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonsFilesStyled,
  TextLinkStyled,
} from './list-files-styled'
import { FileList } from 'resources/files/types'
import * as Icon from 'ui/icons'

const filesList: FileList[] = [
  {
    id: '1',
    name: 'README.md',
    content: '/',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '/',
    active: true,
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
    status: 'saved',
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
          fileActive={file.active}
          fileStatus={file.status}
        />
      ))}
    </ListFilesStyled>
  )
}
export type ItemFilesProps = {
  fileId: string
  fileLink: string
  fileName: string
  fileActive: boolean
  fileStatus: string
}

function ItemFiles({
  fileId,
  fileLink,
  fileName,
  fileActive,
  fileStatus,
}: ItemFilesProps) {
  function getIco(fileStatus: string) {
    if (fileStatus === 'editing' && fileActive) {
      return '●'
    }
    if (fileStatus === 'saving' && fileActive) {
      return '⟳'
    }
    if (fileStatus === 'saved' && fileActive) {
      return '✓'
    }
    if (!fileActive) {
      return 'x'
    }
  }

  return (
    <ItemFilesStyled
      key={fileId}
      fileStatus={fileStatus}
      fileActive={fileActive}
    >
      <LinkFiles
        fileLink={fileLink}
        fileName={fileName}
        fileActive={fileActive}
      />
      <ButtonsFilesStyled>{getIco(fileStatus)}</ButtonsFilesStyled>
    </ItemFilesStyled>
  )
}

export type LinkFilesProps = {
  fileLink: string
  fileName: string
  fileActive: boolean
}

function LinkFiles({ fileLink, fileName, fileActive }: LinkFilesProps) {
  return (
    <LinkFilesStyled href={fileLink}>
      {!fileActive ? <Icon.File /> : <Icon.FileActive />}
      <TextLinkStyled>{fileName}</TextLinkStyled>
    </LinkFilesStyled>
  )
}

export { ListFiles }

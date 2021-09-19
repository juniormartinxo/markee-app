import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonFileStyled,
  TextLinkStyled,
} from './list-files-styled'

import * as LOCAL_FILES from 'common/Files'

import { File, Status } from 'resources/files/types'
import * as Icon from 'ui/icons'
import { StatusIconStyled } from 'components/status-icon/status-icon-styled'

type ListFilesProps = {
  files: File[]
}

function ListFiles({ files }: ListFilesProps) {
  return (
    <ListFilesStyled>
      {files.map((file) => (
        <ItemFiles
          key={file.id}
          fileId={file.id}
          fileLink={file.content}
          fileName={file.name}
          fileActive={file.active}
          fileStatus={file.status}
          files={files}
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
  fileStatus: Status
  files: File[]
}

function ItemFiles({
  fileId,
  fileLink,
  fileName,
  fileActive,
  fileStatus,
  files,
}: ItemFilesProps) {
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
      {fileActive && <StatusIconStyled status={fileStatus} />}

      {!fileActive && (
        <ButtonFileStyled
          title={`Remover o arquivo ${fileName}`}
          onClick={(e) => {
            e.preventDefault()
            LOCAL_FILES.setFileList(files)
          }}
        >
          <Icon.FileRemove />
        </ButtonFileStyled>
      )}
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

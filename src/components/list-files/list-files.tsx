import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonFileStyled,
  TextLinkStyled,
} from './list-files-styled'

import * as FileActions from 'common/file-actions'

import { File, Status } from 'resources/files/types'
import * as Icon from 'ui/icons'
import { StatusIconStyled } from 'components/status-icon/status-icon-styled'

type ListFilesProps = {
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
}

function ListFiles({ files, setFiles, setCurrentFileId }: ListFilesProps) {
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
          setFiles={setFiles}
          setCurrentFileId={setCurrentFileId}
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
  setFiles: Function
  setCurrentFileId: Function
}

function ItemFiles({
  fileId,
  fileLink,
  fileName,
  fileActive,
  fileStatus,
  files,
  setFiles,
  setCurrentFileId,
}: ItemFilesProps) {
  const removeFile = (fileId: string) => {
    const filesNew = files.filter((file) => file.id !== fileId)

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  return (
    <ItemFilesStyled
      key={fileId}
      fileStatus={fileStatus}
      fileActive={fileActive}
    >
      <LinkFiles
        fileId={fileId}
        fileLink={fileLink}
        fileName={fileName}
        fileActive={fileActive}
        setCurrentFileId={setCurrentFileId}
      />
      {fileActive && <StatusIconStyled status={fileStatus} />}

      {!fileActive && (
        <ButtonFileStyled
          title={`Remover o arquivo ${fileName}`}
          onClick={(e) => {
            e.preventDefault()
            removeFile(fileId)
          }}
        >
          <Icon.FileRemove />
        </ButtonFileStyled>
      )}
    </ItemFilesStyled>
  )
}

export type LinkFilesProps = {
  fileId: string
  fileLink: string
  fileName: string
  fileActive: boolean
  setCurrentFileId: Function
}

function LinkFiles({
  fileId,
  fileLink,
  fileName,
  fileActive,
  setCurrentFileId,
}: LinkFilesProps) {
  return (
    <LinkFilesStyled
      href={fileLink}
      onClick={(e) => {
        e.preventDefault()
        setCurrentFileId(fileId)
      }}
    >
      {!fileActive ? <Icon.File /> : <Icon.FileActive />}
      <TextLinkStyled>{fileName}</TextLinkStyled>
    </LinkFilesStyled>
  )
}

export { ListFiles }

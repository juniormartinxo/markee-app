import { MouseEvent, RefObject } from 'react'
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
import { useFile } from 'hooks/useFile'

type ListFilesProps = {
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
  setMkdText: Function
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
}

function ListFiles({
  files,
  setFiles,
  setCurrentFileId,
  setMkdText,
  refInputFileName,
  refEditorTextArea,
}: ListFilesProps) {
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
          fileContent={file.content}
          files={files}
          setFiles={setFiles}
          setCurrentFileId={setCurrentFileId}
          setMkdText={setMkdText}
          refInputFileName={refInputFileName}
          refEditorTextArea={refEditorTextArea}
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
  fileContent: string
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
  setMkdText: Function
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
}

function ItemFiles({
  fileId,
  fileName,
  fileActive,
  fileStatus,
  fileContent,
  files,
  setFiles,
  setCurrentFileId,
  setMkdText,
  refInputFileName,
  refEditorTextArea,
}: ItemFilesProps) {
  const { removeFile } = useFile()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setCurrentFileId(fileId)

    const filesNew = files.map((file) => {
      file.active = file.id === fileId
      file.status = file.id === fileId ? 'editing' : 'saved'

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)

    if (refInputFileName.current) {
      refInputFileName.current.value = fileName
      refInputFileName.current.focus()
    }

    if (refEditorTextArea.current) {
      refEditorTextArea.current.value = fileContent

      setMkdText(fileContent)
    }
  }

  return (
    <ItemFilesStyled
      key={fileId}
      fileStatus={fileStatus}
      fileActive={fileActive}
    >
      <LinkFilesStyled
        href={`/file/${fileId}`}
        onClick={(e) => {
          handleClick(e)
        }}
      >
        {!fileActive ? <Icon.File /> : <Icon.FileActive />}
        <TextLinkStyled>{fileName}</TextLinkStyled>
      </LinkFilesStyled>
      {fileActive && <StatusIconStyled status={fileStatus} />}

      {!fileActive && (
        <ButtonFileStyled
          title={`Remover o arquivo ${fileName}`}
          onClick={(e) => {
            e.preventDefault()
            removeFile({ files, fileId, setFiles })
          }}
        >
          <Icon.FileRemove />
        </ButtonFileStyled>
      )}
    </ItemFilesStyled>
  )
}

export { ListFiles }

import {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonsFilesStyled,
} from './list-files-styled'

function ListFiles() {
  return (
    <ListFilesStyled>
      <ItemFiles fileId="0" fileLink="/" fileName="README.md" />
      <ItemFiles fileId="1" fileLink="/" fileName="CONTRIBUTING.md" />
      <ItemFiles fileId="2" fileLink="/" fileName="LICENSE.md" />
      <ItemFiles fileId="3" fileLink="/" fileName="Links.md" />
      <ItemFiles fileId="4" fileLink="/" fileName="roadmap.md" />
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
      <IcoFile />
      {fileName}
    </LinkFilesStyled>
  )
}

function IcoFile() {
  return (
    <span>
      <img src="../../public/file-ico.png" alt="" />
    </span>
  )
}

export { ListFiles }

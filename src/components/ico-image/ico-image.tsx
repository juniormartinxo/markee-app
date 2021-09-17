import IcoImageStyled from './ico-image-styled'

type IcoImageProps = {
  pathImage: string
}

function IcoImage({ pathImage }: IcoImageProps) {
  return <IcoImageStyled src={pathImage} />
}

export { IcoImage }

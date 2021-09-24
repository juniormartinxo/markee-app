import { Status } from 'resources/files/types'
import { Loading, Edit } from './status-icon-styled'
import * as icon from 'ui/icons'

export type StatusIconProps = {
  status: Status
  className?: string
}

export function StatusIcon({ status = 'saved', className }: StatusIconProps) {
  const Comp = {
    saving: Loading,
    saved: icon.Check,
    editing: Edit,
  }[status]

  return <Comp className={className} />
}

import {
  UserOutlined,
  UploadOutlined,
  CloudSyncOutlined,
  SyncOutlined,
  DeleteOutlined
} from '@ant-design/icons'

interface iconType {
  [key: string]: any | string
}
interface props {
  iconName: string
}
const icons: iconType = {
  userOutlined: UserOutlined,
  uploadOutlined: UploadOutlined,
  cloudSyncOutlined: CloudSyncOutlined,
  syncOutlined: SyncOutlined,
  deleteOutlined: DeleteOutlined
}

const getIcons = ({ iconName }: props) => {
  const IconElement = icons[iconName]
  return IconElement ? <IconElement /> : ''
}

export default getIcons
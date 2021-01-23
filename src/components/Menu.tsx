import { Menu } from 'antd'
import getIcons from './Icons'


interface menuProps {
  menuConfig: { key: string, icon: string, name: string }[],
}

const MenuComponent = ({ menuConfig }: menuProps) => {
  return (
    <Menu theme='dark' defaultSelectedKeys={[menuConfig[0].key]}>
      {
        menuConfig.map((config) => {
          const icon: any = getIcons({ iconName: config.icon })
          return (
            <Menu.Item key={config.key} icon={icon}>{config.name}</Menu.Item>
          )
        })
      }
    </Menu>
  )
}

export default MenuComponent
import { Menu, Icon } from 'antd'
import Link from 'umi/link'

const Header = ({ location }) => {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={['/']}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="user" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/umi">
        <Link to="/umi"><Icon type="code" />Umi</Link>
      </Menu.Item>
      <Menu.Item key="/dva">
        <Link to="/dva"><Icon type="code" />Dva</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/404"><Icon type="frown" />404</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Header
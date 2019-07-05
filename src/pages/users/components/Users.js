import { connect } from 'dva'
import { Table, Button } from 'antd'
import usersStyle from './Users.css'
const Users = ({ dispatch, list: dataSource, total, page, loading }) => {
  console.log('dataSource', dataSource)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: text => <a>{ text }</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'center',
      key: 'email'
    },
    {
      title: 'Website',
      dataIndex: 'website',
      align: 'center',
      key: 'website'
    },
    {
      title: 'Operation',
      key: 'operation',
      align: 'center',
      render: (text, record) => (
        <span>
          <a>Edit</a>
          <a>Delete</a>
        </span>
      )
    }
  ]

  return (
    <div className={usersStyle.wrapper}>
      <div className={usersStyle.create}>
        <Button type="primary">Create User</Button>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        rowKey={record => record.id}
      >
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state)
  const { list, total, page } = state.users
  return { list, total, page }
}

export default connect(mapStateToProps)(Users)
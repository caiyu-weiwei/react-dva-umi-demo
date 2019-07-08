import { connect } from 'dva'
import { Table, Divider, Button, Popconfirm } from 'antd'
import usersStyle from './Users.css'
import UserModal from './UserModal'
const Users = ({ dispatch, list: dataSource, total, page, loading }) => {
  console.log('dataSource', dataSource)
  const handleEdit = () => {}

  const handleConfirm = (id) => {
    console.log('handleConfirm', id)
  }

  const handleCancel = () => {}

  const handleCreate = values => {
    dispatch({
      type: 'users/create',
      payload: values
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: text => <a href="#">{ text }</a>
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
          <Divider type="vertical" />
          <Popconfirm
            title="是否确认删除该用户?"
            onConfirm={handleConfirm(record)}
            onCancel={handleCancel}
            okText="确认"
            cancelText="取消"
          >
            <a>Delete</a>
          </Popconfirm>
        </span>
      )
    }
  ]

  return (
    <div className={usersStyle.wrapper}>
      <div className={usersStyle.create}>
        <UserModal onOk ={handleCreate}>
          <Button type="primary">Create User</Button>
        </UserModal>
      </div>
      <Table
        bordered
        loading={loading}
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
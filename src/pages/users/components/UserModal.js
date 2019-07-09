import { Component } from 'react'
import { Modal, Form, Input } from 'antd'

class UserModal extends Component{
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  handleShowModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    e.preventDefault()
    const { onOk } = this.props
    this.props.form.validateFieldsAndScroll((errors, values) => {
      console.log('validateFieldsAndScroll errors', errors)
      if (!errors) {
        console.log('validateFieldsAndScroll values', values)
        onOk(values)
        this.handleCancel()
      }
    })
    // this.setState({
    //   visible: false
    // })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { children } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 }
    }
    const { name, email, website } = this.props.record

    return (
      <span>
        <span onClick={this.handleShowModal}>
          { children }
        </span>
        <Modal
          title="User Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            layout="horizontal"
          >
            <Form.Item
              {...formItemLayout}
              label="Name"
            >
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请输入名称',
                  },
                ],
                initialValue: name
              })(<Input placeholder="请输入名称" />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Email"
            >
              {getFieldDecorator('useremail', {
                rules: [
                  {
                    type: 'email',
                    message: '请输入正确的邮箱地址!',
                  },
                  {
                    required: true,
                    message: '请输入邮箱地址',
                  }
                ],
                initialValue: email
              })(<Input placeholder="请输入邮箱地址" />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Website"
            >
              {getFieldDecorator('userwebsite', {
                rules: [
                  {
                    required: true,
                    message: '请输入网址',
                  }
                ],
                initialValue: website
              })(<Input placeholder="请输入网址" />)}
            </Form.Item>
          </Form>
        </Modal>
      </span>
    )
  }
}

export default Form.create()(UserModal)
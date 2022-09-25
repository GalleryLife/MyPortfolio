import React from 'react'
import { Modal, Input, Select, Form, Button, InputNumber } from 'antd'
import { useAppSelector } from '../../hooks/hooks'

const { Option } = Select

const ModalItem = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setValuesExpenses
}: any) => {
  const { balance } = useAppSelector(({ balanceSlice }) => balanceSlice)

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
    setValuesExpenses(values)
    handleOk()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Modal
        title='Basic Modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name='expensesForm'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='products'
            rules={[
              {
                required: true,
                message: 'Please select category'
              }
            ]}
          >
            <Select style={{ width: 250 }} onChange={handleChange}>
              <Option value='Products'>Products</Option>
              <Option value='Transport'>Transport</Option>
              <Option value='Entertainment'>Entertainment</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='cost'
            rules={[
              {
                type: 'number',
                required: true,
                message: 'Please enter your expenses smallest your balance',
                max: balance
              }
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{
            offset: 8,
            span: 16
          }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ModalItem

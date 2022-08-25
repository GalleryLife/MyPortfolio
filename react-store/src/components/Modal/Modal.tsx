import React from 'react';
import {Button, Checkbox, Form, Input, Select} from 'antd';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import {toggleModal} from '../../features/purchaseSlice';
import {Modal} from 'antd';
import FormItemLabel from "antd/es/form/FormItemLabel";

const PurchaseModal: React.FC = () => {
  const {isVisible} = useTypedSelector(({purchaseModal}) => purchaseModal)
  const dispatch = useAppDispatch()
  const handleOnCancel = () => dispatch(toggleModal())
  const onFinish = (values: string) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const {Option} = Select

  return (
    <Modal
      title='Purchase Modal'
      visible={isVisible}
      onCancel={handleOnCancel}
      footer={null}
    >
      <Form
        name='purchase'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Firstname'
          name='firstname'
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label='Lastname'
          name='lastname'
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label='Phone'
          name='phone'
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input placeholder='+xxx xx xxx xx xx'/>
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item label='Address'>
          <Input.Group compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{required: true, message: 'Province is required'}]}
            >
              <Select placeholder='Select province'>
                <Option value='Kyiv'>Kyiv</Option>
                <Option value='Lviv'>Lviv</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[{required: true, message: 'Street is required'}]}
            >
              <Input style={{width: '50%'}} placeholder='Input street'/>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label='Card'
          name='card'
          rules={[
            {
              required: true,
              message: 'Please input your card!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}


export default PurchaseModal;

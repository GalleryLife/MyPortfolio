import React from 'react';
import styles from './Filter.module.scss';
import {Button, Checkbox, Col, Form, Input, Slider} from 'antd';
import type {CheckboxValueType} from 'antd/es/checkbox/Group';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import {changeValue, filterGods, searchItem} from '../../features/godsSlice';
import {IGods} from "../../types/gods-types";

const Filter: React.FC = () => {
  const value = useTypedSelector(({gods}) => gods.searchValue)
  const gods = useTypedSelector((state) => state.gods.gods)

  const dispatch = useAppDispatch()
  const handleChangeValue = (event: any) => dispatch(changeValue(event.target.value))
  const handleSearch = () => dispatch(searchItem(value))

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const onChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(filterGods(checkedValues))
  };
  return (
    <section className={styles.wrapper}>
      <Input.Search
        value={value}
        onChange={handleChangeValue}
        onSearch={handleSearch}
        className={styles.inputSearch}/>
      <Form
        name='basic'
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item>
          <Checkbox.Group
            style={{width: '100%'}}
            onChange={onChange}
          >
            <Col span={15}>
              <Checkbox value="men's clothing">men's clothing</Checkbox>
            </Col>
            <Col span={17}>
              <Checkbox value="women's clothing">women's clothing</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value='jewelery'>jewelery</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value='electronics'>electronics</Checkbox>
            </Col>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Slider range defaultValue={[10, 1500]}/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </section>
  )
}

export default Filter;

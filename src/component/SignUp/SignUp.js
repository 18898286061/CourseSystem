import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom'

import './SignUp.css'

const { Option } = Select;

const residences = [{
value: 'zhejiang',
label: 'Zhejiang',
children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
    value: 'xihu',
    label: 'West Lake',
    }],
}],
}, {
value: 'jiangsu',
label: 'Jiangsu',
children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
    }],
}],
}];

class RegistrationForm extends Component {
state = {
    confirmDirty: false,
    autoCompleteResult: [],
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
        console.log('Received values of form: ', values);
    }
    });
}

handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
}

compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
    } else {
    callback();
    }
}

validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
    }
    callback();
}

handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
    autoCompleteResult = [];
    } else {
    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
}

render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
    labelAlign: 'left',
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 13,
        offset: 11,
        },
    },
    };
    const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
    })(
    <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
    </Select>
    );

    return (
    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
    <h1>注册</h1>
        <Form.Item
        label="E-mail"
        >
        {getFieldDecorator('email', {
            rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
            }, {
            required: true, message: 'Please input your E-mail!',
            }],
        })(
            <Input />
        )}
        </Form.Item>
        <Form.Item
        label="密码"
        >
        {getFieldDecorator('password', {
            rules: [{
            required: true, message: 'Please input your password!',
            }, {
            validator: this.validateToNextPassword,
            }],
        })(
            <Input type="password" />
        )}
        </Form.Item>
        <Form.Item
        label="确认密码"
        >
        {getFieldDecorator('confirm', {
            rules: [{
            required: true, message: 'Please confirm your password!',
            }, {
            validator: this.compareToFirstPassword,
            }],
        })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
        )}
        </Form.Item>
        <Form.Item
        label={(
            <span>
            昵称&nbsp;
            <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
            </Tooltip>
            </span>
        )}
        >
        {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(
            <Input />
        )}
        </Form.Item>
        <Form.Item
        label="常用地址"
        >
        {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
        })(
            <Cascader options={residences} />
        )}
        </Form.Item>
        <Form.Item
        label="电话号码"
        >
        {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
        })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        )}
        </Form.Item>
        <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
        >
        <Row gutter={8}>
            <Col span={12}>
            {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
            })(
                <Input />
            )}
            </Col>
            <Col span={12}>
            <Button>Get captcha</Button>
            </Col>
        </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
            valuePropName: 'checked',
        })}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
        若您已有账号请 <Link to="/login">登录</Link>
    </Form>
    );
}
}
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
  export default WrappedRegistrationForm
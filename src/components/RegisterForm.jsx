import React, { Component } from 'react';
import { Form, Icon, Button, Input } from 'antd';
class RegisterForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
                console.log('Values of form', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='registration-form'>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name' }]
                    })(
                        <Icon
                            prefix={<Icon type="caret-right" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Name"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('surname', {
                        rules: [{ required: true, message: 'Please input your surname' }]
                    })(
                        <Icon
                            prefix={<Icon type="caret-right" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Surname"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator({
                        rules: [{ required: true, message: 'Please input your password!' }]
                    }
                    )(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password"
                        />
                    )}
                </Form.Item>

            </Form>
        );
    }
}


let WrappedRegistrationForm = Form.create({ name: 'normal_registration' })(RegisterForm);
export default WrappedRegistrationForm;
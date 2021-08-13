import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;
const contact = () => {
    return (
      <div id="contact" className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Get in Touch</h2>
            <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="Full Name"
              rules={[
                { required: true, message: "Please input your Full Name!" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="Email Address"
              rules={[
                { required: true, message: "Please input your Email Address!" },
              ]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="Telephone"
              rules={[
                { required: true, message: "Please input your Telephone!" },
              ]}
            >
              <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="Subject"
              rules={[
                { required: true, message: "Please input your Subject!" },
              ]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="Message"
              rules={[
                { required: true, message: "Please input your Message!" },
              ]}
            >
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>
          

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
};

export default contact;
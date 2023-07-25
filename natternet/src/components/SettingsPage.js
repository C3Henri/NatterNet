/* SettingsPage.js */

import React from 'react';
import { Layout, Menu, Form, Input, Button, Select, Typography } from 'antd';
import { UserOutlined, MessageOutlined, ArrowLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const { Sider, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

function SettingsPage() {
    const [selectedKey, setSelectedKey] = React.useState("profile");
    const [collapsed, setCollapsed] = React.useState(false);
    const [backVisible, setBackVisible] = React.useState(true);
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    }

    const handleBackClick = () => {
        navigate(-1);
    }

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className="settingsPage">
            <Sider width={collapsed ? 80 : "25%"} className="settingsSider" collapsed={collapsed} onCollapse={(collapsed) => setBackVisible(!collapsed)}>
    <div className="siderHeader">
        {backVisible ? (
            <ArrowLeftOutlined onClick={handleBackClick} className="backIcon" />
        ) : (
            <div className="backIconPlaceholder" />
        )}
        {!collapsed && <Title level={3} style={{ color: '#fff', padding: '20px 0'}}>Configurações</Title>}
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
        })}
    </div>
                <Menu
                    onClick={handleMenuClick}
                    selectedKeys={[selectedKey]}
                    mode="inline"
                >
                    <Menu.Item key="profile" icon={<UserOutlined />}>
                        Meu Perfil
                    </Menu.Item>
                    <Menu.Item key="chat" icon={<MessageOutlined />}>
                        Personalização de chat
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content className="settingsContent">
                {selectedKey === "profile" && (
                    <Form className="settingsForm">
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
                        >
                            <Input placeholder="Nome" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Por favor insira seu email!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
                        >
                            <Input.Password placeholder="Senha" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                        </Form>
                )}

                {selectedKey === "chat" && (
                    <Form className="settingsForm">
                        <Form.Item
                            name="saveMethod"
                            rules={[{ required: true, message: 'Por favor selecione um método!' }]}
                        >
                            <Select placeholder="Selecione um método de salvamento">
                                <Option value="server">Servidor</Option>
                                <Option value="peer">Peer to peer</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Content>
        </Layout>
    );
}

export default SettingsPage;
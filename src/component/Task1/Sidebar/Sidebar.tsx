import {
    HomeOutlined,
    MenuOutlined,
} from '@ant-design/icons';

import { PiNotepadBold } from 'react-icons/pi'

import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import Header from "../Header/Header";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        icon,
        children,
    } as unknown as MenuItem;
}

const items: MenuItem[] = [
    getItem(<MenuOutlined style={{ fontSize: '25px', gap: '2px' }} />),
    getItem(<HomeOutlined style={{ fontSize: '25px',  }} />),
    getItem(<PiNotepadBold style={{ fontSize: '25px', }} />)
];

const Sidebar: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider style={{
                backgroundColor: "white"
            }}>
                <div className="demo-logo-vertical" />
                <Menu items={items} style={{
                    padding: "40px"
                }} />
            </Sider>
            <Layout>
                <div>
                    <Header />
                </div>
            </Layout>
        </Layout>
    );
};

export default Sidebar;

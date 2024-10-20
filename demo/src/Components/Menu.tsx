import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { useNavigate, useLocation, Location } from 'react-router-dom'
import { Menu, theme } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
type naviType = {
    key: string
}
const items: MenuItem[] = [
    getItem('Home', '/home', <PieChartOutlined />),
    getItem('about', '/about', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '/tom'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const comMenu = () => {

    const NavigateTo = useNavigate()
    const currentRouter = useLocation()

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const menuClick = (e: naviType) => {
        NavigateTo(e.key)
    }

    let firstOpenKey: string = ''

    function findKey(obj: { key: string; }) {
        return obj.key === currentRouter.pathname
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 1 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    //自动收缩menu
    const autoOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRouter.pathname]} mode="inline" items={items} onOpenChange={autoOpenChange} openKeys={openKeys} onClick={menuClick} />
    )
}

export default comMenu
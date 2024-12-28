// import { Component, ReactNode } from "react";
// import { Link } from "react-router-dom";

// class MyNav extends Component{
//     render(): ReactNode {
//         return(
//             <>
//                 <Link to={'/'} >首页</Link>
//                 <Link to={'/tianqi'}>天气情况</Link>
//             </>
//         )
//     }
// }

// export default MyNav

import React, { ReactNode } from "react";
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '/',
        label: '首页',
        icon: <MailOutlined />,

    },
    {
        key: '/tianqi',
        label: '天气',
        icon: <AppstoreOutlined />,
    }

];

function withNavigate(WrappedComponent:any) {
    return function NavigateComponent(props:any) {
      const navigate = useNavigate();
      return <WrappedComponent {...props} navigate={navigate} />;
    };
  }

class MyNav extends React.Component<any,any> {

    constructor(props: any) {
        super(props);
        this.state = {
            currents: '/'
        }
    }
    
    onClick: MenuProps['onClick'] = (e) => {
        console.log(e.key);
        this.setState({
            currents: e.key
        })
        console.log(window.location.pathname);
        // this.props.navigate(e.key);
    };

    navs = (e:any) => {
        console.log(e);
        this.props.navigate(e.key);
    }

    render(): ReactNode {
        return (
            <Menu
                onClick={this.onClick}
                selectedKeys={[this.state.currents]}
                mode="horizontal"
                items={items}
                onSelect={this.navs}
            />
        )
    }
}

export default withNavigate(MyNav);
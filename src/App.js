import { useRoutes, A } from "hookrouter";
import { Empty, Layout, Menu } from "antd";
import {} from "@ant-design/icons";

import "./App.less";

import routes from "./router";
import { Suspense } from "react";

function App() {
  const routeResult = useRoutes(routes);
  const { Header, Content, Sider } = Layout;

  return (
    <Layout>
      <Header className="header">
        <div className="logo">LOGO</div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              <A href="/">Home</A>
            </Menu.Item>
            <Menu.Item key="2">
              <A href="/films">Films</A>
            </Menu.Item>
            <Menu.Item key="3">
              <A href="/people">Characters</A>
            </Menu.Item>
            <Menu.Item key="4">
              <A href="/species">Species</A>
            </Menu.Item>
            <Menu.Item key="5">
              <A href="/planets">Planets</A>
            </Menu.Item>
            <Menu.Item key="6">
              <A href="/starships">Starship</A>
            </Menu.Item>
            <Menu.Item key="7">
              <A href="/vehicles">Vehicles</A>
            </Menu.Item>            
          </Menu>
        </Sider>

        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 12,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback="<p>loading ....</p>">
              {routeResult || <Empty />}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

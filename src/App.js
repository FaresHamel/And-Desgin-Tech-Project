import './App.css';
import React from "react";
import "antd/dist/antd.css"
import { Layout } from "antd";
import AppHeader from "./components/common/header.js";
import HeroHome from "./views/home";
import AppFooter from "./components/home/footer";
const { Header,Content,Footer} = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
       <HeroHome/>
      </Content>
      <Footer>
      <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;

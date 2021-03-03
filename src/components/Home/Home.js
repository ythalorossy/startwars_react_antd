import { PageHeader, Divider, Card, Col, Row } from "antd";
import {
  ArrowsAltOutlined,
  AppstoreOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
  RocketOutlined,
  UngroupOutlined,
} from "@ant-design/icons";
import { navigate } from "hookrouter";

import "./Home.less";

const Home = () => {
  const cards = [
    {
      icon: <AppstoreOutlined />,
      title: "Films",
      navigateTo: "/films",
      details: "Details about the Episodes",
    },
    {
      icon: <TeamOutlined />,
      title: "Characters",
      navigateTo: "/people",
      details: "Details about the Chracters",
    },
    {
      icon: <DeploymentUnitOutlined />,
      title: "Species",
      navigateTo: "/species",
      details: "Details about the Species",
    },
    {
      icon: <GlobalOutlined />,
      title: "Planets",
      navigateTo: "/planets",
      details: "Details about the Planets",
    },
    {
      icon: <RocketOutlined />,
      title: "Starships",
      navigateTo: "/starships",
      details: "Details about the Starships",
    },
    {
      icon: <UngroupOutlined />,
      title: "Vehicles",
      navigateTo: "/vehicles",
      details: "Details about the Vehicles",
    },
  ];

  return (
    <>
      <PageHeader
        title="Star Wars Information"
        subTitle="Details about Films, Characters, Species, Planets, Starships and Vehicles"
      />

      <Divider orientation="left"></Divider>

      <Row gutter={16}>
        {cards.map((card) => (
          <Col span={8}>
            <Card
              title={
                <div style={{ alignItems: "flex-start", fontSize: "32px" }}>
                  {card.icon}
                  {card.title}
                </div>
              }
              actions={[
                <ArrowsAltOutlined
                  key="arrow"
                  onClick={() => navigate(`${card.navigateTo}`)}
                />,
              ]}
            >
              {card.details}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;

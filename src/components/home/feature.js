import React from 'react';
import { Row, Col, Card } from "antd";
import image1 from "../../assert/images/advanced-option.jpg";
import image2 from "../../assert/images/clean-design.jpg";
import image3 from "../../assert/images/easy-customise.jpg";
import image4 from "../../assert/images/great-support.jpg";
import image5 from "../../assert/images/modern-design.jpg";
import image6 from "../../assert/images/unlimited-features.jpg";

const { Meta } = Card;
const feature = () => {
    return (
      <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>This is a simple example of features of this web site and what we will do in the feature</p>
                </div>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card hoverable cover={<img alt="Advanced Option" src={image1} />}>
                <Meta title="Advanced Option" />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Clean and Elegant" src={image2} />}
              >
                <Meta title="Clean and Elegant" />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Easy to customize" src={image3} />}
              >
                <Meta title="Easy to customize" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Great support" src={image4} />}>
                <Meta title="Great Support" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Modern Design" src={image5} />}>
                <Meta title="Modern Design" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Modern Design" src={image6} />}>
                <Meta title="Unlimited Features " />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default feature;
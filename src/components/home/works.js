
import  { useState } from "react";
import { Modal, Button } from "antd";

const works = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
      <div id="work" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it Works</h2>
            <p>
              This site get name of classes and Component from And Design css
              Library
            </p>
          </div>
          <div className="contentHolder">
            <Button type="primary" onClick={showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="Dashboard React Application"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <iframe
              title="Dashboard React Application"
              width="100%"
              height="350"
              src="https://www.youtube.com/watch?v=thvOizja04c&list=PLznDpR0Sx-TyNvY_zehnBjisF6xI4GKIA&index=9"
            />
          </Modal>
        </div>
      </div>
    );
};

export default works;
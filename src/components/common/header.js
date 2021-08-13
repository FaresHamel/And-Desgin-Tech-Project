import React,{ useState} from "react";
import "antd/dist/antd.css";
import { Drawer,Button,Anchor } from "antd";
const {Link} = Anchor;
const header = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
     setVisible(true);
   };
   const onClose = () => {
     setVisible(false);
   };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i class="fas fa-bolt" />
          <a href="https://www.google.com" target="_blank">
            TECH
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#work" title="Works" />
            <Link href="#faq" title="FaQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#work" title="Works" />
              <Link href="#faq" title="FaQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default header;

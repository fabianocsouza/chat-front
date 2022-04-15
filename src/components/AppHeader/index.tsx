import { Avatar } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FunctionComponent } from "react";

interface AppHeaderProps {
  userName: string;
}

const AppHeader: FunctionComponent<AppHeaderProps> = ({userName}) => {
  return (
    <Header className="app-header">
      <span style={{ fontSize: 30 }}>Preservation service</span>

      {userName && 
      <div>
        <Avatar style={{ backgroundColor:"rgb(221, 242, 202)", color: "rgb(80, 123, 128)"}}>{userName[0].toUpperCase()}</Avatar> {userName}
      </div>
      }
    </Header>
  );
};

export default AppHeader;

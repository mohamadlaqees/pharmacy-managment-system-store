import React, { Fragment } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Loading({ loading, error, children }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:"#5fb9f7",
      }}
      spin
    />
  );
  const renderHandler = () => {
    const cloneButton = React.cloneElement(
      children,
      { disabled: true,className:"p-1 border-SReg border-2 text-SReg rounded-md"},
      <span>
        Loading <Spin indicator={antIcon} />
      </span>
    );
    return loading ? cloneButton : children;
  };
  return renderHandler();
}

export default Loading;

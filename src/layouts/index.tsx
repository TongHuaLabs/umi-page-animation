import React from 'react';
import { IRouteComponentProps, withRouter } from 'umi';
type BasicLayoutProps = IRouteComponentProps;

function BasicLayout(props: BasicLayoutProps) {
  return <div>hello {props.children}</div>;
}

export default BasicLayout;

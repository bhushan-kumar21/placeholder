import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Nav from "./nav";
import Foot from "./footer";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function Home() {
	return (
		<Layout>
			<Nav />
			<Foot />
		</Layout>
	);
}

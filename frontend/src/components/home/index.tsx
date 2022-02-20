import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "../../logo.svg";
import {
	CodeOutlined,
	PlayCircleOutlined,
	YoutubeOutlined,
	GithubOutlined,
	CodeSandboxOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function Home() {
	const [current, setCurrent] = useState("");
	const handleClick = (e: any) => {
		console.log("click", e);
		setCurrent(e.key);
	};

	return (
		<Layout>
			<Header className="header">
				<div className="logo" />
				<Menu
					onClick={handleClick}
					selectedKeys={[current]}
					mode="horizontal"
					theme="dark">
					<Menu.Item key="getStarted" icon={<PlayCircleOutlined />}>
						Getting Started
					</Menu.Item>
					<SubMenu key="languages" title="Languages" icon={<CodeOutlined />}>
						<Menu.Item key="python">Python</Menu.Item>
						<Menu.Item key="js">JavaScript</Menu.Item>
						<Menu.Item key="ts">TypeScript</Menu.Item>
						<Menu.Item key="c#">C#</Menu.Item>
					</SubMenu>
					<Menu.Item key="youtube" icon={<YoutubeOutlined />}>
						YouTube
					</Menu.Item>
					<Menu.Item key="github" icon={<GithubOutlined />}>
						GitHub
					</Menu.Item>
					<Menu.Item key="sandbox" icon={<CodeSandboxOutlined />}>
						Sandbox
					</Menu.Item>
				</Menu>
			</Header>
			<Footer style={{ textAlign: "center" }}>
				Placeholder ©2022 Created by JesusHadAegis & Sync271
			</Footer>
		</Layout>
	);
}

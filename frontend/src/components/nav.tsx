import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "../logo.svg";
import {
	CodeOutlined,
	PlayCircleOutlined,
	YoutubeOutlined,
	GithubOutlined,
	CodeSandboxOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function Nav() {
	const [current, setCurrent] = useState("");
	const handleClick = (e: any) => {
		console.log("click", e);
		setCurrent(e.key);
	};
	return (
		<Header className="header">
			<img className="logo" src={logo} />
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
					<Menu.Item key="js">
						<a href="https://www.javascript.com/" target="_blank">
							JavaScript
						</a>
					</Menu.Item>
					<Menu.Item key="ts">
						<a href="https://www.typescriptlang.org/" target="_blank">
							TypeScript
						</a>
					</Menu.Item>
					<Menu.Item key="c#">
						<a
							href="https://docs.microsoft.com/en-us/dotnet/csharp/"
							target="_blank">
							C#
						</a>
					</Menu.Item>
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
	);
}

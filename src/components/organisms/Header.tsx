import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

type HeaderProps = {
	page : string
}

const Header:React.FC<HeaderProps>  = (props) => {
	return (
		<StyledHeader>
			<ul>
				<li className={props.page === "home" ? "active" : ""}>
					<Link to="/">
						<span>HOME</span>
						<i className="fa-solid fa-house"></i>
					</Link>
				</li>
				<li className={props.page === "about" ? "active" : ""}>
					<Link to="/about">
						<span>ABOUT</span>
						<i className="fa-solid fa-circle-user"></i>
					</Link>
				</li>
				<li className={props.page === "projects" ? "active" : ""}>
					<Link to="/projects">
						<span>PROJECTS</span>
						<i className="fa-solid fa-list-check"></i>
					</Link>
				</li>
				<li className={props.page === "github" ? "active" : ""}>
					<Link to="/github">
						<span>GITHUB</span>
						<i className="fa-brands fa-github"></i>
					</Link>
				</li>
			</ul>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 20px;

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		height: 100%;

		li {
			a {
				position: relative;
				display: inline-block;
				padding: 13px 14px;
				background: #555;
				border-radius: 30px;
				transition: all 0.2s;

				span {
					position: absolute;
					right: 0;
					font-size: 16px;
					font-weight: 500;
					color: transparent;
					opacity: 0;
					transition: opacity 0.3s ease, padding 0.3s ease;
				}

				i {
					width: 25px;
					height: 25px;
					font-size: 20px;
					text-align: center;
					line-height: 25px
				}
			}

			&:hover {
				a {
					padding: 13px 14px 13px 25px;
					background: ${(props) => props.theme.mainColor};

					span {
						position: relative;
						right: auto;
						padding-right: 12px;
						color: #fff;
						opacity: 1;
					}
				}
			}
		
			&.active {
				a {
					background-color: ${(props) => props.theme.mainColor}; 
				}
			}

			& + li {
				margin-top: 20px;
			}
		}
	}
`;

export default Header;
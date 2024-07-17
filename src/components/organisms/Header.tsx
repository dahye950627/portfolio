import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

type HeaderProps = {
	page : string
}

const Header:React.FC<HeaderProps>  = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<StyledHeader className={isOpen ? 'open' : 'close'}>
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
			<button type="button" className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
				<span className="blind">메뉴열기</span>
				<span className="arrow" aria-hidden="true"></span>
				<span className="arrow" aria-hidden="true"></span>
			</button>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 20px;
	bottom: 0;
	z-index: 100;

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		height: 100%;

		li {
			a {
				position: relative;
				display: flex;
				align-items: center;
				padding: 13px;
				border-radius: 30px;
				background: #333;
				box-shadow: 0 0 8px 1px rgba(100,100,100,0.5);
				transition: all 0.2s;

				span {
					position: absolute;
					right: 0;
					font-weight: 500;
					opacity: 0;
					color: transparent;
					line-height: 1.2;
					transition: padding 0.3s, opacity 0.3s;
				}
				i {
					display: inline-block;
					width: 25px;
					height: 25px;
					font-size: 20px;
					text-align: center;
					line-height: 25px;
				}
			}

			&:hover {
				a {
					padding: 13px 13px 13px 22px;
					background: ${(props) => (props.theme.mainColor)};
					box-shadow: 0 0 8px 1px #c174ff;
					span {
						position: relative;
						padding-right: 12px;
						color: #fff;
						opacity: 1;
					}
				}
			}	
			&.active {
				a {
					background: ${(props) => (props.theme.mainColor)};
					box-shadow: 0 0 8px 1px #c174ff;
				}
			}
			& + li {
				margin-top: 24px;
			}
		}
	}

	@media ${(props) => props.theme.mobile}{
		&.close {
			ul {
				height: 0;
				transition: all 0.3s;
			}
		}

		padding-bottom: 75px;

		.menu-btn {
			position: absolute;
			bottom: 20px;
			right: 50%;
			display: inline-block;
			width: 40px;
			height: 40px;
			background: transparent;
			transform: translateX(50%);

			.arrow {
				position: absolute;
				top: 8px;
				display: inline-block;

				&:before,&:after {
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					width: 2px;
					height: 14px;
					border-radius: 1px;
					background: #707070;
				}
				&:before {
					transform-origin: right bottom;
					transform: rotate(55deg);
				}
				&:after {
					margin-left: 2px;
					transform-origin: left bottom;
					transform: rotate(-55deg);
				}

				&:last-child {
					top: 16px;
				}
			}
		}
		ul {
			justify-content: flex-end;
		}
	}

	@media ${(props) => props.theme.smallMobile} {
		ul li {
			a {
				padding: 10px;

				i {
					width: 22px;
					height: 22px;
					font-size: 18px;
					line-height: 22px;
				}
			}
			&:hover {
				a {
					padding: 10px 10px 10px 18px;
				}
			}	
		}
	}
`;

export default Header;

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Heading from "@/components/atoms/Heading";

const HomeConWrap = () => {
	return (
		<StyledHome>
			<div className="left">
				<div className="img-box"></div>
			</div>
			<div className="right">
				<div className="intro-area">
					<Heading level="2">HELLO EVERYONE! 😁</Heading>
					<Heading level="1">I'M {' '}
						<span className="point">W</span>
						<span className="point">E</span>
						<span className="point">B</span>{' '}
						<span className="point">P</span>
						<span className="point">U</span>
						<span className="point">B</span>
						<span className="point">L</span>
						<span className="point">I</span>
						<span className="point">S</span>
						<span className="point">H</span>
						<span className="point">E</span>
						<span className="point">R</span>
					</Heading>
					<p>
						안녕하세요 퍼블리셔 이다혜 입니다.<br/>
						안녕하세요 퍼블리셔 이다혜 입니다.<br/>
						안녕하세요 퍼블리셔 이다혜 입니다.<br/>
						안녕하세요 퍼블리셔 이다혜 입니다.<br/>
					</p>
				</div>
				<div className="info-area">
					<Heading level="2">PERSONAL INFOS</Heading>
					<ul>
						<li><span>Name :</span> 이다혜</li>
						<li><span>Age :</span> 1995.06.27</li>
						<li><span>Phone :</span> 010-2350-3059</li>
						<li><span>Email :</span>  dahye950627@naver.com</li>
					</ul>
				</div>
				<div className="btn-area">
					<Link to="/about">
						MORE ABOUT ME
						<i className="fa-solid fa-arrow-right"></i>
					</Link>
				</div>
			</div>
		</StyledHome>
	)
}

const leftAni = keyframes`
	0% {
		transform: translateY(50px);
	}

	25% {
		transform: translateY(-50px);
	}

	50% {
		transform: translateY(20px);
	}

	75% {
		transform: translateY(-20px);
	}

	100% {
		transform: translateY(0);
	}
`;
const leftMoAni1 = keyframes`
	0% {
		left: -60px;
	}

	100% {
		left: -
	}
`;
const leftMoAni2 = keyframes`
	0% {
		right: -60px; 
	}

	100% {
		right: 0;
	}
`;

const StyledHome = styled.main`
	display: flex;
	width: 100%;
	overflow: hidden;

	.left {
		position: relative;
		flex: 0 0 35%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 0 0 40px;
		animation: ${leftAni} 0.55s ease-in-out 0.55s 1 normal both;

		&:before, &:after {
			content: '';
			position: absolute;
			left: calc(50% + 20px);
			transform: translateX(-50%);
			width: 70%;
			height: 100px;
			background: ${(props) => props.theme.mainColor};
		}
		&:before {
			top: -50px;
			border-radius: 0 0 32px 32px;
		}
		&:after {
			bottom: -50px;
			border-radius: 32px 32px 0 0;
		}

		.img-box {
			position: relative;
			width: 100%;
			height: 80vh;
			border-radius: 32px;
			margin: auto 0;
			background: url(${(props) => props.theme.mainImgSrc}) no-repeat center center / cover;
			box-shadow: 0px 2px 11px 7px rgba(0,0,0,0.3);
			z-index: 2;
		}
	}
	.right {
		display: flex;
		flex-direction: column;
    	justify-content: center;
		width: 100%;
		padding: 0 0 0 70px;
		
		.intro-area {
			h1 {
				margin-bottom: 12px;
				font-size: 45px;
				font-weight: 700;
			}
			h2 {
				font-size: 24px;
			}
			p {
				padding-right: 71px;
			}
		}
		.info-area {
			margin: 48px 0;

			h2 {
				margin-bottom: 12px;
				font-size: 26px;
				font-weight: 500;
			}
			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 50%;
					margin-bottom: 12px;
					color: ${(props) => props.theme.mainTxtColor};
					font-size: 16px;
					font-weight: 600;

					&:last-child {
						margin: 0;
					}
					span {
						color: #fff;
						opacity: 0.7;
					}
				}
			}
		}
		.btn-area {
			a {
				position: relative;
				display: inline-block;
				padding: 14px 30px;
				border-radius: 30px;
				font-size: 15px;
				font-weight: 600;
				color: #fff;
				background: ${(props) => props.theme.mainColor};
				transition: all 0.3s;

				i {
					position: absolute;
					top: 50%;
					right: 14px;
					padding-left: 10px;
					opacity: 0;
					transform: translateY(-50%);
					transition: opacity 0.3s, paddig 0.3s, letter-spacing 0.3s;
				}

				&:hover, &:focus {
					background: ${(props) => props.theme.mainTxtColor};
					letter-spacing: 1px;

					i {
						position: relative;
						top: unset;
						right: unset;
						opacity: 1;
						transform: none;
					}
				}
			}
		}
	}
	
	@media ${(props) => props.theme.laptop} {
		.right {
			padding: 0 0 0 6vw;

			.info-area {
				ul {
					flex-direction: column;

					li {
						width: 100%;
					}
				}
			}
		}
	}

	@media ${(props) => props.theme.tablet} {
		.right {
			padding: 0 0 0 5vw;
		}
	}

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;

		.left {
			padding: 30px;
			animation: none;

			.img-box {
				height: 60vh;
			}
			&:before, &:after {
				height: 100%;
				transform: none;
			}
			&:before {
				width: 10%;
				top: 0;
				left: 0;
				border-radius: 0 60px 60px 0;
				box-shadow: none;
				animation: ${leftMoAni1} 0.35s ease-in-out 0.3s 1 normal both;
			}
			&:after {
				content: '';
				position: absolute;
				left: unset;
				bottom: unset;
				right: 0;
				width: 10%;
				border-radius: 60px 0 0 60px;
				animation: ${leftMoAni2} 0.35s ease-in-out 0.5s 1 normal both;
			}
		}
		.right {
			padding: 36px 24px 71px 24px;

			.intro-area {
				h1 {
					font-size: 36px;
				}
				h2 {
					font-size: 20px;
				}
				p {
					padding: 0;
				}
			}
			.info-area {
				margin: 48px 0 30px 0;
			}
		}
	}

	@media ${(props) => props.theme.smallMobile} {
		.left {
			.img-box {
				height: 50vh;
			}
		}
	}
`;

export default HomeConWrap;
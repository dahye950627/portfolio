import styled from "styled-components";
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
					<Heading level="1">I'M <strong className="point">WEB PUBLISHER</strong></Heading>
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
						<li><span>Address :</span> 경기도 부천시</li>
						<li><span>Email :</span>  dahye950627@naver.com</li>
					</ul>
				</div>
			</div>
		</StyledHome>
	)
}

const StyledHome = styled.main`
	display: flex;
	width: 100%;

	.left {
		position: relative;
		flex: 0 0 35%;
		padding: 5vh 0px 0px 30px;

		.img-box {
			position: relative;
			height: 90vh;
			border-radius: 32px;
			background: url(${(props) => props.theme.mainImgSrc}) no-repeat center center / cover;
			box-shadow: 0px 2px 10px 5px rgba(0,0,0,0.3);
			z-index: 2;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: calc(50% + 30px);
			border-radius: 0 30px 30px 0;
			background: ${(props) => props.theme.mainColor};
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
				font-size: 44px;
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
			margin-top: 40px;

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

			.img-box {
				height: 60vh;
			}
			&:before {
				width: 10%;
				border-radius: 0 60px 60px 0;
			}
			&:after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				width: 10%;
				border-radius: 60px 0 0 60px;
				background: ${(props) => props.theme.mainColor};
			}
		}
		.right {
			padding: 36px 71px 71px 32px;

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
		}
	}
`;

export default HomeConWrap;
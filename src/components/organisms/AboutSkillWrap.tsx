import React from 'react';
import styled from "styled-components";
import aboutData from "@/assets/data/aboutData";


const AboutSkillWrap = () => {
	return (
		<AboutSkillStyled>
		{
			aboutData.skillList.map((item, idx) => (
				<div className="skill-box" key={idx}>
					<div className="inner">
						<div className="txt-area">
							<div className="left">
								<i className={item.icon}></i>
								<span>{ item.label }</span>
							</div>
							<div className="right">
								<span className="graph">
									<span className="bar" style={{width: item.percent}}></span>
								</span>
								<span>{ item.rank }</span>
							</div>
						</div>
						<ul>
							{
								item.detail.map((detail, idx) => (
									<li key={idx}>{ detail }</li>
								))
							}
						</ul>
					</div>
				</div>
			))
		}
		</AboutSkillStyled>
	);
}

const AboutSkillStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	.skill-box {
		width: 33.3333%;
		padding: 12px;

		.inner {
			height: 100%;
			border: 1px solid rgba(37,37,37);
			border-radius: 6px;

			.txt-area {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 12px 20px;
				border-radius: 6px 6px 0 0;
				background: rgba(30,30,30);

				.left {
					display: flex;
					align-items: center;

					i {
						font-size: 42px;
						color: ${(props) => props.theme.mainColor};
					}
					span {
						display: inline-block;
						margin-left: 10px;
						font-size: 18px;
						font-weight: 500;
					}
				}
				.right {
					position: relative;
					min-width: 34px;
					padding: 10px 5px 0;
					font-size: 12px;
					text-align: center;

					.graph {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 5px;
						border-radius: 3px;
						background-color: rgba(130,130,130);
						
						.bar {
							position: absolute;
							left: 0;
							top: 0;
							display: inline-block;
							width: 0;
							height: 100%;
							border-radius: 3px 0 0 3px;
							background: ${(props) => props.theme.mainColor};
						}
					}
				}
			}
			ul {
				padding: 12px 20px;

				li {
					position: relative;
					padding-left: 28px;
					font-size: 13px;
					color: rgba(210,210,210);

					&:before {
						content: '';
						position: absolute;
						top: 50%;
						left: 0;
						width: 16px;
						height: 1px;
						background-color: ${(props) => props.theme.mainTxtColor};
						transform: translateY(-50%);
					}
					& + li {
						margin-top: 8px;
					}
				}
			}
		}
		
		&:last-child {
			.inner .txt-area i {font-size: 36px;}
		}
	}

	@media ${(props) => props.theme.laptop} {
		.skill-box {
			width: 50%;
		}
	}

	@media ${(props) => props.theme.tablet} {
	}

	@media ${(props) => props.theme.mobile} {
		.skill-box {
			width: 100%;
		}
	}

	
`;


export default AboutSkillWrap;
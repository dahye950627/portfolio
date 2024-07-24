import styled from "styled-components";
import projectsData from "@/assets/data/projectsData";

const ProjectsWrap = () => {
	return (
		<ProjectsWrapStyled>
			{
				projectsData.projectList.map((data, idx) => (
					<div className="project-box" key={idx}>
						<div className="inner" tabIndex={0} role="button">
							<div className="info-area">
								<div className="flag">
									<span>{ data.Orderer }</span>
									<span>{ data.type }</span>
									{
										data.web ? <span className="color">웹접근성마크획득</span> : null
									}
								</div>
								<strong className="tit">{ data.name }</strong>
								<p className="period">{ data.period } <span>( { data.month } )</span></p>
								<p className="desc">{ data.desc }</p>
							</div>
							<ul className="skill-list">
								{
									data.skill.map((item,idx) => (
										<li key={idx}>{ item }</li>
									))
								}
							</ul>
							<div className="logo-box">
								<div className="logo">
									<img src={require(`@/assets/img/monimo.png`)} alt=""/>
								</div>
							</div>
						</div>
					</div>
				))
			}
		</ProjectsWrapStyled>
	);
}

const ProjectsWrapStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;

	.project-box {
		width: 33.3333%;
		padding: 12px;

		.inner {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 20px;
			background: rgba(25,25,25);
			cursor: pointer;

			// 효과 (s)
			.logo-box {
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				background-color: rgba(139,3,255,0.7);
				opacity: 0;
				transition: all 0.3s;
				
				.logo {
					display: flex;
					padding: 10px;
					background-color: rgba(255,255,255);
					border-radius: 10px;

					img {
						filter: drop-shadow(2px 4px 5px #fff);
					}
				}
			}
			&:hover, &:focus {
				.logo-box {
					opacity: 1;
				}
			}
			// 효과 (e)

			.info-area {
				.flag {
					span {
						display: inline-block;
						margin-right: 5px;
						padding: 2px 6px;
						border-radius: 3px;
						background: #323232;
						font-size: 11px;
					}
					.color {
						background: ${(props) => props.theme.mainColor};
					}
				}
				.tit {
					display: block;
					flex: 0 0 75%;
					margin: 6px 0 8px 0;
					font-size: 16px;
					font-weight: 700;
					color: ${(props) => props.theme.mainTxtColor};
					word-break: keep-all;
				}
				.period {
					display: block;
					font-size: 15px;
					word-break: keep-all;

					span {
						font-size: 12px;
						vertical-align: text-bottom;
					}
				}
				.desc {
					margin: 16px 0;
					padding: 10px 0;
					border: 1px dashed rgba(57,57,57);
					border-width: 1px 0;
					font-size: 13px;
				}
			}
				
			.skill-list {
				display: flex;
				flex-wrap: wrap;

				li {
					margin: 0 6px 6px 0;
					padding: 2px 5px;
					border: 1px solid #fff;
					border-radius: 3px;
					font-size: 14px;
					line-height: 1.2;
				}
			}
		}
	}

	@media ${(props) => props.theme.laptop} {
		width: 85%;

		.project-box {
			width: 50%;
		}
	}

	@media ${(props) => props.theme.mobile} {
		width: 100%;

		.project-box {
			width: 100%;
			padding: 12px 0;
		}
	}
`;

export default ProjectsWrap;
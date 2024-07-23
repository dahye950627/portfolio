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
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 20px;
			border: 1px solid rgba(25,25,25);
			background: rgba(25,25,25);

			.info-area {
				.flag {
					span {
						display: inline-block;
						margin-right: 5px;
						padding: 1px 6px;
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
					margin: 16px 0 20px;
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
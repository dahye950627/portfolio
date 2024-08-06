import styled from "styled-components";
import Heading from "@/components/atoms/Heading";

interface ICooperation {
	title: string;
	con: string;
}
export interface IProjectData {
	orderer: string;
	name: string;
	web: boolean;
	type: string;
	period: string;
	month: string;
	desc: string;
	skill: string[];
	company: string;
	img: string;
	work: string[];
	cooperation: ICooperation[];
}
type ProjectsPopupProps = {
	onClose: () => void;
	projectData: IProjectData | null;
}

  const ProjectsPopup: React.FC<ProjectsPopupProps> = ({ onClose, projectData }) => {
	if (!projectData) {
		return null;
	}else {



	}

	return (
		<ProjectsPopupStyled className="pop-wrap" role="dialog" aria-modal="true" tabIndex={-1}>
			<div className="pop-con">
				<div className="pop-body">
					<div className="img">
						<img src={require(`@/assets/img/${projectData.img}.png`)} alt={`${projectData.orderer} 로고`}/>
					</div>
					<div className="info-area">
						<div className="flag">
							<span>{ projectData.orderer }</span>
							<span>{ projectData.type }</span>
							{
								projectData.web ? <span className="color">웹접근성마크획득</span> : null
							}
						</div>
						<Heading level="2" className="tit">{ projectData.name }</Heading>
						<p className="period"><i className="fa-solid fa-calendar-days"></i>{ projectData.period } <span>( { projectData.month } )</span></p>
						
					</div>
					
					<div className="line-box">
						<span className="sub-tit">Description</span>
						<p className="desc">
							{ projectData.desc }
						</p>
					</div>
					<div className="line-box">
						<span className="sub-tit">Tech</span>
						<ul className="skill-list">
							{
								projectData.skill.map((item,idx) => (
									<li key={idx}>{ item }</li>
								))
							}
						</ul>
					</div>
					<div className="line-box">
						<span className="sub-tit">My work</span>
						<ul className="work-list">
							{
								projectData.work.map((data, idx) => (
									<li key={idx}><i className="fa-solid fa-check"></i>{ data }</li>
								))
							}
						</ul>
					</div>
					<div className="line-box">
						<span className="sub-tit">Cooperation</span>
						<ul className="coop-list">
							{
								projectData.cooperation.map((data, idx) => (
									<li key={idx}><span className="line">{ data.title }</span> : <span>{ data.con }</span></li>
								))
							}
						</ul>
					</div>
				</div>
				<button type="button" className="btn-close" onClick={onClose}><span className="blind">닫기버튼</span></button>
			</div>
		</ProjectsPopupStyled>
	)
}


const ProjectsPopupStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.6);
	z-index: 200;

	.pop-con {
		position: relative;
		width: 55%;
		height: 80vh;
		background-color: #000;
		padding: 60px 0 40px;
		border: 1px solid ${(props) => props.theme.mainColor};
		border-radius: 10px;

		.pop-body {
			height: 100%;
			padding: 20px 24px;
			overflow-y: auto;
			overflow-x: hidden;

			&::-webkit-scrollbar {
				width: 8px; 
			}
			&::-webkit-scrollbar-track {
				background: rgba(57,57,57); 
				border-radius: 0; 
			}
			&::-webkit-scrollbar-thumb {
				background: ${(props) => props.theme.mainColor}; 
				border-radius: 10px; 
			}

			.img {
				img {
					width: 100%;
				}
			}
			.info-area {
				margin-bottom: 24px;

				.flag {
					span {
						display: inline-block;
						margin-right: 8px;
						padding: 2px 8px;
						border-radius: 3px;
						background: #323232;
						font-size: 13px;
					}
					.color {
						background: ${(props) => props.theme.mainColor};
					}
				}
				.tit {
					display: block;
					margin: 8px 0;
					font-size: 20px;
					font-weight: 700;
					color: #fff;
					word-break: keep-all;
				}
				.period {
					display: block;
					font-size: 16px;
					word-break: keep-all;

					span {
						font-size: 13px;
						vertical-align: text-bottom;
					}
					i {
						padding-right: 8px;
						font-size: 15px;
						color: ${(props) => props.theme.mainTxtColor};
						opacity: 0.7;
					}
				}
			}
			.line-box {
				padding: 24px 0;
				border: 1px dashed rgba(57,57,57);
				border-width: 1px 0;

				& + .line-box {
					border-top-width: 0;
				}
				.sub-tit {
					display: block;
					margin-bottom: 12px;
					font-size: 14px;
					font-weight: 600;
					color: ${(props) => props.theme.mainTxtColor};
					line-height: 1.2;

					&:after {
						content: '';
						display: inline-block;
						width: 0;
						height: 0;
						margin-left: 4px;
						border-left: 6px solid transparent;
						border-right: 6px solid transparent;
						border-top: 8px solid ${(props) => props.theme.mainTxtColor};
					}
				}
			}
			.desc {
				font-size: 14px;
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
			.work-list {
				li {
					position: relative;
					padding: 4px 12px 4px 30px;
					border-radius: 6px;
					background: rgba(50, 50, 50, 0.7);
					font-size: 14px;

					& + li {
						margin-top: 7px;
					}
					i {
						position: absolute;
						top: 8px;
						left: 10px;
						padding-right: 8px;
						color: ${(props) => props.theme.mainTxtColor};
					}
				}
			}
			.coop-list {
				font-size: 14px;

				li {
					.line {
						position: relative;

						&:before {
							content: '';
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 2px;
							background: linear-gradient(to right, #ff69b4, #8B03FF);
							opacity: 0.7;
						}
					}
					& + li {
						margin-top: 8px;
					}
				}
			}
		}

		.btn-close {
			position: absolute;
			right: 12px;
			top: 12px;
			width: 40px;
			height: 40px;
			background: transparent;

			&:before, &:after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				display: inline-block;
				width: 2px;
				height: 24px;
				background: ${(props) => props.theme.mainTxtColor};
			}
			&:before {
				transform-origin: center;
				transform: translate(-50%,-50%) rotate(-45deg);
			}
			&:after {
				transform-origin: center;
				transform: translate(-50%,-50%) rotate(45deg);
			}
			&:focus {
				outline: 1px dashed ${(props) => props.theme.mainTxtColor};
			}
		}
	}

	@media ${(props) => props.theme.mobild} {
	
	}
`;

export default ProjectsPopup;
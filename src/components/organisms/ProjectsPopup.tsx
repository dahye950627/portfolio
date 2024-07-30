import styled from "styled-components";

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
	if (!projectData)  return null;

	return (
		<ProjectsPopupStyled className="popWrap">
			<div className="popCon">
				<div className="popBody">
					<div className="img">
						<img src={require(`@/assets/img/${projectData.img}.png`)} alt={`${projectData.orderer} 로고`}/>
					</div>
					<div>{ projectData.name }</div>
					<ul>
						{
							projectData.work.map((data, idx) => (
								<li key={idx}>{ data }</li>
							))
						}
					</ul>
					<ul>
						{
							projectData.cooperation.map((data, idx) => (
								<li key={idx}><span>{ data.title }</span> : <span>{ data.con }</span></li>
							))
						}
					</ul>
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

	.popCon {
		position: relative;
		width: 60%;
		height: 80vh;
		background-color: #000;
		padding: 60px 0 40px;
		border: 1px solid ${(props) => props.theme.mainColor};
		border-radius: 10px;

		.popBody {
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
				width: 100%;

				img {
					width: 100%;
					height: auto;
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
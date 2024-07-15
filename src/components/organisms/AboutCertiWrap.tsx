import styled from "styled-components";
import Heading from "@/components/atoms/Heading";
import aboutData from "@/assets/data/aboutData";

const AboutCertiWrap = () => {
	return (
		<AboutCertiWrapStyled>
			{
				aboutData.certificateList.map((item, idx) => (
					<div className="certi-box" key={idx}>
						<div className="inner">
							<div className="icon">
								<i className="fa-solid fa-address-card"></i>
							</div>
							<strong className="tit">{ item.label }</strong>
							<span className="desc">{ item.issuer }</span>
						</div>
					</div>
				))
			}
		</AboutCertiWrapStyled>
	)
}

const AboutCertiWrapStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;

	.certi-box {
		width: 50%;
		padding: 30px 12px 12px;
		
		.inner {
			position: relative;
			display: flex;
			justify-content: space-between;
			padding: 30px 20px 20px 30px;
			border: 1px solid #8B03FF;
			border-radius: 6px;
			background: ${(props) => props.theme.mainColor};

			.icon {
				position: absolute;
				top: -24px;
				left: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				background: ${(props) => props.theme.mainColor};
				font-size: 24px;
				text-align: center;
			}
			.tit {
				font-weight: 600;
			}
		}
	}
`;


export default AboutCertiWrap;
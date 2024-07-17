import React from "react";
import styled from "styled-components";
import Heading from "@/components/atoms/Heading";

type PageHeaderProps = {
	text? : string;
	point? : string;
	children? : React.ReactNode;
}

const PageTitle: React.FC<PageHeaderProps> = (props) => {

	return (
		<PageHeaderStyled className="page-tit">
			<Heading level="1">
				{ props.text }<span className="point">{' '}{ props.point }</span>
			</Heading>
			{ props.children }
		</PageHeaderStyled>
	)
}

const PageHeaderStyled = styled.div`
	padding: 80px 0;
	text-align: center;

	h1 {
		font-size: 60px;
		font-weight: 900;
		line-height: 1.2;
		letter-spacing: 1px;
	}

	@media ${(props) => props.theme.mobile} {
		padding: 40px 0;

		h1 {
			font-size: 44px;
		}
	}
`;

export default PageTitle;
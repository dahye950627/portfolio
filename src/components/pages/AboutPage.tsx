import styled from "styled-components";
import Heading from "@/components/atoms/Heading";
import PageHeader from '@/components/molecules/PageHeader';
import PageWrap from '@/components/templates/PageWrap';
import AboutSkillWrap from '@/components/organisms/AboutSkillWrap';
import AboutCertiWrap from '@/components/organisms/AboutCertiWrap';
import AboutCompWrap from '@/components/organisms/AboutCompWrap';

const AboutPage = () => {
	return (
		<PageWrap page="about">
			<PageHeader text="ABOUT" point="ME" />

			<AboutPageStyled className="inner">
				<section>
					<SectionHeaderStyled className="tit-wrap">
						<Heading level="2">MY SKILLS</Heading>
					</SectionHeaderStyled>
					<AboutSkillWrap/>
				</section>

				<section>
					<SectionHeaderStyled className="tit-wrap">
						<Heading level="2">MY CERTIFICATE</Heading>
					</SectionHeaderStyled>
					<AboutCertiWrap/>
				</section>

				<section>
					<SectionHeaderStyled className="tit-wrap">
						<Heading level="2">COMPANY HISTORY</Heading>
					</SectionHeaderStyled>
					<AboutCompWrap/>
				</section>
			</AboutPageStyled>
		</PageWrap>
	)
}

const AboutPageStyled = styled.div`
	max-width: 1140px;
	margin: 0 auto 80px auto;

	section {
		margin: auto;
		
		& + section {
			margin-top: 100px;
		}
	}

	@media ${(props) => props.theme.laptop} {
		section {
			width: 85%;
		}
	}
`;

const SectionHeaderStyled = styled.div`
	padding-bottom: 30px;
	text-align: center;

	h2 {
		font-size: 26px;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1.2;
		letter-spacing: 1px;
	}

	@media ${(props) => props.theme.mobile} {
		padding: 10px 0;

		h2 {
			font-size: 24px;
		}
	}
`;

export default AboutPage;
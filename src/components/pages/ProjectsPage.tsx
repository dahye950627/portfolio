import styled from "styled-components";
import PageHeader from '@/components/molecules/PageHeader';
import PageWrap from '@/components/templates/PageWrap';
import ProjectsWrap from '@/components/organisms/ProjectsWrap';
import ProjectsEtcWrap from '@/components/organisms/ProjectsEtcWrap';

const ProjectsPage = () => {
	return (
		<PageWrap page="projects">
			<ProjectsPageStyled>
				<PageHeader text="MY" point="PROJECTS" />

				<section>
					<ProjectsWrap/>
				</section>

				<section>
					<ProjectsEtcWrap/>
				</section>
			</ProjectsPageStyled>
		</PageWrap>
	)
}

const ProjectsPageStyled = styled.main`
	section {
		position: relative;
		max-width: 1140px;
		margin: 0 auto 70px auto;
		padding-bottom: 70px;
	}

	@media ${(props) => props.theme.mobile} {
		section {
			width: 100%;
			padding: 0 24px 44px 24px;
			margin: 0 0 44px 0;

			&:after {
				width: 60%;
			}
		}
	}
`;

export default ProjectsPage;
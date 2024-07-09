import PageWrap from '@/components/templates/PageWrap';
import AboutSkillWrap from '@/components/organisms/AboutSkillWrap';
import AboutCertiWrap from '@/components/organisms/AboutCertiWrap';
import AboutCompWrap from '@/components/organisms/AboutCompWrap';

const AboutPage = () => {
	return (
		<PageWrap page="about">
			<section>
				<AboutSkillWrap/>
			</section>

			<section>
				<AboutCertiWrap/>
			</section>

			<section>
				<AboutCompWrap/>
			</section>
		</PageWrap>
	)
}

export default AboutPage;
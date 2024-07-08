import mainImg from '@/assets/img/img_main.jpg';

const size = {
	mobile : "720px",
	tablet : "1024px",
	laptop : "1280px"
};

const config = {
	mainColor : "#8B03FF",
	subColor : "",
	thirdColor : "",

	mainTxtColor : "#C174FF",

	mainImgSrc : mainImg,

	mobile : `(max-width: ${size.mobile})`,
	tablet : `(max-width: ${size.tablet})`,
	laptop : `(max-width: ${size.laptop})`
};

export default config;
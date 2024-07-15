const aboutData = {
	skillList: [
		{
			label: "HTML/CSS",
			rank: "상",
			detail: ["HTML/CSS예시1","HTML/CSS예시2","HTML/CSS예시3"],
			icon: "fa-brands fa-html5",
			percent: "",
		},
		{
			label: "jQuery",
			rank: "중상",
			detail: ["jQuery예시1","jQuery예시2","jQuery예시3"],
			icon: "fa-brands fa-square-js",
			percent: "",
		},
		{
			label: "JavaScript",
			rank: "중",
			detail: ["JavaScript예시1","JavaScript예시2","JavaScript예시3"],
			icon: "fa-brands fa-node-js",
			percent: "",
		},
		{
			label: "Vue",
			rank: "중하",
			detail: ["Vue예시1","Vue예시2","Vue예시3"],
			icon: "fa-brands fa-vuejs",
			percent: "",
		},
		{
			label: "React",
			rank: "하",
			detail: ["React예시1"],
			icon: "fa-brands fa-react",
			percent: "",
		},
		{
			label: "CMS",
			rank: "하",
			detail: ["CMS예시1"],
			icon: "fa-solid fa-laptop-code",
			percent: "",
		},
	],
	certificateList: [
		{
			label: "정보처리기사",
			issuer: "한국산업인력공단",
		},
		{
			label: "컴퓨터활용능력 1급",
			issuer: "대한상공회의소",
		},
	],
	companyList: [
		{
			label: "㈜퓨즈",
			job: "웹 퍼블리셔",
			detail: "퓨즈 detail",
			period: "2020.12 ~ 2024.03",
			years: "3년 3개월"
		},
		{
			label: "㈜모노커뮤니케이션즈",
			job: "웹 개발자",
			detail: "모노 detail",
			period: "2018.10 ~ 2020.01",
			years: "1년 4개월"
		},
	]
}

aboutData.skillList.forEach(skill => {
	switch (skill.rank) {
		case "상":
			skill.percent = "90%";
			break;
		case "중상":
			skill.percent = "80%";
			break;
		case "중":
			skill.percent = "60%";
			break;
		case "중하":
			skill.percent = "45%";
			break;
		case "하":
			skill.percent = "35%";
			break;
		default:
			skill.percent = "0%";
			break;
	}
})

export default aboutData;
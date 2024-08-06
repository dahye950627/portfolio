/*
	--- orderer		: 발주처
	--- name		: 프로젝트 명
	--- web			: 웹접근정 인증마크 획득 여부
	--- type		: 유형 (구축, 유지보수, 리뉴얼.. 등)
	--- period		: 투입 기간
	--- month 		: 투입 기간(월단위)
	--- desc		: 설명
	--- skill		: 퍼블 사용 기술
	--- company		: 작업했을 때 회사
	---	img			: 이미지 명
	--- work		: 작업한 작업 목록
	--- cooperation	: 퍼블 외의 사용 기술
*/

const projectsData = {
	projectList: [
		{
			orderer : "삼성생명",
			name : "삼성생명 금융통합플랫폼 3차 연계 구축 (모니모)",
			web : true,
			type: "구축",
			period: "2023.11.01 ~ 2024.03.08",
			month: "4개월",
			desc: "웹 접근성 가이드를 준수하여 기존 삼성생명 WEB, 모바일 WEB 일부 메뉴의 고도화 및 모니모(모바일 APP) 앱 구축을 기존 1, 2차에 이어 3차를 진행하였습니다.",
			skill: ["Vue", "Html & SCSS","JavaScript"],
			company: "㈜퓨즈",
			img: "samsung",
			work: [
				"모니모 디자인에 맞게 공통 스크립트 sticky 버튼영역 여백수치 수정",
				"삼성생명(WEB) 툴팁 모니모(모바일 APP)에 맞게 컴포넌트 수정",
				"약관동의 스낵바 및 스크롤 이동 후 메시지 노출 구현 ",
				"Lottie-Player.js 적용",
				"퍼블 워크리스트 차수 별 화면 목록 필터링 기능 구현",
				"스크립트 이슈 결함 처리",
				"공통 가이드에 기반한 상세 화면 구현",
				"모니모 작업 내용 가이드 PPT 산출물 작업"
			],
			cooperation: [
				{title : "개발환경", con : "Visual Studio Code, Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "삼성 PMS"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Adobe XD"},
			]
		},
		{
			orderer : "The-k 한국교직원공제회",
			name : "한국교직원공제회 모바일 APP 구축 및 홈페이지 개편 ISMP",
			web : true,
			type: "구축&개편",
			period: "2023.03.02 ~ 2023.08.31",
			month: "6개월",
			desc: "웹 접근성 가이드를 준수하여 한국교직원공제회 홈페이지 전면 개편 및 모바일 APP 개발을 진행하였습니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "teacher",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "현대해상화재보험",
			name : "HI-S 포탈 장기보험 모바일 청약 시스템 구축",
			web : true,
			type: "구축",
			period: "2022.10.14 ~ 2023.01.15",
			month: "3개월",
			desc: "웹 접근성 가이드를 준수하여 현대해상 HI-S포탈 장기보험 모바일 청약 시스템 신규 모바일 APP 개발을 진행하였습니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "hyundai",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "SGI서울보증",
			name : "SGI서울보증 SGI M 구축",
			web : true,
			type: "구축",
			period: "2022.06.02 ~ 2022.09.30",
			month: "4개월",
			desc: "웹 접근성 가이드를 준수하여 SGI서울보증 신규 모바일 APP 개발을 진행하였습니다.",
			skill: ["Vue","HTML & SCSS","JavaScript"],
			company: "㈜퓨즈",
			img: "sgi",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "신한라이프",
			name : "신한생명/오렌지라이프IT 통합시스템 구축",
			web : true,
			type: "구축",
			period: "2020.02.15 ~ 2022.01.14",
			month: "11개월",
			desc: "웹 접근성 가이드를 준수하여 신한생명/오렌지라이프IT 통합시스템인 신한라이프 WEB(반응형), 모바일 WEB, 모바일 APP을 개발하고 일부 메뉴(회사소개, 공시실, 보험상품, 메인배너 등) 컨텐츠를 CMS로 관리하도록 CMS 컴포넌트를 제작하여 화면 개발을 진행하였습니다.",
			skill: ["Html & CSS","jQuery","CMS"],
			company: "㈜퓨즈",
			img: "shinhan",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "웰릭스렌탈",
			name : "웰릭스렌탈 APP신규개발/WEB 리뉴얼 용역",
			web : false,
			type: "구축&개편",
			period: "2020.12.07 ~ 2021.02.14",
			month: "2개월",
			desc: "프로젝트 설명프로젝트 설명프로젝트 설명프로젝트 설명프로젝트 설명",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "welrix",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer: "신용회복위원회",
			name : "신용회복위원회 캠페인(문자(SMS/LMS/알림톡) 통합발송 시스템 구축 고도화 ",
			web : false,
			type: "구축",
			period: "2019.05.01 ~ 2019.08.31",
			month: "4개월",
			desc: "카카오 알림톡, KT 크로샷 메시징 서비스(SMS,LMS)를 연동하여, 신청인의 채무와 신용문제 안내를 템플릿화 하여 해당 메시지 코드와 일치하는 신청인에게 메시지를 발송하는 통합 메시징 시스템 구축하였습니다.",
			skill: ["Html & CSS","Java","jQuery","DB(oracle)"],
			company: "㈜모노커뮤니케이션즈",
			img: "credit",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "경찰청",
			name : "경찰청 비상동보시스템 구축",
			web : false,
			type: "구축",
			period: "2019.06.01 ~ 2019.11.28",
			month: "6개월",
			desc: "카카오 알림톡, KT 크로샷 메시징 서비스(SMS,LMS)를 연동하여, 경찰 임무 수행 중 발생하는 비상 상황에 관한 내용을 전국경찰관서별 관리되는 조직도 기반으로 경찰관에게 전파하는 통합 메시징 시스템 구축하였습니다.",
			skill: ["Html & CSS","Java","jQuery","DB(oracle)"],
			company: "㈜모노커뮤니케이션즈",
			img: "police",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
		{
			orderer : "㈜모노커뮤니케이션즈",
			name : "자사 홈페이지 & 어드민 홈페이지",
			web : false,
			type: "구축&개편",
			period: "2018.11.01 ~ 2019.03.29",
			month: "5개월",
			desc: "자사 홈페이지 관리자 사이트를 구축하여, 메인 노출 콘텐츠, 부서별 메뉴 콘텐츠, 회사 연혁, 게시판 등 하드코딩으로 작업 되어있는 홈페이지의 데이터를 등록&수정&삭제&노출 여부 등을 관리할 수 있도록 구현하였습니다.",
			skill: ["Html & CSS","Java","jQuery","DB(oracle)"],
			company: "㈜모노커뮤니케이션즈",
			img: "mono",
			work: [
				"내가 작업한 업무 예시 1",
				"내가 작업한 업무 예시 2",
				"내가 작업한 업무 예시 3",
				"내가 작업한 업무 예시 4",
				"내가 작업한 업무 예시 5",
			],
			cooperation: [
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "PowerPoint"},
				{title : "형상관리", con : "PowerPoint"},
			]
		},
	],
}


export default projectsData;
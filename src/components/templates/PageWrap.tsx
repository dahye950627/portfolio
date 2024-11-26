import React from 'react';
import { useState, useEffect } from 'react';
import Header from '@/components/organisms/Header';
import PageAni from '@/components/molecules/PageAni';

type pageWrapProps = {
	page : string;
	children? : React.ReactNode;
}

const PageWrap: React.FC<pageWrapProps> = (props) => {

	const checkDevice = () => {
		const userAgent = navigator.userAgent;
	
		// iOS, Android, 모바일 웹을 감지
		if (/iPhone|iPad|iPod|Android/i.test(userAgent)) {
			document.body.classList.add('is-device');
		} else {
			document.body.classList.remove('is-device');
		}
	};

	useEffect(() => {
		checkDevice(); // 초기 로드 시 한 번 실행
	
		// 리사이즈 이벤트 리스너 등록
		window.addEventListener('resize', checkDevice);
	
		// 컴포넌트 언마운트 시 리소스 정리
		return () => {
			window.removeEventListener('resize', checkDevice);
		};
	}, []); // 빈 배열로 최초 렌더링 후 한 번만 실행, 리사이즈 리스너는 여기서 설정

	return (
		<>
			<Header page={props.page} />
			{ props.children }
			<PageAni/>
		</>
	)
}

export default PageWrap;
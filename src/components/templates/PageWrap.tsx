import React from 'react';
import Header from '@/components/organisms/Header';

type pageWrapProps = {
	page : string;
	children? : React.ReactNode;
}

const PageWrap: React.FC<pageWrapProps> = (props) => {
	return (
		<>
			<Header page={props.page} />
			{ props.children }
		</>
	)
}

export default PageWrap;
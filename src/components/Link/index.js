import Link from 'next/link';
import styled from 'styled-components';

const LinkWrapper = styled.span`
	text-decoration: underline;
	:hover {			
		color: gray;
		cursor: pointer;
	}
`

const LinkComp = (props) => {
	return(
	<LinkWrapper>
		<Link href={props.to}>
			{props.children}
		</Link>
	</LinkWrapper>
);}

export default LinkComp;

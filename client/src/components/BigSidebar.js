import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar';

const BigSidebar = () => {
	const { showSidebar, toggleSidebar } = useAppContext();
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggleSidebar} />
				</div>
			</div>
		</Wrapper>
	);
};
export default BigSidebar;

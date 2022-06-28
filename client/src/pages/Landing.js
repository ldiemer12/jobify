import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga et
						dolores, exercitationem maiores voluptates iure dicta tenetur
						corrupti, unde fugiat quod officia ducimus. Porro provident iusto
						ullam, aspernatur autem doloribus sit vitae quod cumque voluptas
						facilis nihil dolorem sed tenetur unde molestiae cupiditate animi
						excepturi assumenda sint, id aliquam!
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;

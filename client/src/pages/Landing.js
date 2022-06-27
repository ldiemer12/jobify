import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='jobify' className='logo' />
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
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;

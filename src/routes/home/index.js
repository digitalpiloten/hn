import { h, Component } from 'preact';
import style from './style';

class Home extends Component {

	componentDidMount() {
		fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => response.json()).then((json) => {
			// eslint-disable-next-line no-console
			console.log(json);
		});
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}

export default Home;

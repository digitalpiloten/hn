import { h, Component } from 'preact';
import style from './style';

class Home extends Component {

	state =  {
		stories: []
	}

	componentDidMount() {
		fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => response.json()).then((_topstories) => {
			_topstories.forEach(story => {
				fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`).then((responseStory) => responseStory.json()).then((_story) => {
					let __stories = this.state.stories;
					__stories.push(_story);
					this.setState({
						stories: __stories
					});
				});
			});
		});
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<ul>
					{this.state.stories.map((story, i) => (
						<li>{story.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Home;

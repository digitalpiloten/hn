/* eslint-disable no-irregular-whitespace */
/* eslint-disable indent */
import { h, Component } from 'preact';

class Item extends Component {

	state =  {
		item: {}
	}

	componentDidMount() {
		fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`).then((response) => response.json()).then((item) => {
			this.setState({
				item
			});
		});
	}

	render() {
		return (
			<div>
                <h1>{this.state.item.title || ''}</h1>
                <p>
                    <b>Score: </b> {this.state.item.score || '0'}<br />
                </p>
                <p>
                    {this.state.item.text || ''}
                </p>
			</div>
		);
	}
}

export default Item;

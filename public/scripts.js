class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCount: 20
    };
  }
  componentDidMount() {
    window.onscroll = ev => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.setState({ showCount: this.state.showCount + 20 });
      }
    };
  }
  render() {
    const { baseUrl, images } = this.props;
    const { showCount } = this.state;

    let out = images
      .slice(0, showCount)
      .map(image =>
        React.createElement("img", { src: baseUrl + image, alt: image })
      );

    if (out.length < images.length) {
      out.push(React.createElement("div", { className: "loading" }));
    }

    return out;
  }
}

// Fetch the data and render the app
fetch("./data.json")
  .then(res => res.json())
  .then(json => {
    ReactDOM.render(
      React.createElement(App, json),
      document.getElementById("root")
    );
  });

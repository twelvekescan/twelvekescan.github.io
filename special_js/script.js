class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 6000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    let lang = localStorage.getItem('lang') || 'en';
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("p", { className: "slider__top-heading" }, 'huahua hotel'), /*#__PURE__*/
      React.createElement("div", { className: "play_btn" }), /*#__PURE__*/
      React.createElement("div", { className: "slider__slides" },
      this.props.slides.map((slide, index) => /*#__PURE__*/
      React.createElement("div", {
        className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
        key: slide.id }, /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      // React.createElement("h3", { className: "slider__slide-subheading" }, slide.desc || slide.title), /*#__PURE__*/
      React.createElement("h2", { className: "slider__slide-heading" },
      slide.title.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/

      React.createElement("p", { className: "slider__slide-readmore" }, slide.desc)), /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-parts" },
      [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/
      React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
      React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));
  }}

const slides = [
{id: 1, title: 'The little flower', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/26.jpg' },
{id: 2, title: 'Warm courtyard', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/25.jpg' },
{id: 3, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/24.jpg' },
{id: 4, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/4.jpg' },
{id: 5, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/5.jpg' },
{id: 6, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/6.jpg' },
{id: 7, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/7.jpg' },
{id: 8, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/8.jpg' },
{id: 9, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/9.jpg' },
{id: 10, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/10.jpg' },
{id: 11, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekescan/twelvekescan.github.io@latest/special_img/11.jpg' }
];

ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));
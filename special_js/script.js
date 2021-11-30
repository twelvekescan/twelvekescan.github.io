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
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("p", { className: "slider__top-heading" }, "花花小馆"), /*#__PURE__*/
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
{id: 1, title: '花花小馆', desc: '十二客公司旗下民宿产品花花小馆共计528平米，拥有六间主题客房，每年平均接待客人2500人次。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/1.jpg' },
{id: 2, title: '温馨小院', desc: '花花小馆注重园艺设计，共计拥有120平米的户外花园 ，景色秀美别致，幽静雅致。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/2.jpg' },
{id: 3, title: '一方宁静，温柔可人', desc: '花花小馆定位为城市别墅民宿，出就是成都闹市，进则是宁静的花园别墅，城市中的休闲别墅。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/3.jpg' },
{id: 4, title: '转眼繁华，车水马龙', desc: '比邻清水河畔，毗邻杜甫草堂、四川省博物馆、青羊宫、金沙遗址博物馆、宽窄巷子、武侯祠等著名景点。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/4.jpg' },
{id: 5, title: '优质服务，轻奢体验', desc: '花花小馆更是提供了代为订车、旅游线路规划的贴心服务，为客户带来多样化、便捷、舒心的个性化服务。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/5.jpg' },
{id: 6, title: '种类繁多，服务到家', desc: '花花小馆具备丰富的活动承接、策划服务经验，可为您的婚宴、寿宴、公司团建、文化沙龙等活动提供全方位的策划、服务，更有户外烧烤、园艺体验、茶艺、体感游戏等为您的欢聚提供更为多样化的体验！', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/6.jpg' },
{id: 7, title: '', desc: '真正的安静，来自于内心。一颗躁动的心，无论幽居于深山，还是隐没在古刹，都无法安静下来。你的心最好不是招摇的枝柯，而是静默的根系，深藏在地下，不为尘世的一切所鼓惑，只追求自身的简单和丰富。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/7.jpg' },
{id: 8, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/8.jpg' },
{id: 9, title: '', desc: '拥有一个可供灵魂歇息畅游的港湾是美好的。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/9.jpg' },
{id: 10, title: '你的归属感，就在这里', desc: '最美的路，永远是回家的路。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/10.jpg' },
{id: 11, title: '', desc: '把别人的理想，过成自己的日常。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/11.jpg' },
{id: 12, title: '家的温馨', desc: '我愿和你浪迹天涯，但我更想和你一起回家。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/12.jpg' },
{id: 13, title: '我爱你', desc: '就是现在。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/13.jpg' },
{id: 14, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/14.jpg' },
{id: 15, title: '', desc: '故乡眼中的骄子，不应是城市里的游子。', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/15.jpg' },
{id: 16, title: '一杯清茶，温馨的午后', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/16.jpg' },
{id: 17, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/17.jpg' },
{id: 18, title: '酥软的床，甜蜜的梦', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/18.jpg' },
{id: 19, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/19.jpg' },
{id: 20, title: '家的温馨，儿时的憧憬', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/20.jpg' },
{id: 21, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/21.jpg' },
{id: 22, title: '', desc: '把生活过得精致一点', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/22.jpg' },
{id: 23, title: '我相信单纯的幸福', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/23.jpg' },
{id: 24, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/24.jpg' },
{id: 25, title: '', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/25.jpg' },
{id: 26, title: '人生漫漫，多多体验', desc: '', img: 'https://cdn.jsdelivr.net/gh/twelvekes/twelvekes.github.io@latest/special_img/26.jpg' }
];

ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));
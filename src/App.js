import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import TopBanner from './TopBanner';



function App() {
  // 컴포넌트 만들어서 재사용할꺼임...
  return (
    <div className="wrap">
      {/* header component */}
      <TopBanner />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
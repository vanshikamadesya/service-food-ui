import Header from '../components/Header'

const Home = () => {
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <Header />
        <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
          Welcome to Service Foods
        </div>
      </div>
    );
  };
  
  export default Home;
  
import mouse from './image/mouse.png';
import logo from './image/logo.png';
import './App.css';

function App() {
  return (
    <div className="text-red-700 bg-black h-screen">
      <div className="top-7 left-12 py-4 flex justify-between items-center px-5">
        <img width={42} height={9} src={logo} ClassName="App-logo"  alt="logo" />
      
        <div>
          <ul className='text-white flex gap-2'>
            <li>Complain</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
        </div>
        
        <div className='text-white mx-1 flex'>
        <div className='w-1/2  p-2'>
        <img src={mouse} className="w-1/2 ml-[195px] "  alt="mouse" />
        </div>
        <div className='w-1/2 pr-[1px] '>
          <div className='text-left'>
          <h1 className='text-5xl text-red-500 font-bold'>Mouse</h1>
          </div>
          <div>
            <p className='pt-2'>
            Stock : 600
            </p>
            <ul className='p-4'>
            <li>- Wireless Mouse</li>
            <li>- Konektivitas wireless 2.4 GHz</li>
            <li>- Jarak wireless hingga 10 m</li>
            <li>- Plug and Play</li>
            <li>- Baterai tahan hingga 12 bulan</li>
            </ul>
            </div>
          <div className='text-justify pr-20'>
            <p>
        Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. 
        Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil.
        Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).
         mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
        </p>
        <p className='text-red-500 font-semibold p-5 pl-96 text-2xl text-right '>
          Rp. 300.900
        </p>
          
  
          <button  className ='w-full border-4 border-red-500 border-solid rounded
        bg-red-500 my-32 mt-1  font-bold text-center'>BUY</button>
      </div>
        </div>
          </div>      
      
</div>
      
  );
}

export default App;

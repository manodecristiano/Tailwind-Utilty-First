import '../../index.css';


export default function Button ({onclick}) {

   

return (

<button  onclick={onclick} className='bg-white text-blue-500 px-4 py-2 rounded shadow-xl focus:ring 
hover:bg-gradient-to-r from-azure-radiance-800 to-azure-radiance-500
hover:transform active:translate-y-1 transition-all 
hover:text-amber-300'>

Night mode
</button>

  );
}


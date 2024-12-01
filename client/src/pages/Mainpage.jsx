import React ,{ useEffect, useState } from 'react';
import axios from "axios";


function Mainpage() {
  //states for the form fields
   
  const [date, setDate] = useState(null);
  const [SourceCurrency, setSourceCurrency] = useState("");
  const [TargetCurrency, setTargetCurrency] = useState("");
  const [AmountinSourceCurrency, setAmountinSourceCurrency] = useState(0);
  const [AmountinTargetCurrency, setAmountinTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  //handle submit method 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //get all currency names

  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getAllCurrencies");
        setCurrencyNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCurrencyNames();
  })

  return (
    <div>
      <h1 className="lg:mx-40 text-5xl font-bold text-blue-300">Hello! Convert Currencies Now</h1>
      <p className="lg:mx-40 opacity-30 py-6">Convert your currencies quickly with our currency converter app</p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Date</label>
              <input onChange={(e) => setDate(e.target.value)} type="date"
              id={date}
              name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor={SourceCurrency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Source Currency</label>
              <select onChange={(e) => setSourceCurrency(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="select your currency" required name={SourceCurrency} id={SourceCurrency}> <option value={SourceCurrency}>Select your currency</option>
              </select>
             
            </div>
            <div className="mb-4">
              <label htmlFor={TargetCurrency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Target Currency</label>
              <select onChange = {(e)=> setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="select your currency" required name={TargetCurrency} id={TargetCurrency}> <option value={TargetCurrency}>Select Target currency</option>
              </select>
             
            </div>
            <div className="mb-4">
              <label htmlFor={AmountinSourceCurrency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Amount in Source Currency </label>
              <input onChange={(e) => setAmountinSourceCurrency(e.target.value) } type="text" id={AmountinSourceCurrency} name={AmountinSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Amount in source currency" required />
            </div>
            <button className='bg-green-500   hover:bg-green-400 py-4 px-5 rounded-md text-white font-medium '>Get the target Currency</button>
          </form>
        </section> 
      </div>

    </div>
   
        
   
  )
}  

export default Mainpage
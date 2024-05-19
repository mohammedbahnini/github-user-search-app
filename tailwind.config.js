/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily : {
        'space-mono' : '"Space Mono", monospace'
      } , 
      colors : {
        'royalblue' : '#0079FF' ,
        'royalblue-hover' : '#60ABFF' , 
        'slategray' : '#697C9A' , 
        'steelblue' : '#4B6A9B' , 
        'steelblue-hover' : '#90A4D4' , 
        'dark-slategray' : '#2B3442' , 
        'very-dark-slategray' : '#141D2F' ,
        'ghostwhite' : '#F6F8FF' , 
        'dark-violet' : '#1E2A47' , 
        'red-error' : '#F74646'
      }
    },
  },
  plugins: [],
}


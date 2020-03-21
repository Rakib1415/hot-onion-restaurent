import breakfasts from './breakfast';
import lunches from './lunch';
import dinners from './dinner';

const fakeData = [...breakfasts, ...lunches, ...dinners];
 const shuffle = a => {
     for(let i = a.length; i; i--){
         let j = Math.floor(Math.random()*i);
         [a[i-1], a[j]] = [a[j], a[i-1]];
     }
 }

 shuffle(fakeData);

export default fakeData;
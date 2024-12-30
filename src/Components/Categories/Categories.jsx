import React from 'react'
import './Categories.css';
import Card from '../Cards/Cards'
import{ Link} from 'react-router-dom';

export const Categories  = () => {
   return (
   
   
<div style={styles.container}>
       <div className ='categories' >CATEGORIES</div>
       <Link  to="/Fruits">  <Card
        title= "FRUITS AND VEGETABLES" 
        content="Get yourself some  juicy frits and vegetables at the comfort of your home"
        imageUrl="https://rostok.gov35.ru/upload/iblock/a4d/lu7qp0q87t9ghmgdenus0992d1h2bip9/Kakie-frukty-pokupaete-1651203669.jpg" 
      />
      </Link>
     
      <Link  to="/Meat"> <Card
        title="MEAT"
        content="High quality meat "
        imageUrl="https://p2.zoon.ru/9/d/5d7b5f3810de9a742e74027c_626d0c9f8a9272.41341531.jpg"
      />
      </Link>

      <Link  to="/Legumes"> <Card
        title="LEGUMES"
        content="Get diffferent legumes at a very low price"
        imageUrl="https://thumbs.dreamstime.com/b/v%C3%A1rio-das-leguminosa-99445635.jpg"
      />
      </Link>
      
      </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
};
    
export default Categories
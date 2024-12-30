import React from 'react'
import './Fruits.css';
import Card from '../Cards/Cards'

const Fruits = () => {
  return (
         
         
          <div style={styles.container}>
             <div className ='fruitsAndVegetables' >FRUITS AND VEGETABLES</div>
            <Card
              title= "BANANAS" 
              imageUrl="https://cdn.metro-cc.ru/ru/ru_pim_398806001001_01.png"
              />
            <Card
              title="GUAVAS"
              imageUrl="https://stockmeier-food.ru/uploads/posts/2021-11/1637328785_aromatizator-guava.jpg"
            />
             <Card
              title="STRAW BERRIES"
              imageUrl="https://avatars.mds.yandex.net/get-mpic/12418417/2a0000018d83f5039b14f7e4a2651300eca3/orig"
             />
             <Card
              title= "PEACHES" 
              imageUrl="https://swlife.ru/image/cache/catalog/product/98/da/98da2a5872bf03a1861db30c88f70e0f-628x628.webp"
              />
            <Card
              title="MANGOES"
              imageUrl="https://media.baamboozle.com/uploads/images/49903/1591348641_152450"
            />
             <Card
              title="PAWPAW"
              imageUrl="https://thenutritionalinstitute.com/images/papaya.jpg"
             />
             <Card
              title= "BERRIES" 
              imageUrl="https://rusradio.ru/uploads/70/de/0b3b33587e2fb3f5d684f31db2f0.jpg"
              />
            <Card
              title="LITCHI" 
              imageUrl="https://tortsnab-msk.ru/wp-content/uploads/2015/07/er6e8rv6ev956erver.jpg"
            />
             
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
  


export default Fruits
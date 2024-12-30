import React from 'react'
import Card from '../Cards/Cards'
import './Meat.css';

const Meat = () => {
  return (
            <div style={styles.container}>
             <div className ='meat' >MEAT</div>
            <Card
              title= "CHICKEN" 
              imageUrl="https://st6.stpulscen.ru/images/product/381/842/649_big.jpg"
              />
            <Card
              title="BEEF"
              imageUrl="https://fileshki.ru/wp-content/uploads/2020/04/govyadina-duhovaya-fileshki.jpeg"
            />
             <Card
              title="MUTTON MEAT"
              imageUrl="https://avatars.mds.yandex.net/get-altay/4080517/2a000001826423bd094229c7f701796eb4e6/XXL_height"
             />
             <Card
              title= "GOAT MEAT" 
              imageUrl="https://s.alicdn.com/@sc04/kf/Ae4e5d7936f5248f1994db2c2ca6e0557o.jpg"
              />
            <Card
              title="QUAILS"
              imageUrl="https://cache3.youla.io/files/images/720_720_out/5e/16/5e164aa8ec9855caa35b93f9.jpg"
            />
             <Card
              title="PORK"
              imageUrl="https://avatars.mds.yandex.net/i?id=017c917b81580d9f9903fa9e51dad8840064223b-4245921-images-thumbs&n=13"
             />
             <Card
              title= "GUINEA FOWL" 
              imageUrl="https://thumbs.dreamstime.com/b/guinea-fowl-27811316.jpg"
              />
            <Card
              title="HARE" 
              imageUrl="https://avatars.mds.yandex.net/get-altay/1025206/2a0000018627aca89f9870571976b2205b3b/XXL_height"
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
  
  export default Meat
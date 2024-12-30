import React from 'react'
import Card from '../Cards/Cards'
import './Legumes.css';

const Legumes = () => {
  return (
          <div style={styles.container}>
             <div className ='legumes' >LEGUMES</div>
            <Card
              title= "BEANS" 
              imageUrl="https://i.ytimg.com/vi/uPA7a__jkfQ/maxresdefault.jpg"
              />
            <Card
              title="GREEN PEAS"
              imageUrl="https://avatars.mds.yandex.net/i?id=14400413ff9ab3714fab010b9da69bd9a254cafc-10350336-images-thumbs&n=13"
            />
             <Card
              title="PIGEON PEAS"
              imageUrl="https://m.media-amazon.com/images/I/81BGRoY+tlL._AC_UL960_QL65_.jpg"
             />
             <Card
              title= "SOYA BEANS" 
              imageUrl="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/184878412/image_184878412.jpg?io=getty-c-w1536"
              />
            <Card
              title="GROUND NUTS"
              imageUrl="https://avatars.mds.yandex.net/get-altay/1651981/2a0000016e942efae8278d2a6487a0307e40/XXL_height"
            />
             <Card
              title="BAMBARA NUTS"
              imageUrl="https://i.ytimg.com/vi/Pdi2Ww-yiMY/maxresdefault.jpg"
             />
             <Card
              title= "COW PEAS" 
              imageUrl="https://m.media-amazon.com/images/I/81CzozXZIdL._AC_UL960_QL65_.jpg"
              />
            <Card
              title="CHICK PEAS" 
              imageUrl="https://pic.rutubelist.ru/video/a7/51/a7519491131050c4496c04c8d81a105e.jpg"
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
  

export default Legumes
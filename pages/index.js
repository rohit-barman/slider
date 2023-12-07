import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [activeSide, SetActiveSlide] = useState(0);
  const [interval, SetIntervalId] = useState(0);
  const [brandData, setBrandData ]= useState([
    {
      name: "Adventura",
      progress: 0,
      imageUrls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR230EbyM0PgRqOmpnn5bzxzmWIzwAmTO7RRE2yIxbRwTkaaIKkYcyMj8TmRnLVCeXjDxI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR230EbyM0PgRqOmpnn5bzxzmWIzwAmTO7RRE2yIxbRwTkaaIKkYcyMj8TmRnLVCeXjDxI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR230EbyM0PgRqOmpnn5bzxzmWIzwAmTO7RRE2yIxbRwTkaaIKkYcyMj8TmRnLVCeXjDxI&usqp=CAU"
      ]
    },
    {
      name: "UrbanStyle",
      progress: 0,
      imageUrls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfRz4d-C172vllfjivbJadj_nBojWRLp56g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfRz4d-C172vllfjivbJadj_nBojWRLp56g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfRz4d-C172vllfjivbJadj_nBojWRLp56g&usqp=CAU"
      ]
    },
    {
      name: "Elegance Coutures",
      progress: 0,
      imageUrls: [
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/t/h/m-st-boxhead-black-smartees-original-imagr6yyw5hnn5zg.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/t/h/m-st-boxhead-black-smartees-original-imagr6yyw5hnn5zg.jpeg?q=70"
      ]
    },
    {
      name: "TechThreads",
      progress: 0,
      imageUrls: [
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
      ]
    },
    {
      name: "FusionWear",
      progress: 0,
      imageUrls: [
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
      ]
    },
    {
      name: "Vkaps",
      progress: 0,
      imageUrls: [
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/p/m/i/m-1-091-yunek-original-imaghhgbysd2xpuw.jpeg?q=70",
      ]
    }
  ]);

  const handleClick = (index) => {
    SetActiveSlide(index);
  }

  const nextHandler = () => {
    let maxSlide = parseInt(brandData.length) - 1;
    SetActiveSlide(prevSlide => {
      let currentSlide = prevSlide < maxSlide ? prevSlide + 1 : 0;
      runProgess(currentSlide);
      return currentSlide;
    });
  }
  
  const resetProgress = () => {
    setBrandData(prevBrands => {
      const resetBrands = prevBrands.map(brand => ({ ...brand, progress: 0 }));
      return resetBrands;
    });
    console.log("ResetProgress");
  };

  const runProgess = (index) => {
    console.log("Run Progress");
    const duration = 5000; // 5 seconds in milliseconds
    const intervalTime = 50; // Interval time for smoother animation
    const steps = duration / intervalTime;
    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep += 1;
      const newProgress = (currentStep / steps) * 100;
      setBrandData(prevBrands => {
        const updatedBrands = [...prevBrands];
        updatedBrands[index].progress = newProgress;
        return updatedBrands;
      });

      if (currentStep === steps) {
        clearInterval(intervalId); // Clear interval when progress reaches 100%
      }
    }, intervalTime);
    return () => {
      nextHandler();
      clearInterval(intervalId);
    }
  }
  
  useEffect(() => {
    resetProgress(); 
    runProgess(activeSide); 
    console.log("activeSide", activeSide)
  }, [activeSide]); 

 

  return (
    <div className={styles.container}>
      <div className='brands-warp'>
        <button className='btn btn-primary' onClick={e=>nextHandler()}>Next</button>
        {
          brandData.map((brand, index) => {
            return (
              <>
                <div className='brands'>
                  <span key={index} className={activeSide == index ? 'active' : ''} onClick={e => handleClick(index)} >
                    {brand.name}
                  </span>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar" role="progressbar" style={{width: `${brand.progress}%`  }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='brands-img'>
                  <span key={index} className={activeSide == index ? 'active' : ''}>
                  <div className='img-warp'>
                  {brand.imageUrls.length > 0 && brand.imageUrls.map((imgSrc,index)=> <img key={index} className='img-responsive' src={imgSrc} />)}
                  </div> 
                  </span>
                </div></>
            )
          })
        }
      </div>
    </div>
  );
}

import React from "react";
import "./home.css";
import Slider from "../.././components/slider.js";
import banner1 from "../.././images/banner1.jpg";
import banner2 from "../.././images/banner2.jpg";
import banner3 from "../.././images/banner3.jpg";
import banner4 from "../.././images/banner4.jpg";
import banner5 from "../.././images/banner5.jpg";
import Product from "../.././components/product.js";
import Product1 from "../.././images/1.jpg";
import Product2 from "../.././images/2.jpg";
import Product3 from "../.././images/3.jpg";
import Product4 from "../.././images/4.jpg";
import Product5 from "../.././images/5.jpg";
import Product6 from "../.././images/6.jpg";
import Product7 from "../.././images/7.jpg";
import Product8 from "../.././images/8.jpg";

const Home=()=>{
	const bannerImages = [banner1,banner2,banner3,banner4,banner5];
	return(
		<div className="home-page">
			<Slider images={bannerImages}/>
			<div className="home-row">
				<Product image={Product1} rating={5} 
					title={`You Can`} 
					price={99}
				/>
				
				<Product image={Product2} rating={5} 
					title={`The Power of Your Subconscious Mind`} 
					price={149}
				/>
				
				<Product image={Product3} rating={4} 
					title={`Joyalukkas 22k (916) 4 gm BIS Hallmarked Yellow Gold`}
					price={`20,999`}
				/>
				
				<Product image={Product4} rating={3} 
					title={`Noise Smart Watch with 1.69" Display, 500 NITS Brightness...`}
					price={`3,599`}
				/>
			</div>
			
			<div className="home-row">
				<Product image={Product5} rating={3} 
					title={`iQOO Z6 44W (Lumina Blue, 6GB RAM, 128GB Storage)`}
					price={`15,999`}
				/>
				
				<Product image={Product6} rating={2}
					title={`Cosmic Gaming Keyboard, 7 Color RGB Backlit with Effects`}
					price={`1,450`}
				/>
				
				<Product image={Product7} rating={3}
				   title={`iQOO Neo 6 5G (Dark Nova, 8GB RAM, 128GB Storage) 80W FlashCharge`}
					price={`29,999`}
				/>
			</div>

			<div className="home-row">
				<Product image={Product8} rating={3}
					title={`ASUS VivoBook 15 (2021) Core i3 10th Gen - (8 GB/1 TB HDD/Windows 11 Home) `} 
					price={`35,990`}
				/>
			</div>
			
		</div>
	)
}
export default Home;
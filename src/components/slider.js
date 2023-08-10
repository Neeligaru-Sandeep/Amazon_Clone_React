import React,{useState,useEffect} from "react";
import "./slider.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
const Slider=({images})=>{
	const[index,setIndex]=useState(0);
	
	useEffect(()=>{
		const lastIndex=images.length-1;
		if(index>lastIndex){
			setIndex(0);
		}
		if(index<0){
			setIndex(lastIndex);
		}
	},[index,images]);
	
	useEffect(()=>{
		const slider=setInterval(()=>{
			setIndex(index+1);
		},5000);
		
		return()=>{
			clearInterval(slider);
		}
	},[index]);
	
	return(
		<div className="section">
			<div className="section-container">
			{images.map((image,indexImage)=>{
				let position = "nextSlide"
				if(indexImage===index){
					position="activeSlide";
				}
				if(indexImage===index-1||(index==0 && indexImage===images.length-1)){
					position="lastSlide";
				}
				
				return(
					<article className={position} key={indexImage}>
						<img src={image} className="banner-image"/>
					</article>
				)
			})}
			</div>
			<p className="slider-nav">
				<span ><ArrowBackIosIcon className='left' onClick={()=>{setIndex(index-1)}}/></span>
				<span ><ArrowForwardIosOutlinedIcon className="right" onClick={()=>{setIndex(index+1)}}/></span>
			</p>
		</div>
	)
}
export default Slider;
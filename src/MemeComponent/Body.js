import React, {useState, useEffect} from "react"

function Body(){
	const[currentImg, setCurrentImg] = useState();
	const[topText, setTopText] = useState();
	const[bottomText, setBottomText] = useState();
	const[imgGallery, setImgGallery] = useState([
		{
			id : 1,
			url : 'https://imgflip.com/s/meme/Too-Damn-High.jpg'
		},
		{
			id: 2,
			url: 'https://picsum.photos/600',
		},
		{
			id: 3,
			url: 'https://picsum.photos/300',  
		},
		{
			id: 4,
			url: 'https://picsum.photos/400',
		},
		{
			id: 5,
			url :'https://picsum.photos/500',
		},
		{
			id: 6,
			url: 'https://picsum.photos/200',
		}
	])

	useEffect(() => {
		setCurrentImg(imgGallery[0].url);
	},[]);

	console.log(currentImg);


	return(
		<div className="container d-flex">
			<div className="body-wrapper">
				<div className="img-gallery">
					{imgGallery.map(item => (
						<a href="javascript:;">
							<img 
								className={currentImg == item.url ? 'hoverLay active' : 'hoverLay'}
								onClick={() => setCurrentImg(item.url)}
								src={item.url} 
								style={{display: "inline", width:"100px", height:"100px", objectFit:"cover"}} />
						</a>
					))
					}
				</div>
				<br />
				<div className="d-flex justify-space-between">
					<div className="img-wrapper">
						<span className="topText">{topText}</span>
						<img src={currentImg} style={{height: "300px", objectFit: "cover"}} />
						<span className="bottomText">{bottomText}</span>
					</div>
					<div className="form-control">
						<input type="text" className="input-control" onChange={(event) => setTopText(event.target.value)} placeholder="Top Text"/>
						<input type="text" className="input-control" onChange={(event) => setBottomText(event.target.value)} placeholder="Bottom Text"/>
						<button className="generateBtn"> Generate </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Body
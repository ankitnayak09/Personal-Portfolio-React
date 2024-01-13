import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCalendar } from "react-icons/fa";
export default function EventCard({ title, date, description, images }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="bg-slate-200 shadow-md rounded-md overflow-hidden lg:overflow-visible">
			<Slider {...settings}>
				{images.map((image) => (
					<div className="h-40 overflow-hidden">
						<img
							src={image}
							className="w-full object-cover rounded-t-md"
							alt=""
						/>
					</div>
				))}
			</Slider>
			<div className="mt-4 font-bold text-xl px-2">{title}</div>
			<div className="px-2 flex items-center gap-2">
				<FaCalendar />
				<span className="bg-slate-400 rounded-full px-2">{date}</span>
			</div>
			<div className="px-2 italic">{description}</div>
		</div>
	);
}

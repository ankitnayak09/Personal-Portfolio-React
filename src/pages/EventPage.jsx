import EventCard from "../components/EventCard/EventCard";
import { events } from "../components/EventCard";
import background from "./../img/black-background.jpg";
function EventPage() {
	return (
		<section className="bg-custom py-5">
			<h1 className="text-2xl md:text-4xl font-bold text-center mb-4  mt-4 drop-shadow-lg uppercase text-black font-outline-2 font-mono">
				From Vision to Reality: Bringing Event Ideas to Life
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-cente px-10 gap-x-20 gap-y-10">
				{events.map((event) => (
					<EventCard
						key={event.title}
						title={event.title}
						date={event.date}
						description={event.description}
						images={event.images}
					/>
				))}
			</div>
		</section>
	);
}

export default EventPage;

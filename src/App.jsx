import "./App.css";
import data from "./data";
import Card from "./Card";


function App() {
	function searchHandler() {

	}

	return (
		<div className="w-full flex flex-col bg-black  overflow-hidden">
			<div className="flex flex-row text-white w-[30%] mx-auto p-4">
				<p className=" mx-auto text-3xl font-semibold">Important Links</p>
			</div>
			<div className="w-full h-[1px] bg-white opacity-30"></div>

			<div className="grid lg:grid-cols-4 gap-3 w-[95%] mx-auto p-10 md:grid-cols-3 sm:grid-cols-1 place-items-center">

				{
					data.map((website) => {
						return <Card
							key={website.id}
							img={website.img}
							title={website.title}
							tags={website.tags}
							information={website.information}
						/>
					})
				}


			</div>
		</div>

	);
}

export default App;

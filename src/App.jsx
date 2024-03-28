import "./App.css";
import data from "./data";
import Card from "./Card";


function App() {
	function searchHandler() {

	}

	return (
		<div className="w-[100vw] flex flex-col bg-black">
			<div className="flex flex-row text-white w-[30%] mx-auto justify-between p-4">
				<p className="border-black ">Home</p>
				<p>Tags</p>
				<p>Cards</p>
				<input type="text" id="searchInput" onKeyUp={searchHandler()} />
			</div>
			<div className="w-full h-[1px] bg-white"></div>

			<div className="grid lg:grid-cols-4 gap-3 w-[95%] mx-auto p-10 md:grid-cols-3 sm:grid-cols-1">

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

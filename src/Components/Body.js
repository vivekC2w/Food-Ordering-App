import RestaurantCard, {
  withPromotedLabel,
} from "../Components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  //State Variable - Super Powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch => super power JS Engine has
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  // const { loggedInUser, setUserName } = useContext(UserContext);

  //Conditional Rendering
  return listOfRestaurants && listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm p-1"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-lime-200 m-4 rounded-lg"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //SearchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-lime-200 m-4 rounded-lg"
            onClick={() => {
              //Filter Logic
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              //setListOfRestaurant
              setListOfRestaurants(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black rounded-sm p-1"
            placeholder="Username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex flex-wrap gap-10">
        {/* RestaurantCard */}
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              {
                /* If the restaurant is promoted then add a promoted label to it */
                restaurant.data.promoted ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;

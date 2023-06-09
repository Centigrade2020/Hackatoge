import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

import vacation1 from "../../Assets/vacation1.webp";
import dubai from "../../Assets/dubai.webp";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) navigate("/auth");
  }, [localStorage.getItem("isAuthenticated")]);

  // let permission = Notification.requestPermission();
  // const notification =new Notification("4:00");

  //   const options = {
  //     method: "GET",
  //     url: "https://ai-trip-planner.p.rapidapi.com/",
  //     params: { days: "3", destination: "Delhi,IN" },
  //     headers: {
  //       "X-RapidAPI-Key": "54fb866cd8mshb99f4f47ec1655ap117b34jsnd2baed40b395",
  //       "X-RapidAPI-Host": "ai-trip-planner.p.rapidapi.com",
  //     },
  //   };
  // useEffect (()=>{
  //   axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // },[])

  // useEffect(() => {
  //   fetch(
  //     "https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=DEL&travelerCountryCode=FR",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": " application/vnd.amadeus+json ",
  //         Authorization: "Bearer UongRGzEZh1bbpTIPNepApHW7rNp",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data);
  //       setRecommendedData(res.data);
  //     });
  // }, []);
  const recommendedData = [
    {
      _id: "643a9091a7e8be42cd8ac139",
      plan: [
        {
          day: 1,
          activities: [
            {
              time: "9:00 AM",
              description: "Arrive in Dubai and check-in to hotel",
            },
            {
              time: "11:00 AM",
              description: "Visit the Dubai Mall",
            },
            {
              time: "3:00 PM",
              description: "Take a tour of the Burj Khalifa",
            },
            {
              time: "7:00 PM",
              description: "Experience the Dubai Fountain show",
            },
          ],
        },
        {
          day: 2,
          activities: [
            {
              time: "10:00 AM",
              description: "Visit the Palm Jumeirah Island",
            },
            {
              time: "2:00 PM",
              description: "Relax at the Jumeirah Beach",
            },
            {
              time: "7:00 PM",
              description: "Dine at the Burj Al Arab",
            },
          ],
        },
        {
          day: 3,
          activities: [
            {
              time: "9:00 AM",
              description: "Explore the Dubai Miracle Garden",
            },
            {
              time: "1:00 PM",
              description: "Visit the Dubai Museum",
            },
            {
              time: "5:00 PM",
              description: "Shop at Souk Madinat Jumeirah",
            },
            {
              time: "8:00 PM",
              description: "Experience nightlife at the Dubai Marina",
            },
          ],
        },
      ],
      key: "3-dubai,ae",
    },
    {
      _id: "643a8f77a7e8be42cd8ac137",
      plan: [
        {
          day: 1,
          activities: [
            {
              time: "9:00 AM",
              description: "Arrive at Ngurah Rai International Airport",
            },
            {
              time: "11:00 AM",
              description: "Check-in to hotel",
            },
            {
              time: "1:00 PM",
              description: "Lunch at Warung Nasi Ayam Bu Oki",
            },
            {
              time: "3:00 PM",
              description: "Visit Tanah Lot Temple",
            },
            {
              time: "6:00 PM",
              description: "Dinner at La Lucciola",
            },
          ],
        },
        {
          day: 2,
          activities: [
            {
              time: "7:00 AM",
              description: "Breakfast at hotel",
            },
            {
              time: "9:00 AM",
              description: "Visit Tegallalang Rice Terraces",
            },
            {
              time: "12:00 PM",
              description: "Lunch at Bebek Tepi Sawah Restaurant",
            },
            {
              time: "3:00 PM",
              description: "Visit Ubud Monkey Forest",
            },
            {
              time: "6:00 PM",
              description: "Dinner at Warung Enak",
            },
          ],
        },
        {
          day: 3,
          activities: [
            {
              time: "6:00 AM",
              description: "Depart for Mount Batur sunrise trek",
            },
            {
              time: "11:00 AM",
              description: "Return from trek and have late breakfast",
            },
            {
              time: "1:00 PM",
              description: "Visit Tirta Empul Temple",
            },
            {
              time: "4:00 PM",
              description: "Relax at Kuta Beach",
            },
            {
              time: "8:00 PM",
              description: "Farewell dinner at Bambu Restaurant",
            },
          ],
        },
      ],
      key: "3-bali,id",
    },
    {
      _id: "6424d2b113185d8420fdb6fc",
      plan: [
        {
          day: 1,
          activities: [
            {
              time: "9:00 AM",
              description: "Arrive in London and check-in to hotel",
            },
            {
              time: "11:00 AM",
              description: "Visit the British Museum",
            },
            {
              time: "2:00 PM",
              description: "Take a tour of the Tower of London",
            },
            {
              time: "6:00 PM",
              description: "Take a stroll through Hyde Park",
            },
          ],
        },
        {
          day: 2,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit Buckingham Palace",
            },
            {
              time: "11:00 AM",
              description: "Explore the famous Trafalgar Square",
            },
            {
              time: "2:00 PM",
              description: "Have lunch at Covent Garden Market",
            },
            {
              time: "4:00 PM",
              description: "Visit the London Eye",
            },
            {
              time: "6:00 PM",
              description: "Take a walk along the River Thames",
            },
          ],
        },
        {
          day: 3,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit the Houses of Parliament",
            },
            {
              time: "11:00 AM",
              description: "Take a tour of Westminster Abbey",
            },
            {
              time: "2:00 PM",
              description: "Visit the Tate Modern art museum",
            },
            {
              time: "5:00 PM",
              description: "Enjoy a traditional English afternoon tea",
            },
            {
              time: "7:00 PM",
              description: "Watch a musical performance at the West End",
            },
          ],
        },
      ],
      key: "3-london,uk",
    },
    {
      _id: "643a77f253614f54582430e4",
      plan: [
        {
          day: 1,
          activities: [
            {
              time: "9:00 AM",
              description: "Arrive in Chennai and check-in to hotel",
            },
            {
              time: "11:00 AM",
              description: "Visit Kapaleeswarar Temple",
            },
            {
              time: "1:00 PM",
              description: "Lunch at Saravana Bhavan",
            },
            {
              time: "3:00 PM",
              description: "Explore Fort St George",
            },
            {
              time: "7:00 PM",
              description: "Dinner at Raintree",
            },
          ],
        },
        {
          day: 2,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit Marina Beach",
            },
            {
              time: "12:00 PM",
              description: "Lunch at Murugan Idli Shop",
            },
            {
              time: "2:00 PM",
              description: "Explore Government Museum",
            },
            {
              time: "6:00 PM",
              description: "Shopping at T Nagar",
            },
            {
              time: "8:00 PM",
              description: "Dinner at Annalakshmi",
            },
          ],
        },
        {
          day: 3,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit Mahabalipuram",
            },
            {
              time: "1:00 PM",
              description: "Lunch at Moonrakers",
            },
            {
              time: "3:00 PM",
              description: "Explore Dakshina Chitra",
            },
            {
              time: "7:00 PM",
              description: "Dinner at Madras Pavilion",
            },
          ],
        },
        {
          day: 4,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit Vadapalani Murugan Temple",
            },
            {
              time: "11:00 AM",
              description: "Shopping at Phoenix Marketcity",
            },
            {
              time: "1:00 PM",
              description: "Lunch at Pind Balluchi",
            },
            {
              time: "3:00 PM",
              description: "Explore Guindy National Park",
            },
            {
              time: "7:00 PM",
              description: "Dinner at Hamsa",
            },
          ],
        },
        {
          day: 5,
          activities: [
            {
              time: "9:00 AM",
              description: "Visit San Thome Basilica",
            },
            {
              time: "11:00 AM",
              description: "Shopping at Mylapore",
            },
            {
              time: "1:00 PM",
              description: "Lunch at Hotel Paragon",
            },
            {
              time: "3:00 PM",
              description: "Explore Birla Planetarium",
            },
            {
              time: "7:00 PM",
              description: "Dinner at Peshawri",
            },
          ],
        },
      ],
      key: "5-chennai,in",
    },
  ];

  const city = useRef();
  const peopleCount = useRef();

  // const [city, setCity] = useState("");
  // const [peopleCount, setPeopleCount] = useState("");
  const [budget, setBudget] = useState(10000);
  const [data, setData] = useState();
  const [openTP, setOpenTP] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:8000/",
      },
      body: JSON.stringify({
        days: peopleCount.current?.value,
        city: city.current?.value,
        budget: budget,
        email: JSON.parse(localStorage.getItem("user"))["email"],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(JSON.parse(res));
        navigate("/searchTickets", { state: { data: JSON.parse(res)[0] } });
        setLoading(false);
      });
  };

  const TripPlanner = () => {
    const [countdown, setCountdown] = useState(40);

    useEffect(() => {
      countdown > 0
        ? setTimeout(() => setCountdown(countdown - 1), 1000)
        : setCountdown(15);
    }, [countdown]);

    return (
      <div className="TripPlanner">
        <div className="tpDisplay">
          {loading && (
            <div className="loadingScreen">
              <h1>We are planning a trip for you!</h1>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_7fwvvesa.json"
                background="transparent"
                speed="0.5"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></lottie-player>
              <p>
                Please wait, Estimated countdown <span>{countdown}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {openTP && <TripPlanner />}
      <div className="Home">
        <div className="homeHeader">
          <img src={vacation1} alt="" />
          <div className="overlay"></div>
          <div className="content">
            <h1>
              Discover Awesome Trips You
              <br />
              Have Never Seen
            </h1>
            <p>
              Jobs fill your pockets, adventures fill your soul, <br /> Remember
              that happiness is a way of travel, not a destination.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="left">
            <h1>Popular packages</h1>
            <div className="packagesDisplay">
              {recommendedData.map((i, k) => (
                <div
                  className="package"
                  onClick={() => {
                    // window.open("/searchTickets", "_blank");
                    navigate("/searchTickets", { state: { data: i } });
                  }}
                  key={k}
                >
                  <div className="img">
                    <img src={dubai} alt="dubai" />
                    <p className="pdDays">{i.plan.length} Days</p>
                  </div>
                  <div className="content">
                    <h2>{i.key}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <h1>Plan your Trip</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label>
                <p>Which city would you like to visit?</p>{" "}
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  ref={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </label>

              <label>
                <p>How many people?</p>{" "}
                <input
                  type="number"
                  placeholder="Count"
                  name="count"
                  ref={peopleCount}
                  // onChange={(e) => {
                  //   setPeopleCount(e.target.value);
                  // }}
                />
              </label>

              {/* <label>
                  IATA code<input placeholder="IATA code"></input>
                </label> */}

              {/* <label>
              1000{" "}
              <input
                placeholder="Budget"
                type="range"
                onChange={(e) => {
                  setBudget(e.target.value);
                  // console.log(budget);
                }}
                title={budget * 1000}
                min="1"
                max="10"
              ></input>
              10000
            </label>
            <p>{budget * 1000}</p> */}

              <label>
                <p>What is your budget?</p>
                <div className="buttonsDisplay">
                  <button
                    value={10000}
                    className={budget == 10000 ? "selectedBud" : "bud"}
                    onClick={(e) => {
                      setBudget(e.target.value);
                    }}
                  >
                    10,000 Rs
                  </button>
                  <button
                    value={20000}
                    className={budget == 20000 ? "selectedBud" : "bud"}
                    onClick={(e) => {
                      setBudget(e.target.value);
                    }}
                  >
                    20,000 Rs
                  </button>
                  <button
                    value={30000}
                    className={budget == 30000 ? "selectedBud" : "bud"}
                    onClick={(e) => {
                      setBudget(e.target.value);
                    }}
                  >
                    30,000 Rs
                  </button>
                  <button
                    value={30001}
                    className={budget == 30001 ? "selectedBud" : "bud"}
                    onClick={(e) => {
                      setBudget(e.target.value);
                    }}
                  >
                    {">"}30,000 Rs
                  </button>
                </div>
              </label>

              <button
                onClick={() => {
                  handleClick();
                  setOpenTP(true);
                }}
              >
                <span className="material-symbols-outlined">manage_search</span>{" "}
                Plan your trip
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

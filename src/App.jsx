import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = response.data;
      setData(data);
      console.log(data);
      setIsLoading(true);
    };
    fetchAPI();
  }, []);

  const handleUsernameClick = (user) => {
    setuser(user);
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex md:flex-row flex-col-reverse h-[100vh] w-[100%] overflow-hidden">
            <div className="h-[100%] overflow-y-scroll md:w-[40%] w-full">
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => handleUsernameClick(item)}
                      className={`cursor-pointer p-3 m-1 ${
                        user && user.id === item.id
                          ? "bg-yellow-300"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          className="h-[40px] w-[40px]"
                          src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                          alt=""
                        />
                        {item.profile.username}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex h-full w-full md:w-[60%] justify-center items-center ">
              {/* <div className="UserCard w-[80%] flex justify-center items-center"> */}
              {user ? (
                <div className="UserCard w-[300px] md:w-[400px] h-[300px] md:h-[500px] flex flex-col justify-center  border-2 border-black">
                  {/* <h2>User Details</h2> */}
                  <div className="flex w-full h-[225px] justify-center items-center">
                    <img
                      className="h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1Mly7C6D_WWpPXTAO4dF52D9Wd9FKuC9zw&s"
                      alt=""
                    />
                  </div>
                  <div className="h-[225px] flex flex-col justify-center px-5">
                    <p>
                      <span className="text-lg font-medium">First name : </span>
                      {user.profile.firstName}
                    </p>
                    <p>
                      <span className="text-lg font-medium">Last name : </span>
                      {user.profile.lastName}
                    </p>
                    <p>
                      <span className="text-lg font-medium">Job title : </span>
                       {user.jobTitle}
                    </p>
                    <p>
                      <span className="text-lg font-medium">Bio : </span>
                      {user.Bio}
                    </p>
                    <p>
                      <span className="text-lg font-medium">Email : </span>
                      {user.profile.email.toLowerCase()}
                    </p>
                  </div>
                </div>
              ) : (
                <>Select a user to show thier details</>
              )}
              {/* </div> */}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <img
            class="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/491270/loading-spinner.svg"
            alt="Loading icon"
          ></img>
          <p className="text-xl">Loading users data ...</p>
        </div>
      )}
    </>
  );
}

export default App;

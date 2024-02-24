import React from "react";
import Logo from "../../../assets/Event1.jpg";

export const Entery = () => {
  return (
    <>
      <div className="flex flex-coloumn flex-wrap">
        <div className="mx-auto max-w-screen-xl p-2 my-5">
          <form className="flex items-center">
            <div className="relative w-full">
              <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
              <input
                name="search"
                type="text"
                id="simple-search"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                autoComplete="off"
                required=""
              />
            </div>
            <button
              type="submit"
              className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            ></button>
          </form>
        </div>
      </div>

      <div className="flex flex-coloumn flex-wrap">
        <div className="flex flex-row flex-wrap items-center border-2 w-3/4 mx-auto mt-10">
          <img
            className="bg-slate-100 object-cover object-center justify-center w-100 h-60 lg:w-80"
            src={Logo}
            alt="Card Image"
          />
          <div class="p-4 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
            <h2 class="text-xl font-semibold text-gray-800">
              InnovateTech Expo
            </h2>
            <p class="mt-2 text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sunt minus dolores veritatis libero, repellat hic soluta! Suscipit
              labore incidunt, accusantium reprehenderit perferendis, sit
              aspernatur maiores adipisci rerum, quaerat ex tempore odio
              delectus magnam ipsa excepturi assumenda quisquam ducimus.
              Assumenda, similique sit consequatur eum itaque velit quasi
              numquam necessitatibus rerum, ullam suscipit voluptatum. Ullam,
              eligendi ratione? Culpa, aspernatur? Doloremque, vitae. Ad
              doloremque modi blanditiis, cumque quo voluptatibus, adipisci
              saepe quisquam quis veniam ratione quaerat temporibus, commodi
              repudiandae molestiae assumenda eum?
            </p>
            <div className="flex flex-wrap flex-row justify-around">
              <h2>Date :</h2>
              <h2>Location :</h2>
            </div>

            <div class="mt-4">
              <a href="#" class="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center border-2 w-3/4 mx-auto mt-10">
          <img
            className="bg-slate-100 object-cover object-center justify-center w-100  h-60 lg:w-80"
            src={Logo}
            alt="Card Image"
          />
          <div class="p-4 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
            <h2 class="text-xl font-semibold text-gray-800">
              InnovateTech Expo
            </h2>
            <p class="mt-2 text-gray-600 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              labore animi maxime amet iusto a asperiores vero accusantium autem
              velit, vitae perferendis! Omnis, praesentium minima? Ipsa
              voluptate expedita eaque corrupti quas recusandae id, tenetur
              consequuntur quasi inventore incidunt? Vitae commodi nobis iste
              similique assumenda. Iusto, omnis. Praesentium quis mollitia quas
              animi neque accusantium aspernatur ratione temporibus
              voluptatibus, tempore, veniam, iusto dolorem illo debitis a
              quisquam nihil ipsam nisi totam. Praesentium dolor quisquam, illo
              facilis non recusandae natus illum atque rerum.
            </p>
            <div className="flex flex-wrap flex-row justify-around">
              <p>Date :</p>
              <p>Location :</p>
            </div>

            <div class="mt-4">
              <a href="#" class="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center border-2 w-3/4 mx-auto mt-10">
          <img
            className="bg-slate-100 object-cover object-center justify-center w-100 h-60 lg:w-80"
            src={Logo}
            alt="Card Image"
          />
          <div class="p-4 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
            <h2 class="text-xl font-semibold text-gray-800">
              InnovateTech Expo
            </h2>
            <p class="mt-2 text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              consequuntur nobis quisquam harum fuga incidunt mollitia, dolore
              animi praesentium. Saepe unde sit dolore cupiditate eligendi
              laudantium iure amet iusto nemo temporibus totam possimus, in non
              perferendis laborum nam magni iste maiores illo delectus. Animi,
              perspiciatis dicta sint fuga repellendus harum neque molestias
              deserunt porro minima ex sed quaerat expedita consequatur aliquam
              quo? Cupiditate voluptate error eos neque id nobis libero, alias
              expedita magnam cumque eveniet sapiente perspiciatis iure itaque
              doloribus!
            </p>
            <div className="flex flex-wrap flex-row justify-around">
              <p>Date :</p>
              <p>Location :</p>
            </div>

            <div class="mt-4">
              <a href="#" class="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

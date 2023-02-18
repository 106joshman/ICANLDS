import React from "react";

const Blog = () => {
  return (
    // <!-- Container Start -->
    <div className="bg-[#a2dbc7]">
      <div id="blog" class="container px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <div className=" text-center">
            <h2 class="text-3xl font-bold py-4 text-[#1b8450] text-center">
              District Publication
            </h2>
          </div>
          <div className="newsList flex justify-between">
            <ul className="newsItem w-full flex flex-col">
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  Newly appointed Electoral Committe ahead of the 2023 distrcit election
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICAN President visits ICANLDS for a one day courtesy visit and Patron Investiture.
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS members inagurated as members of the FRSC special marshal Corps in Lagos.
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS organizes a one day event to sensitize students of the Accounting profession to schools in its host community.
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  Photo story of the 2022 Investiture Ceremony of the 20th Chairman of ICAN Lagos and District Society.
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS 2022 AGM  (Ease-In-Out as baton changes hand)
                </a>
              </li><li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS 2022 Executive committee members meets with PwC partners to build partnership.
                </a>
              </li>

            </ul>
            {/* <div className="ads w-1/2">
              <div className="rounded-tr-3xl rounded-bl-3xl h-[350px] border-2"></div>
            </div> */}
          </div>

          {/* <ul className="flex flex-col lg:flex-row justify-start flex-wrap">
            <li className="subtitle_items rounded-md mb-10 mx-5 max-w-full flex itemscenter justify-center text-center border-b-2 hover:text-gray-500 hover:shadow-lg">
              <a href="#" className="py-5 w-full px-10">
                Lorem, ipsum dolor.
              </a>
            </li>
          </ul> */}

          {/* <div class="grid lg:grid-cols-3 gap-10 xl:gap-x-12">
            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">White city</h5>
                  <p class="mb-4 pb-2">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">A lonely bench</h5>
                  <p class="mb-4 pb-2">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">Happy snow</h5>
                  <p class="mb-4 pb-2">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">White city</h5>
                  <p class="mb-4 pb-2">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">A lonely bench</h5>
                  <p class="mb-4 pb-2">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">White city</h5>
                  <p class="mb-4 pb-2">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">A lonely bench</h5>
                  <p class="mb-4 pb-2">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-0">
              <div class="relative block bg-white rounded-lg shadow-lg">
                <div class="flex">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                      class="w-full"
                    />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="font-bold text-lg mb-3">Happy snow</h5>
                  <p class="mb-4 pb-2">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
    // <!-- Container stop -->
  );
};

export default Blog;

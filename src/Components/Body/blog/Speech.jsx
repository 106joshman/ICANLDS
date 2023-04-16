import React from "react";
import ChairMan from "../../../assets/Exco/AlestaWIlcox.jpg";
const Speech = () => {
  return (
    <section className="relative bg-[#fff]">
      <div className=" mx-auto container">
        {/* Chairman's Speech */}
        <div className="flex flex-col lg:h-[100vh] lg:flex-row justify-between items-center px-6 pt-[6rem] lg:pt-6">
          <div className="image">
            <img
              src={ChairMan}
              // src="https://mdbootstrap.com/img/new/avatars/5.jpg"
              className="w-full md:w-35 lg:w-full m-auto h-96"
              // loading="lazy"
              alt=""
              srcSet=""
            />
            <p className="flex flex-col lg:left-0 -top-20 ml-2.5 w-[350px] text-white relative">
              <span className="text-3xl font-semibold">Alesta Wilcox, FCA</span>
              <span className="text-base font-bold">20th Chairman</span>
            </p>
          </div>
          <div className="text lg:w-3/5">
            <h3 className="text-3xl mb-4">
              Welcome to ICAN Lagos & District Society
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corrupti quidem suscipit eveniet a quae quam
              assumenda impedit reiciendis non at, beatae quas, numquam maxime,
              fugit earum eaque dolores. Dolorem mollitia reprehenderit aut
              voluptatibus voluptatem ea quis, consequuntur enim laborum ut
              dolor autem iusto recusandae ipsa id, repudiandae adipisci
              laudantium repellat! Minus facere maiores omnis ea recusandae
              nulla nobis distinctio dolor, excepturi earum molestias quia at
              ratione? Laborum praesentium facilis, excepturi nulla culpa unde
              impedit corrupti hic voluptate delectus perferendis necessitatibus
              recusandae maiores doloribus est voluptatum eligendi officia in.
              Harum reiciendis sint facere facilis odio, obcaecati iusto,
              voluptatibus sed minima inventore distinctio. Officia,
              perferendis? Reiciendis possimus veniam odio alias, hic est
              aliquam enim rem magnam non esse quae eius commodi. Laboriosam
              adipisci facere possimus saepe repellendus. Provident nobis odit
              perferendis? Incidunt, fugit id exercitationem dolore deserunt
              accusantium eaque amet cumque repellat adipisci assumenda iste
              vitae perspiciatis ipsam minus rem corporis omnis. Natus
              architecto hic doloremque perspiciatis quas sit at, possimus
              minima, molestiae debitis molestias optio aspernatur saepe tempora
              quibusdam porro cupiditate voluptate! Provident, cumque sequi
              debitis cum enim, quia quo sed rem nisi neque magni. Cumque
              exercitationem quia molestias? Corrupti iure natus laborum? Quam,
              inventore mollitia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speech;

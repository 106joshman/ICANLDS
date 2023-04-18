import React from "react";
import ChairMan from "../../assets/Exco/AlestaWIlcox.jpg";

const ChairmanSpeech = () => {
  return (
    <>
      <div className=" mx-auto container bg-[#fff]">
        {/* Chairman's Speech */}
        <div className="flex flex-col lg:h-[100v] lg:flex-row justify-between items-center p-6">
          <div className="image"  data-aos="zoom-in-up">
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
          <div
            className="text lg:w-3/5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h3 className="text-3xl mb-4">
              Welcome to ICAN Lagos & District Society
            </h3>
            <p className="text-justify mb-2.5" data-aos="fade-right">
              My fellow exco members, permit me to once again congratulate you
              for the opportunity given to you to serve the district at this
              time. Make no mistake we are not just the only best to hold our
              respective positions, our being leaders today is by sheer
              providence, the will of God, and the pleasure of our colleagues.
              The district is bigger than every one of us and the district will
              outlive us just as we all came to meet it. Thus, what is required
              of us is a total commitment to the course and advancement of the
              district and the institute in general.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-left">
              Our conduct and actions at all times should be guided by good
              conscience, love, tolerance and friendliness. No one person is
              right or wrong all the time and we must always remember to listen
              to one another with open minds.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-right">
              Your election into the cabinet at this time makes you crucial to
              the success of my tenure. I will therefore ask you for three
              things: <strong> support, more support, and total support</strong>
              . I want to assure you all that I have no other agenda or
              ambitions other than to take our district to the next level.
              <strong> I will make it count by God's special grace</strong>.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-left">
              Distinguished ladies and gentlemen, I want to thank all those who
              made this event possible with the several donations, placed
              advertisements, and congratulatory messages that enabled us to
              fund this ceremony. I say a special thank you to the indefectible
              planning committee members for time spent attending the planning
              meeting twice every week for the last six weeks at personal cost
              and inconvenience. Words cannot express my feelings; all I can say
              is God bless you all. This is a testament to the fact that
              anything we put our minds to do can be done no matter the
              situation and obstacles.{" "}
              <strong> Failure is not an option.</strong>
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-right">
              I want to also thank my darling daughter{" "}
              <strong> Jacqueline Wilcox </strong>for her support and various
              contributions to the success of this event. I love you and I am
              very proud of you, Jackic. It is because of you that I strive to
              leave an untarnished legacy please sustain it in all your thoughts
              and deeds.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-left">
              Finally, I want to acknowledge publicly and the before you all the
              great contributions of the unsung hero of my life, my mother{" "}
              <strong> Late Madam Irene Wilcox (1927-2013)</strong> for her
              sweat, resilience, sacrifices, discipline, and prayers that
              unlocked all the potentials and virtues of hard work, dedication,
              honesty, and passion for success which endeared you into honoring
              me with this great leadership position. Though she has long gone
              to rest with the Lord, her legacy still lives on and is being
              rewarded. I, therefore, dedicate this exulted position to her
              memory.
            </p>
            <p className="text-justify mb-2.5">
              Once again, thank you all for coming, and thank you for your
              attention.
            </p>
            <h5 className="flex flex-col font-bold" data-aos="fade-up">
              <span>Alesta Wilcox, FCA</span>
              <span>20th Chairman, ICANLDS</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairmanSpeech;

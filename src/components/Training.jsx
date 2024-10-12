import { training } from "../constants";
import Section from "./Section";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { TraningCard } from "./TraningCard";


const Training = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <div
          className={`md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
        >
          <h2 className="h2 ">
            {" "}
            <span className="text-[#2396ed]">tnp</span>
            <span className="text-[#ffff00]">Lab</span> Training{" "}
          </h2>
        </div>
        {/* <Heading className="" title="tnpLab Training" /> */}

        <div className="flex flex-wrap gap-10 mb-10">
          {training.map((training,i) => {
            return (
              <>
              <TraningCard traning={training}  i={i} />
              {/* {training.light && <GradientLight />} */}
              </>
              
            );
          })}
        </div>
      </div>
      <ButtonGradient />
    </Section>
  );
};

export default Training;

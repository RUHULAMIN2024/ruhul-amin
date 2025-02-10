/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import skills from "../data/skills.json";
import Container from "./Container";

const Skills = () => {
  return (
    <Container>
      <div className=" py-10 skills" id="skills">
        <h1 className=" mb-6 ml-2 text-4xl">MY SKILLS</h1>
        <div className="items flex justify-center gap-5 flex-wrap items-center">
          {skills.map((data: any, index: number) => (
            <div
              className="item flex w-full md:w-[280px] p-5  shadow-lg shadow-blue-300  rounded-xl text-center bg-blue-500 flex-col items-center justify-center"
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image width={70} height={70} src={`/${data.imageSrc}`} alt="" />
              <h3 className="text-3xl text-white">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;

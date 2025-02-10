import Container from "./Container";
import { Card, CardContent } from "./ui/card";
import photo from "../assets/ruhul.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <Container>
      <Card className="w-full shadow-lg rounded-2xl my-10 bg-white">
        <CardContent>
          <div className="flex justify-between md:p-8 flex-col-reverse md:flex-row gap-3 items-center">
            <div className="flex-1 text-justify md:mr-12">
              <h1 className="text-4xl mb-5">Welcome To MY Profile</h1>

              <p>
                Hello! I am Ruhul Amin, a passionate and dedicated Web Developer
                specializing in the MERN stack. With a strong foundation in
                front-end and back-end development, I have gained hands-on
                experience with modern web technologies such as React.js,
                Node.js, Express.js, MongoDB, Redux, TypeScript, and Next.js. I
                am continuously improving my skills to build scalable,
                interactive, and user-friendly web applications.
              </p>

              <p className="hidden lg:block">
                My goal is to become a proficient full-stack developer and to
                contribute to innovative projects while continuously improving
                my technical skills. I aim to collaborate with dynamic teams and
                take on leadership roles to mentor and guide other developers.
              </p>
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download="Resume.pdf"
                  className="border border-blue-500 text-blue-500 px-5 py-2 rounded-sm hover:bg-blue-500 hover:text-black transition duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="banner-right">
              <div
                className="img"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <Image src={photo} alt="hero" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Banner;

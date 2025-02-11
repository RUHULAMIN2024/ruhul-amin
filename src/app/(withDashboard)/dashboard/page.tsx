import Container from "@/components/Container";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const sesion = await getServerSession(authOptions);
  const placeholder =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-picture-placeholder&psig=AOvVaw34dwBn2dGZ8R1R1DY3vXqT&ust=1739353791116000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDGyZSsu4sDFQAAAAAdAAAAABAE";
  return (
    <Container>
      <div>
        <h1 className="text-3xl text-center mt-10">Welcome To Dashboard</h1>
      </div>
      <div className="flex justify-center my-5">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
          <div className="flex justify-center mb-6">
            <img
              src={sesion?.user?.image || placeholder}
              alt="Profile Picture"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
            />
          </div>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
            {sesion?.user?.name}
          </h2>
          {/* <p className="text-lg text-center text-gray-600 mb-4">
            MERN Stack Developer | Web Enthusiast
          </p> */}
          <div className="text-center mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {sesion?.user?.email}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ruhulamin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RUHULAMIN2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;

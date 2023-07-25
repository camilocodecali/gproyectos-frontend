import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="mx-auto p-5 md:p-40 md:flex md:justify-center bg-[url('/bg-auth.jpg')] bg-cover bg-center bg-no-repeat	">
        <div className="md:w-2/3 lg:w-2/5">
          <Outlet />
        </div>

        
      </main>

    </>
  );
};

export default AuthLayout;

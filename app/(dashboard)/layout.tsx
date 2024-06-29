import Header from '@/components/header';

type Props = {
  children: React.ReactNode; // Sets the types for the children props
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;

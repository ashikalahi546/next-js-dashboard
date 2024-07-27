import Sidebar from '@/app/sidebar/Sidebar';


const DashboardLayout = ({children}) => {
    return (
        <div>
        <Sidebar/>
        {children}
        </div>
    );
};

export default DashboardLayout;
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='container mx-auto min-h-screen'>
                <Header />
                <Outlet />
            </main>
            <div className='p-10 text-center bg-gray-800 mt-10'>Made with ❤️ by Vixen-Victory</div>
        </div>
    )
}

export default AppLayout

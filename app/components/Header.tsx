import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-white border-b'>
            <div className='max-w-5xl mx-auto p-4 flex items-center justify-between'>
                <Link href='/'>
                    <span className='font-bold'>GolfApp</span>
                </Link>

                <nav className='flex gap-4'>
                    <Link href='/courses'>Courses</Link>
                    <Link href='/rounds'>Rounds</Link>
                    <Link href='/profile'>Profile</Link>
                </nav>
            </div>
        </header>
    );
}
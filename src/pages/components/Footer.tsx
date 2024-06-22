import { Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-center py-3 bg-content2'>
      <Link
        isExternal
        className='flex items-center gap-1 text-current'
        href='https://github.com/Xizted'
        title='nextui.org homepage'
      >
        <span className='text-default-600'>Powered by</span>
        <p className='text-primary'>Osmar Ortiz</p>
      </Link>
    </footer>
  );
};

export default Footer;

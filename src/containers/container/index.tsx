import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='max-w-[1300px] px-5 mx-auto w-full'>
      {children}
    </div>
  );
};

export default Container;

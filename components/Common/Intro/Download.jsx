import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='./assets/VILAL_ALI_CV_SDE_II_2024_V4.pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;

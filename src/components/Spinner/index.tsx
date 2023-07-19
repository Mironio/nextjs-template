import spinner from '/public/images/spinner.svg';
import Image from 'next/image';
import en from '@/locales/en';

export default function Spinner({ classNames = '' }) {
  return (
    <div className={`${classNames} my-6 mt-24 flex items-center justify-center`}>
      <div className="rounded-full shadow-pq-m">
        <Image
          priority
          src={spinner as string}
          alt={en.loading}
          className="animate-spin"
        />
      </div>
    </div>
  );
}
